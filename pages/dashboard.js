import { getSession } from "next-auth/react";
function Dashboard({ session }) {
  console.log("dafhajkdhg", session);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!session && (
        <div>
          <h1>Not sign in</h1>
        </div>
      )}
      {session && (
        <div>
          <h1>Dashboard Content</h1>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
