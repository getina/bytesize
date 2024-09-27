// import ArticleItemList from "@/components/ArticleListItem"
// import { getCategorisedArticles } from "@/lib/articles"

// const HomePage = () => {
//   const articles = getCategorisedArticles()

//   console.log(articles)
//   return (
//     <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
//       <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center mb-10">
//         <h1>minimal blog</h1>
//       </header>

//       {/* Grid layout for articles */}
//       <section className="grid grid-cols-1 gap-10">
//         {articles !== null &&
//           Object.keys(articles).map((article) => (
//             <div
//               className="border-b border-neutral-300 pb-5 hover:shadow-lg transition-shadow duration-300"
//               key={article}
//             >
//               <ArticleItemList
//                 category={article}
//                 articles={articles[article]}
//               />
//             </div>
//           ))}
//       </section>
//     </section>
//   )
// }

// export default HomePage
"use server";

import ArticleItemList from "@/components/ArticleListItem"
import { sql } from "@vercel/postgres";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default async function HomePage({
  params
} : {
  params: { category: string }
}): Promise<JSX.Element> {
  // Fetch articles based on the provided category
  const { rows } = await sql`
    SELECT * FROM articles
  `;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <NavBar />
        <section className="pt-20">
          {/* <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center mb-10">
            <h1>minimal blog</h1>
          </header> */}

          <section className="grid grid-cols-1 gap-10 font-cormorantGaramond font-light text-3xl text-neutral-900">
            {rows.length > 0 ? (
              rows.map((row) => (
                <div
                  className="border-b border-neutral-300 pb-5 hover:shadow-lg transition-shadow duration-300"
                  key={row.id}
                >
                    {row.title}
                    {/* articles={articles[article]} */}
                    
                  
                </div>


                  // <h2>{row.title}</h2>
                  // <p>Category: {row.category}</p>
                  // <p>{new Date(row.date).toLocaleDateString()}</p>
                  // <img src={row.picture_url} alt={`${row.title} image`} />
                // </div>
              ))
            ) : (
              <p>No articles found for category: {params.category}</p>
            )}
          </section>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

{/* <ArticleItemList></ArticleItemList> */}