// import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import CredentialProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   providers: [
//     CredentialProvider({
//       name: "credentials",
//       credentials: {
//         username: {
//           label: "Username",
//           type: "text",
//           placeholder: "john@doe.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         //call api
//         // if (
//         //   credentials.username === "admin" &&
//         //   credentials.password === "admin123"
//         // ) {
//         //   return {
//         //     id: 1,
//         //     name: "admin",
//         //     email: "admindtp@dtp-education.com",
//         //   };
//         // }
//         // return null;
//         const user = { name: "John Doe", email: "john@doe.com" };
//         return user;
//       },
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   callbacks: {
//     jwt: ({ token, user }) => {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     session: ({ session, token }) => {
//       if (token) {
//         session.id = token.id;
//       }
//       return session;
//     },
//   },
//   secret: "testdtp",
//   jwt: {
//     secret: "testdtp",
//   },
//   session: {
//     // jwt: true,
//     strategy: "jwt",
//   },
//   theme: {
//     colorScheme: "auto",
//   },
// });
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default async function auth(req, res) {
  const providers = [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "john@doe.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        //call api
        if (
          credentials.username === "admin" &&
          credentials.password === "admin123"
        ) {
          return {
            id: 1,
            name: "admin",
            email: "admindtp@dtp-education.com",
          };
        }
        return null;
        // const user = { name: "John Doe", email: "john@doe.com" };
        // return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ];

  const isDefaultSigninPage =
    req.method === "GET" && req.query.nextauth.includes("signin");

  // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
  if (isDefaultSigninPage) providers.pop();

  return await NextAuth(req, res, {
    providers,
    session: {
      strategy: "jwt",
    },
    callbacks: {
      jwt: ({ token, user }) => {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      session: ({ session, token }) => {
        if (token) {
          session.id = token.id;
        }
        return session;
      },
    },
    secret: "testdtp",
    jwt: {
      secret: "testdtp",
    },
    // pages: {
    //   signIn: "/signin",
    // },
  });
}
