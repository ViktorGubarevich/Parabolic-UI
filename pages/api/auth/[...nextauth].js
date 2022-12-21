import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(token) {
        const getUser = async () => {
          const url =
            "https://638c92ebeafd555746a9521d.mockapi.io/api/v1/login";
          const response = await axios.post(url, token);

          const tokenParse = JSON.parse(token.token);

          if (tokenParse && tokenParse === JSON.parse(response.data.token)) {
            return response.data.user;
          } else {
            return null;
          }
        };

        const user = getUser();

        if (user) {
          return user;
        }
      },

      // authorize(credentials, req) {
      //   const { email, password } = credentials;

      //   if (email !== "y.nesterovich@itransition.com" || password !== "1234") {
      //     throw new Error("Invalid credentials");
      //   }

      //   return {
      //     id: "1234",
      //     name: "Yuri Nesterovich",
      //     email: "y.nesterovich@itransition.com",
      //     role: "admin",
      //   };
      // },

      // async authorize(credentials) {
      //   const url = "https://638c92ebeafd555746a9521d.mockapi.io/api/v1/login";
      //   const response = await axios.post(url, credentials);

      //   if (response) {
      //     return response.data;
      //   }
      //   throw new Error("Invalid credentials");
      // },
    }),
  ],
  pages: { logIn: "../../login-page" },
  callbacks: {
    jwt(params) {
      if (params.user?.role) {
        params.token.role = params.user.role;
      }

      return params.token;
    },
  },
};

export default NextAuth(authOptions);