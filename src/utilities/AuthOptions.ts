import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      // @ts-ignore
      async authorize(credentials, req) {
        try {
          const user = credentials;

          // Returing
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  jwt: {
    maxAge: 1000 * 10,
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};
