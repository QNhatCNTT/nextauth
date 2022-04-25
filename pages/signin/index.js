import {
  getCsrfToken,
  signIn,
  getSession,
  getProviders,
} from "next-auth/react";

function signin({ providers }) {
  console.log("khakjshfad", providers);
  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button onClick={() => provider.id}>
              Sign in with {provider.nasignInme}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const { req } = context;
  const providers = await getProviders(context);
  const csrfToken = await getCsrfToken(context);
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return {
    props: {
      providers: await providers,
      csrfToken: await csrfToken,
    },
  };
}
