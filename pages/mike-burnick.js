import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { fetchAPI, getStrapiURL } from "../lib/api";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import NextImage from "../components/Image";

const MikeBurnick = ({ categories, abouts }) => {
  const seo = {
    metaTitle: abouts[1].attributes.title,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="flex flex-col max-w-[1140px] m-auto px-4 py-16 font-light">
        <div className="flex max-sm:flex-col max-sm:pb-4">
          <Link
            href="/about"
            className="text-4xl font-thin mb-5 uppercase tracking-widest text-[#007bff] hover:text-[#0056b3] hover:underline hover:decoration-[#0056b3]"
          >
            <span>{abouts[0].attributes.title}</span>
          </Link>
          <Link
            href="/mike-burnick"
            className="text-4xl font-thin pl-14 uppercase tracking-widest pointer-events-none max-sm:pl-0"
          >
            <span>{abouts[1].attributes.title}</span>
          </Link>
        </div>
        <div className="flex max-sm:flex-col-reverse">
          <div
            id="margin"
            className="font-['Open-Sans'] text-lg leading-5 pr-10"
          >
            <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
              {abouts[1].attributes.context}
            </ReactMarkdown>
          </div>
          <div className="min-w-[400px] max-sm:pb-4 max-sm:min-w-[300px]">
            <NextImage image={abouts[1].attributes.image} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const [categoriesRes, aboutsRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/abouts", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      abouts: aboutsRes.data,
    },
  };
}

export default MikeBurnick;
