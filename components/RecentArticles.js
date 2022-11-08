import Link from "next/link";
import { toLocaleDate } from "../utils/dateTime";

const RecentArticles = ({ articles }) => {
  return (
    <>
      <ul className="flex flex-col items-center text-4xl max-lg:items-start">
        {articles &&
          articles.map((article) => {
            return (
              <li key={article.id}>
                <div className="flex flex-col bg-white p-5 lg:max-w-[280px]">
                  <div className="mb-2 text-lg font-semibold text-[#007be0] hover:underline hover:decoration-[#007be0] tracking-tight leading-none">
                    <Link href={`/article/${article.attributes.slug}`}>
                      {article.attributes.title}
                    </Link>
                  </div>{" "}
                  <div className="mb-1 text-xs uppercase tracking-wider">
                    <p className="font-['Helvetica']">
                      {toLocaleDate(article.attributes.published)} |{" "}
                      {article.attributes.tab}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RecentArticles;
