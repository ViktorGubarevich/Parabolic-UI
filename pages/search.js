import qs from "qs";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Search from "../components/Search";
import RecentArticles from "../components/RecentArticles";


const News = ({ articles, categories }) => {
  const router = useRouter();

  const searchQuery = articles.filter((query) =>
    query.attributes.content.toLowerCase().includes(router.query.term)
  );

  return (
    <Layout categories={categories}>
      <div className="flex justify-center m-auto mb-3 py-16 max-w-[1100px] max-lg:flex-col">
        <div className="flex flex-col px-4">
          <div className="flex text-4xl font-thin mb-5 uppercase tracking-widest">
            <div>Search Results for:</div>
            <div className="font-medium">{router.query.term}</div>
          </div>
          {searchQuery.length === 0 ? (
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-thin uppercase tracking-widest italic">
                Nothing Found
              </div>
              <div className="font-['Open-Sans'] my-2">
                Sorry, but nothing matched your search terms. Please try again
                with some different keywords.
              </div>
              <div className="text-xl uppercase font-['Helvetica']">
                Most Popular Categories
              </div>
              <ul className="font-['Open-Sans'] text-sm text-gray-700">
                {categories &&
                  categories.map((category) => {
                    return (
                      <li key={category.id}>
                        <Link
                          href={`/category/${category.attributes.slug}`}
                          className="flex text-lg bg-white rounded-lg py-1 pl-3 text-[#17bcb8] hover:decoration-[#007be0] my-2 shadow-[0_4px_8px_0px_rgba(0,0,0,0.25)]"
                        >
                          {category.attributes.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
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
          <Search articles={articles} />
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
