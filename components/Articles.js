import Card from "./Card";

const Articles = ({ articles }) => {
  const sortArticles = articles.sort((a, b) => {
    return a.attributes.published - b.attributes.published;
  });

  return (
    <>
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
    </>
  );
};

export default Articles;
