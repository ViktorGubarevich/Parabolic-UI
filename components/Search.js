import { useRouter } from "next/router";
import { useState } from "react";
import SearchCard from "./SearchCard";

const Search = ({ articles }) => {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
    setTerm("");
  };

  const getFilteredArticles = (term, articles) => {
    if (!term) {
      return "";
    }
    return articles
      .filter((article) =>
        article.attributes.content.toLowerCase().includes(term)
      )
      .splice(0, 4);
  };

  const filteredArticles = getFilteredArticles(term, articles);

  return (
    <div className="flex flex-col pb-8 min-w-[255px]">
      <div className="text-2xl uppercase mb-3 color-[#212b38]">Search:</div>
      <form onSubmit={handleSubmit}>
        <div className="relative w-full">
          <input
            className="block w-full max-h-[50px] text-sm rounded-full border-2 border-black p-3"
            type="search"
            value={term.toLowerCase()}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-3 text-white bg-[#212b38] rounded-r-full border border-[#212b38]"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <ul>
          {term && term.length > 2 ? (
            <div className="pt-1 absolute z-1 max-w-[210px]">
              <div className="font-['Open-Sans'] p-3 text-sm uppercase border-2 border-b-0 bg-[#F1F2F6]">
                Post
              </div>
              {filteredArticles &&
                filteredArticles.map((article) => {
                  return (
                    <SearchCard
                      article={article}
                      key={`article__${article.attributes.slug}`}
                    />
                  );
                })}
              <button
                type="submit"
                className="m-auto w-full flex justify-end font-['Open-Sans'] p-3 text-sm uppercase border-2 border-t-0  text-[#007be0] hover:underline hover:decoration-[#007be0] tracking-tight leading-none bg-[#F1F2F6]"
              >
                More results&gt;
              </button>
            </div>
          ) : (
            ""
          )}
        </ul>
      </form>
    </div>
  );
};

export default Search;
