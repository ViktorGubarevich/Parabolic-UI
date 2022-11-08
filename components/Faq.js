import ReactMarkdown from "react-markdown";
import { getStrapiURL } from "../lib/api";

const Questions = ({ questions }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-4xl mb-3">
        {questions &&
          questions.map((question) => {
            return (
              <li key={question.id}>
                <div className="flex flex-col last:mb-0 font-serif">
                  <div className="flex mb-4 text-base">
                    <p className="pr-1 font-semibold">Q:</p>
                    <p className="italic">{question.attributes.question}</p>
                  </div>
                  <div
                    id="margin"
                    className="mb-8 text-base font-normal leading-5"
                  >
                    <ReactMarkdown
                      transformImageUri={(uri) => getStrapiURL(uri)}
                    >
                      {question.attributes.answer}
                    </ReactMarkdown>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Questions;
