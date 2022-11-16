import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { fetchAPI, getStrapiURL } from "../lib/api";
import Seo from "../components/Seo";
import Login from "../components/Login";
import { useFetchUser } from "../lib/authContext";

const Portfolios = ({ categories, portfolio }) => {
  const { user } = useFetchUser();
  const seo = {
    metaTitle: portfolio.attributes.title,
    metaDescription: portfolio.attributes.subtitle,
  };

  return (
    <>
      {user ? (
        <Layout user={user} categories={categories}>
          <Seo seo={seo} />
          <div className="flex flex-col px-4 py-16 font-light">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-thin mb-5 uppercase tracking-widest text-center">
                {portfolio.attributes.title}
              </div>
              <div
                id="link"
                className="flex uppercase tracking-wider text-center pb-4"
              >
                <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
                  {portfolio.attributes.subtitle}
                </ReactMarkdown>
              </div>
              <iframe
                className="w-3/5 h-[1024px] outline-none border-2 border-black"
                src={portfolio.attributes.iframe}
              ></iframe>
            </div>
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export async function getServerSideProps() {
  const [categoriesRes, portfolioRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/portfolio", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      portfolio: portfolioRes.data,
    },
  };
}

export default Portfolios;
