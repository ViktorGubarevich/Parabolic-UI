import Card from "./Card";

const Articles = ({ articles }) => {
  const newArticles = [...articles];

  const sortArticles = newArticles.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <div className="flex flex-col px-4">
      {sortArticles &&
        sortArticles.map((article) => {
          return (
            <Card
              article={article}
              key={`article__${article.attributes.slug}`}
            />
          );
        })}
    </div>
  );
};

export default Articles;
