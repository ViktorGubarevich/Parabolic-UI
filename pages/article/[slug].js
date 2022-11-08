import ReactMarkdown from "react-markdown";
import { fetchAPI, getStrapiURL } from "../../lib/api";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { toLocaleDate } from "../../utils/dateTime";
import Link from "next/link";
import { getStrapiMedia } from "../../lib/media";
import NextImage from "../../components/Image";
import RelatedArticles from "../../components/RelatedArticles";

const Article = ({ articles, article, categories }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.tab,
    article: true,
  };

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="py-16 flex flex-col max-w-[1100px] m-auto">
        <div className="bg-white rounded-lg p-5 mb-5">
          <div className="mb-5 uppercase text-4xl font-thin tracking-wider">
            {article.attributes.title}
          </div>
          <div className="flex mb-5 text-xs italic font-light">
            <div className="pr-1">By:</div>
            <div className="font-semibold">{article.attributes.writer}</div>
          </div>
          <div className="mb-4 text-xs uppercase font-thin tracking-wider">
            {toLocaleDate(article.attributes.published)} |{" "}
            {article.attributes.tab}
          </div>
          {article.attributes.secondAudio !== null ? (
            <>
              <div className="font-extralight">Listen to this post</div>
              <audio controls className="w-full">
                <source
                  type="audio/mpeg"
                  src={article.attributes.secondAudio}
                />
              </audio>
            </>
          ) : (
            ""
          )}
          {article.attributes.audio.data !== null ? (
            <>
              <audio controls className="w-full">
                <source
                  type="audio/mpeg"
                  src={`${getStrapiMedia(article.attributes.audio)}`}
                />
              </audio>
            </>
          ) : (
            ""
          )}
          <div
            id="margin"
            className="tracking-wid font-['Open-Sans'] text-lg leading-none"
          >
            <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
              {article.attributes.content}
            </ReactMarkdown>
          </div>
          {article.attributes.pdf.data !== null &&
          article.attributes.image.data !== null ? (
            <>
              <Link
                href={`${getStrapiMedia(article.attributes.pdf)}`}
                className="text-[#17bcb8] hover:text-[#007be0]"
              >
                <div>View Fullscreen</div>
                <NextImage image={article.attributes.image} />
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col items-center bg-white py-14">
        <div className="text-center max-w-[1140px] uppercase text-4xl font-thin tracking-wider pb-4">
          Related Articles
        </div>
        <div className="flex justify-around max-w-[1140px]">
          <RelatedArticles articles={[articles[1], articles[2], articles[3]]} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [articlesRes, categoriesRes, articlesAllRes] = await Promise.all([
    fetchAPI("/articles", {
      filters: {
        slug: params.slug,
      },
      populate: "*",
    }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/articles", { populate: "*" }),
  ]);

  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes,
      articles: articlesAllRes.data,
    },
    revalidate: 1,
  };
}

export default Article;
