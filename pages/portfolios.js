import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { fetchAPI, getStrapiURL } from "../lib/api";
import NextImage from "../components/Image";
import Seo from "../components/Seo";

const Portfolios = ({ categories, portfolio }) => {
  const seo = {
    metaTitle: portfolio.attributes.title,
    metaDescription: portfolio.attributes.subtitle,
  };

  return (
    <Layout categories={categories}>
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
          <NextImage image={portfolio.attributes.image} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [categoriesRes, portfolioRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/portfolio", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      portfolio: portfolioRes.data,
    },
    revalidate: 1,
  };
}

export default Portfolios;
