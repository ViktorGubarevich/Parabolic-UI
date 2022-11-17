import { fetchAPI } from "../lib/api";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

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
        <iframe
          className="w-full h-[623px] outline-none"
          src={masterclass.attributes.iframe}
        ></iframe>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const [categoriesRes, masterclassRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/masterclass", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      masterclass: masterclassRes.data,
    },
  };
}

export default MasterClass;
