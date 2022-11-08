import Card from "./Card";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col px-4">
        {articles &&
          articles.map((article) => {
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
