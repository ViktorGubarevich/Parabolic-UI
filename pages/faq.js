import Layout from "../components/Layout";
import Questions from "../components/Faq";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";
import Login from "../components/Login";
import { useFetchUser } from "../lib/authContext";

const Faq = ({
  categories,
  faq,
  questionTitles,
  leapsQuestions,
  sellingQuestion,
  strategyQuestion,
}) => {
  const { user } = useFetchUser();
  const seo = {
    metaTitle: faq.attributes.title,
  };

  return (
    <>
      {user ? (
        <Layout categories={categories}>
          <Seo seo={seo} />
          <div className="max-w-[1140px] m-auto px-4 py-16 flex flex-col font-light">
            <div className="text-4xl font-thin mb-5 uppercase tracking-widest">
              {faq.attributes.title}
            </div>
            <div className="text-2xl mb-7 uppercase font-['Helvetica']">
              {questionTitles[0].attributes.title}
            </div>
            <Questions questions={leapsQuestions} />
            <div className="text-2xl mb-7 uppercase font-['Helvetica']">
              {questionTitles[1].attributes.title}
            </div>
            <Questions questions={sellingQuestion} />
            <div className="text-2xl mb-7 uppercase font-['Helvetica']">
              {questionTitles[2].attributes.title}
            </div>
            <Questions questions={strategyQuestion} />
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export async function getStaticProps() {
  const [
    categoriesRes,
    faqRes,
    questionTitlesRes,
    leapQuestionsRes,
    sellingQuestionsRes,
    strategyQuestionsRes,
  ] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/faq", { populate: "*" }),
    fetchAPI("/question-titles", { populate: "*" }),
    fetchAPI("/leap-questions", { populate: "*" }),
    fetchAPI("/selling-questions", { populate: "*" }),
    fetchAPI("/strategy-questions", { populate: "*" }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      faq: faqRes.data,
      questionTitles: questionTitlesRes.data,
      leapsQuestions: leapQuestionsRes.data,
      sellingQuestion: sellingQuestionsRes.data,
      strategyQuestion: strategyQuestionsRes.data,
    },
    revalidate: 1,
  };
}

export default Faq;
