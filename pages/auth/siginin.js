import { getProviders, signIn } from "next-auth/react";

export default function siginin({ providers }) {
  return (
    <div className="">
      {Object.values(providers).map((provider) => (
        <div className="flex mt-10 flex-col items-center">
          <img
            className="w-10 object-cover mb-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt=""
          />
          <h2 className="text-3xl font-bold mb-8">Login to Twitter</h2>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-sky-200 rounded-lg p-3 text-white hover:bg-sky-400"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
