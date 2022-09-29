import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  EllipsisHorizontalIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}

      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="40"
          height="40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png"
        ></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={MagnifyingGlassIcon} />
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
          </>
        )}
      </div>

      {/* Button */}

      {session ? (
        <>
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>

          {/* Profile */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
            onClick={signOut}
              src={session.user.image}
              alt="user-photo"
              className="h-10 w-10 object-cover rounded-full xl:mr-2"
            />

            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-gray-500">@{session.user.username}</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8"></EllipsisHorizontalIcon>
          </div>
        </>
      ) : (
        <button
          onClick={signIn}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
          Sign in
        </button>
      )}
    </div>
  );
}
