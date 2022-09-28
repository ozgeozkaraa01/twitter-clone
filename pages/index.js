import Head from "next/head";
import CommentModal from "../components/CommentModal";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ newsResults, randomUserResults }) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-between min-h-screen mx-auto ">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUserResults={randomUserResults.results}
        />

        {/* Modal */}
        <CommentModal/>
      </main>
    </div>
  );
}
// https://saurav.tech/NewsAPI/top-headlines/category/software/us.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  // Who to follow section
  const randomUserResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUserResults,
    },
  };
}
