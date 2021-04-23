import { NextComponentType } from "next";
import React from "react";
import firebase from "firebase/app";

interface CheckProps {
  data: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[];
}

const Check: React.FC<CheckProps> = (props): JSX.Element => {
  return <div className="check-component"></div>;
};

export default Check;
