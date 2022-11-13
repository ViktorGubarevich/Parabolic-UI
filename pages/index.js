import Layout from "../components/Layout";
import Articles from "../components/Articles";
import Search from "../components/Search";
import { fetchAPI } from "../lib/api";
import Seo from "../components/Seo";
import { useFetchUser } from "../lib/authContext";
import Login from "../components/Login";

export default function Home({ articles, categories, global }) {
  const { user } = useFetchUser();

  return (
    <>
      {user ? (
        <Layout user={user} categories={categories}>
          <Seo seo={global.attributes.defaultSeo} />
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
  const [articlesRes, categoriesRes, globalRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/global", {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      global: globalRes.data,
    },
    revalidate: 1,
  };
}
