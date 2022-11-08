import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";
import NextImage from "../components/Image";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";

const MasterClass = ({ categories, masterclass }) => {
  const seo = {
    metaTitle: masterclass.attributes.title,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="flex flex-col max-w-[1140px] m-auto px-4 py-16">
        <div className="text-4xl font-thin mb-5 uppercase tracking-widest">
          {masterclass.attributes.title}
        </div>
        <Link
          href={`${getStrapiMedia(masterclass.attributes.video)}`}
          className="text-[#17bcb8] hover:text-[#007be0]"
        >
          <NextImage image={masterclass.attributes.image} />
        </Link>
        {/* <iframe
            className="w-full h-[623px] outline-none"
            src="//fast.wistia.net/embed/iframe/72wly3lnl2?videoFoam=true"
          ></iframe> */}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const [categoriesRes, masterclassRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/masterclass", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      masterclass: masterclassRes.data,
    },
    revalidate: 1,
  };
}

export default MasterClass;
