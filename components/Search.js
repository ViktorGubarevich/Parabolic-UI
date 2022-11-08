import { useRouter } from "next/router";
import { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`)
    setTerm("");
  };

  return (
    <div className="flex flex-col pb-8 min-w-[255px]">
      <div className="text-2xl uppercase mb-3 color-[#212b38]">Search:</div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full max-h-[50px] text-sm rounded-full border-2 border-black p-3"
          type="text"
          value={term.toLowerCase()}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
