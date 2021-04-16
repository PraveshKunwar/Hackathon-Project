import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { useAuth } from "../util/auth";
import AuthComponent from "../util/firebase.config";
import Profile from "../components/Profile";
import { useEffect } from "react";

const Index: NextPage = () => {
  const { user, loading, logout } = useAuth();
  if (loading) return null;
  return <div className="home">{user ? <Profile /> : <AuthComponent />}</div>;
};

export default Index;
