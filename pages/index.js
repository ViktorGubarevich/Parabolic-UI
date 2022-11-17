import { fetchAPI } from "../lib/api";
import Layout from "../components/Layout";
import Articles from "../components/Articles";
import Search from "../components/Search";
import Seo from "../components/Seo";
import Card from "../components/Card";

const Home = ({ articles, categories, global }) => (
  <Layout categories={categories}>
    <Seo seo={global.attributes.defaultSeo} />
    <div className="flex justify-center m-auto max-w-[1100px] text-4xl mb-3 py-16 max-lg:flex-col">
      <div className="flex flex-col">
        <div className="px-4 pb-5">
          <Card article={articles[0]} />
        </div>
        <Articles articles={articles.slice(1)} />
      </div>
      <div className="px-4 max-lg:pt-4">
        <Search articles={articles} />
      </div>
    </div>
  </Layout>
);

export async function getServerSideProps() {
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
  };
}

export default Home;
