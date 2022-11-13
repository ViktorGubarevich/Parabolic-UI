import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI, getStrapiURL } from "../lib/api";
import NextImage from "../components/Image";
import Login from "../components/Login";
import { useFetchUser } from "../lib/authContext";

const MikeBurnick = ({ categories, abouts }) => {
  const { user } = useFetchUser();
  const seo = {
    metaTitle: abouts[1].attributes.title,
  };

  return (
    <>
      {user ? (
        <Layout categories={categories}>
          <Seo seo={seo} />
          <div className="flex flex-col max-w-[1140px] m-auto px-4 py-16 font-light">
            <div className="flex">
              <Link
                href="/about"
                className="text-4xl font-thin mb-5 uppercase tracking-widest text-[#007bff] hover:text-[#0056b3] hover:underline hover:decoration-[#0056b3]"
              >
                <span>{abouts[0].attributes.title}</span>
              </Link>
              <Link
                href="/mike-burnick"
                className="text-4xl font-thin pl-14 uppercase tracking-widest pointer-events-none"
              >
                <span>{abouts[1].attributes.title}</span>
              </Link>
            </div>
            <div className="flex">
              <div
                id="margin"
                className="font-['Open-Sans'] text-lg leading-5 pr-10"
              >
                <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
                  {abouts[1].attributes.context}
                </ReactMarkdown>
              </div>
              <div className="min-w-[400px]">
                <NextImage image={abouts[1].attributes.image} />
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

export async function getStaticProps() {
  const [categoriesRes, aboutsRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/abouts", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      abouts: aboutsRes.data,
    },
    revalidate: 1,
  };
}

export default MikeBurnick;
