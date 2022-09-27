import { getProviders, signIn } from "next-auth/react";

export default function siginin({ providers }) {
  return (
    <div flex>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
        alt="twitter image"
        className=""
      />

      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="">
            <img
              src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
              alt=""
            />

            <button>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
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
