import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getStrapiURL } from "../lib/api";
import { toLocaleDate } from "../utils/dateTime";

const RelatedArticles = ({ articles }) => (
  <ul className="flex items-center text-4xl">
    {articles &&
      articles.map((article) => {
        return (
          <li key={article.id}>
            <div className="flex flex-col max-w-[470px] h-[430px] bg-white rounded-[44px] p-5 mr-4 shadow-[0_4px_8px_0px_rgba(0,0,0,0.25)]">
              <div className="mb-5 uppercase text-2xl tracking-tight leading-none">
                <Link href={`/article/${article.attributes.slug}`}>
                  {article.attributes.title}
                </Link>
              </div>
              <div className="flex mb-1.5 text-xs italic font-['Open-Sans']">
                <p className="pr-1">By:</p>
                <p className="font-semibold">{article.attributes.writer}</p>
              </div>
              <div className="mb-4 text-xs uppercase tracking-wider">
                <p className="font-['Helvetica']">
                  {toLocaleDate(article.attributes.published)} |{" "}
                  {article.attributes.tab}
                </p>
              </div>
              <div className="mb-4 text-lg font-['Open-Sans'] leading-5 text-ellipsis overflow-hidden h-20">
                <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
                  {article.attributes.content}
                </ReactMarkdown>
              </div>
            </div>
          </li>
        );
      })}
  </ul>
);

export default RelatedArticles;
