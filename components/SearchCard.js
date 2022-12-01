import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { toLocaleDate } from "../utils/dateTime";
import { getStrapiURL } from "../lib/api";

const SearchCard = ({ article }) => (
  <div className="font-['Open-Sans'] flex flex-col bg-white p-3 lg:max-w-[280px] border-b-2 border-x-2">
    <div className="mb-1 text-lg text-[#007be0] hover:underline hover:decoration-[#007be0] tracking-tight leading-none">
      <Link href={`/article/${article.attributes.slug}`}>
        {article.attributes.title}
      </Link>
    </div>
    <div className="mb-1 text-xs font-['Open-Sans'] leading-5 text-ellipsis overflow-hidden h-10">
      <ReactMarkdown transformImageUri={(uri) => getStrapiURL(uri)}>
        {article.attributes.content}
      </ReactMarkdown>
    </div>
    <div className="flex text-xs italic font-['Open-Sans']">
      <p className="font-semibold">{article.attributes.writer}</p>
      <p className="pl-1">{toLocaleDate(article.attributes.published)}</p>
    </div>
  </div>
);

export default SearchCard;
