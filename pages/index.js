import Layout from "../components/Layout";
import Articles from "../components/Articles";
import Search from "../components/Search";
import { fetchAPI } from "../lib/api";
import Seo from "../components/Seo";
import { useFetchUser } from "../lib/authContext";
import Login from "../components/Login";

export default function Home({ articles, categories, homepage }) {
  const { user } = useFetchUser();

  return (
    <>
      {user ? (
        <Layout user={user} categories={categories}>
          <Seo seo={homepage.attributes.seo} />
          <div className="flex justify-center m-auto max-w-[1100px] text-4xl mb-3 py-16 max-lg:flex-col">
            <Articles articles={articles} />
            <div className="px-4 max-lg:pt-4">
              <Search />
            </div>
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}

export async function getStaticProps() {
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}
