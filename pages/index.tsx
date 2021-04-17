import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { useAuth } from "../util/auth";
import AuthComponent from "../util/firebase.config";
import Profile from "../components/Profile";
import { useEffect } from "react";
import Head from "next/head";

const Index: NextPage = () => {
  const { user, loading } = useAuth();
  if (loading) return null;

  return (
    <div className="home">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Pravesh K., Edward R., Tarun T." />
        <meta name="keywords" content="Covid Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A covid tracker built with Next.JS."
        />
      </Head>
      {user ? <Profile /> : <AuthComponent />}
    </div>
  );
};

export default Index;
