import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Özgenur Özkara",
      username: "ozkaraozgee",
      userImg :"twitter-profile.jpeg",
      img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      text : "i love flowers ",
      timestamp: "10 minutes ago"
    },
    {
      id: "2",
      name: "Özgenur Özkara",
      username: "ozkaraozgee",
      userImg :"twitter-profile.jpeg",
      img: "https://images.unsplash.com/photo-1559085715-23704349e326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      text : "i love flowers ",
      timestamp: "2 hours ago"
    },

  ]
  return(
   <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml[73px] flex-grow max-w-xl">
    <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
            <SparklesIcon className="h-5" />

        </div>
        </div>
        <Input />
        {posts.map((post)=>(
          <Post key={post.id} post={post}/>
        ))}
        </div>
  );
}
