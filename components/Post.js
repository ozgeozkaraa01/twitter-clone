import {
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";

export default function Post({ post }) {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* profile image */}
      <img
        className="h-11 w-11 rounded-full mr-4 object-cover "
        src={post.userImg}
        alt="user-image"
      />

      {/* right side  */}

      <div className="">
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} .</span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          {/* dot icon */}
          <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>
        {/* post text */}
        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
          {post.text}
        </p>

        {/* post image */}
        <img className="rounded-2xl mr-2" src={post.img} alt="" />

        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatBubbleOvalLeftIcon
            onClick={() => {
              if (!session) {
                signIn();
              } else {
                setPostId(post.id);
                setOpen(!open);
              }
            }}
            className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
          />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
