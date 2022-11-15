import Layout from "../components/Layout";
import Questions from "../components/Faq";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";
import Login from "../components/Login";
import { useFetchUser } from "../lib/authContext";

const Faq = ({
  categories,
  faq,
  questionCategories,
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
        <Layout user={user} categories={categories}>
          <Seo seo={seo} />
          <div className="max-w-[1140px] m-auto px-4 py-16 flex flex-col font-light">
            <div className="text-4xl font-thin mb-5 uppercase tracking-widest">
              {faq.attributes.title}
            </div>
            <div className="text-2xl mb-7 uppercase font-['Helvetica']">
              {questionCategories[0].attributes.title}
            </div>
            <Questions answers={leapsQuestions.attributes.answers.data} />
            <div className="text-2xl mb-7 uppercase font-['Helvetica']">
              {questionCategories[1].attributes.title}
            </div>
            <Questions answers={sellingQuestion.attributes.answers.data} />
            <div className="text-2xl mb-7 uppercase font-['Helvetica']">
              {questionCategories[2].attributes.title}
            </div>
            <Questions answers={strategyQuestion.attributes.answers.data} />
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};

export async function getStaticProps() {
  const [categoriesRes, faqRes, questionCategoriesRes, answersCategories] =
    await Promise.all([
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/faq", { populate: "*" }),
      fetchAPI("/question-categories", { populate: "*" }),
      await fetchAPI("/question-categories", {
        populate: {
          answers: {
            populate: "*",
          },
        },
      }),
    ]);

  return {
    props: {
      categories: categoriesRes.data,
      faq: faqRes.data,
      questionCategories: questionCategoriesRes.data,
      leapsQuestions: answersCategories.data[0],
      sellingQuestion: answersCategories.data[1],
      strategyQuestion: answersCategories.data[2],
    },
    revalidate: 1,
  };
}

export default Faq;
