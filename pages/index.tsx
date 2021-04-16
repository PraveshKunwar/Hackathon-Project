import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { useAuth } from "../util/auth";
import AuthComponent from "../util/firebase.config";
import Link from "next/link";

const Index: NextPage = () => {
  const { user, loading, logout } = useAuth();
  if (loading) return null;
  if (!user) return <AuthComponent />;
  return (
    <div className="home">
      <button type="button" onClick={logout} className="link">
        Logout
      </button>
    </div>
  );
};

export default Index;
