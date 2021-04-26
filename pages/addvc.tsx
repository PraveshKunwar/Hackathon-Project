import { NextPage } from "next";
import { useAuth } from "../util/auth";
import { useRef } from "react";
import Index from ".";
import "firebase/firestore";
import firebase from "firebase/app";

const AddVaccine: NextPage = () => {
  const { user } = useAuth();

  return (
    <div className="addvc">
      {user ? <div className="addvc">asdasdasd</div> : <Index />}
    </div>
  );
};
export default AddVaccine;
