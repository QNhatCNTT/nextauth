import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      {!session && (
        <>
          <h1>You are not signed in</h1>
        </>
      )}

      {session && (
        <>
          <h1>Signed in as {session.user.name} </h1>
        </>
      )}
    </div>
  );
}
