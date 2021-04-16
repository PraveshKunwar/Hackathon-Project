import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextComponentType } from "next";
import nookies from "nookies";
import { useAuth } from "../util/auth";

const Profile: NextComponentType = ({ data }: any) => {
  const { user, loading, logout } = useAuth();
  useEffect(() => {
    console.log(user);
  });
  return (
    <div className="user">
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
