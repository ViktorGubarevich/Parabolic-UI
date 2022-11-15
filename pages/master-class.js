import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";
import Login from "../components/Login";
import { useFetchUser } from "../lib/authContext";

const MasterClass = ({ categories, masterclass }) => {
  const { user } = useFetchUser();
  const seo = {
    metaTitle: masterclass.attributes.title,
  };

  return (
    <>
      {user ? (
        <Layout user={user} categories={categories}>
          <Seo seo={seo} />
          <div className="flex flex-col max-w-[1140px] m-auto px-4 py-16">
            <div className="text-4xl font-thin mb-5 uppercase tracking-widest">
              {masterclass.attributes.title}
            </div>
            <iframe
              className="w-full h-[623px] outline-none"
              src="//fast.wistia.net/embed/iframe/72wly3lnl2?videoFoam=true"
            ></iframe>
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
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
