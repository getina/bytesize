import ArticleItemList from "@/components/ArticleListItem"
import { getCategorisedArticles } from "@/lib/articles"

const HomePage = () => {
  const articles = getCategorisedArticles()

  console.log(articles)
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center mb-10">
        <h1>minimal blog</h1>
      </header>

      {/* Grid layout for articles */}
      <section className="grid grid-cols-1 gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <div
              className="border-b border-neutral-300 pb-5 hover:shadow-lg transition-shadow duration-300"
              key={article}
            >
              <ArticleItemList
                category={article}
                articles={articles[article]}
              />
            </div>
          ))}
      </section>
    </section>
  )
}

export default HomePage
