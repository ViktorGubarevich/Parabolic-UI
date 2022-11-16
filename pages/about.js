import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI, getStrapiURL } from "../lib/api";
import Login from "../components/Login";
import { useFetchUser } from "../lib/authContext";

const About = ({ categories, abouts }) => {
  const { user } = useFetchUser();
  const seo = {
    metaTitle: abouts[0].attributes.title,
  };

  return (
    <>
      {user ? (
        <Layout user={user} categories={categories}>
          <Seo seo={seo} />
          <div className="flex flex-col max-w-[1140px] m-auto px-4 py-16 font-light">
            <div className="flex max-sm:flex-col max-sm:pb-4">
              <Link
                href="/about"
                className="text-4xl font-thin mb-5 uppercase tracking-widest pr-14 pointer-events-none"
              >
                <span>{abouts[0].attributes.title}</span>
              </Link>
              <Link
                href="/mike-burnick"
                className="text-4xl font-thin uppercase tracking-widest text-[#007bff] hover:text-[#0056b3] hover:underline hover:decoration-[#0056b3]"
              >
                <span>{abouts[1].attributes.title}</span>
              </Link>
            </div>
            <div id="margin" className="font-['Open-Sans'] text-lg leading-5">
              <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
                {abouts[0].attributes.context}
              </ReactMarkdown>
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

export default About;
