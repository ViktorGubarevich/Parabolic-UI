import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { toLocaleDate } from "../utils/dateTime";
import { getStrapiPath } from "../lib/api";

const Card = ({ article }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-5 mb-5 last:mb-0">
      <div className="text-4xl mb-5 uppercase font-thin tracking-widest hover:underline hover:decoration-[#0056b3]">
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
        <ReactMarkdown transformImageUri={(uri) => getStrapiPath(uri)}>
          {article.attributes.content}
        </ReactMarkdown>
      </div>
      <Link
        href={`/article/${article.attributes.slug}`}
        className="flex items-center w-fit text-xs uppercase px-4 mb-4 h-7 text-black font-semibold bg-[#edf3ff] rounded-full hover:bg-[#ffb80b] shadow-[0_4px_6px_0px_rgba(50,50,93,0.11)]"
      >
        Read full article
      </Link>
    </div>
  );
};

export default Card;
