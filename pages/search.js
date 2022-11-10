import Card from "../components/Card";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";
import { useFetchUser } from "../lib/authContext";
import qs from "qs";
import { useRouter } from "next/router";
import Search from "../components/Search";
import RecentArticles from "../components/RecentArticles";
import Login from "../components/Login";

const News = ({ articles, categories }) => {
  const { user } = useFetchUser();
  const router = useRouter();

  const searchQuery = articles.filter((query) =>
    query.attributes.content.toLowerCase().includes(router.query.term)
  );

  return (
    <>
      {user ? (
        <Layout user={user} categories={categories}>
          <div className="flex justify-center m-auto mb-3 py-16 max-w-[1100px] max-lg:flex-col">
            <div className="flex flex-col px-4">
              <div className="flex text-4xl font-thin mb-5 uppercase tracking-widest">
                <div>Search Results for:</div>
                <div className="font-medium">{router.query.term}</div>
              </div>
              {searchQuery.length === 0 ? (
                <div className="text-4xl font-thin mb-5 uppercase tracking-widest">
                  No News
                </div>
              ) : (
                <div className="flex flex-col">
                  {searchQuery &&
                    searchQuery.map((article) => {
                      return (
                        <Card
                          article={article}
                          key={`article__${article.attributes.slug}`}
                        />
                      );
                    })}
                </div>
              )}
            </div>
            <div className="flex flex-col px-4 max-lg:pt-4">
              <Search />
              <div className="flex flex-col bg-white rounded-lg">
                <div className="text-2xl uppercase color-[#212b38] px-5 pt-5">
                  Recent Articles
                </div>
                <RecentArticles
                  articles={[
                    articles[0],
                    articles[1],
                    articles[2],
                    articles[3],
                    articles[4],
                  ]}
                />
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ name_contains: term }, { detail_contains: term }],
    },
  });

  const [articlesRes, categoriesRes] = await Promise.all([
    fetchAPI(`/articles?${query}`, { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
    },
  };
}

export default News;
