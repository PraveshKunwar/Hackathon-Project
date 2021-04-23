import { NextPage } from "next";
import { useAuth } from "../util/auth";
import Index from ".";
import { useState, useEffect } from "react";
import "firebase/firestore";
import { firebase } from "../util/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Check from "../components/Check";
const CheckCovid: NextPage = () => {
  const { user } = useAuth();
  const [db, setDb] = useState<firebase.firestore.Firestore | null>(null);
  const [docs, setDocs] = useState<
    | firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]
    | null
  >(null);
  const firestore = firebase.firestore();
  const covidRef = firestore.collection("covid19").limit(25);

  useEffect(() => {
    setDb(firebase.firestore());
    firestore
      .collection("covid19")
      .limit(25)
      .get()
      .then((doc) => {
        setDocs(doc.docs);
      });
  }, []);
  return (
    <div className="checkvc">
      {user ? (
        <div className="checkvc">
          {docs ? (
            <div>{/* docs.forEach(d => <p>{d.data().name}</p>)*/}</div>
          ) : (
            "asd"
          )}
        </div>
      ) : (
        <Index />
      )}
    </div>
  );
};
export default CheckCovid;
