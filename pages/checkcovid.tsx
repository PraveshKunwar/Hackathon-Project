import { NextPage } from "next";
import { useAuth } from "../util/auth";
import Index from ".";
import { useState, useEffect } from "react";
import "firebase/firestore";
import { firebase } from "../util/firebase";
import moment from "moment";
import Header from "../styled-components/Header";
import { useColorMode } from "@chakra-ui/react";
import Colors from "../util/colors";
import { Table } from "react-bootstrap";
import Img from "../styled-components/Image";

const CheckCovid: NextPage = () => {
  const { user } = useAuth();
  const [docs, setDocs] = useState<firebase.firestore.DocumentData[] | null>(
    null
  );
  const { colorMode } = useColorMode();
  useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("covid19").get();
      setDocs(data.docs.map((doc) => doc.data()));
    };
    getData();
  }, [docs]);
  return (
    <div className="checkcovid">
      {user ? (
        <div className="checkcovid">
          <Header
            color={colorMode === "light" ? "#9f7aea" : Colors.slate}
            fontSize="25px"
            margin="3rem"
            fontFamily="Inter"
          >
            The official Covid 19 Database.
            <br></br>
            <b style={{ color: Colors.pink_main }}>
              {user.displayName ? user.displayName : "unknown."}.
            </b>
          </Header>
          {user.photoURL === null || undefined ? (
            <Img
              src="/images/pfp.png"
              width="128px"
              height="128px"
              margin="10px auto 0 auto"
              radius="50%"
            />
          ) : (
            <Img
              src={user.photoURL}
              width="128px"
              height="128px"
              margin="10px auto 0 auto"
              radius="50%"
            />
          )}
          <br></br>
          <br></br>
          <Table
            responsive
            variant={colorMode === "light" ? "light" : "dark"}
            striped
            bordered
            hover
            size="sm"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Positive?</th>
                <th>Reason</th>
                <th>When</th>
                <th>Covid ID</th>
              </tr>
            </thead>
            <tbody>
              {docs
                ? docs.map((doc) => {
                    return (
                      <tr key={doc.id}>
                        <td>{doc.name}</td>
                        <td>{doc.recieved}</td>
                        <td>{`${doc.reason}`}</td>
                        <td>{`${moment
                          .unix(doc.when.seconds)
                          .format("MMMM Do YYYY, h:mm:ss a")}`}</td>
                        <td>{`${doc.id}`}</td>
                      </tr>
                    );
                  })
                : "Not loaded"}
            </tbody>
          </Table>
        </div>
      ) : (
        <Index />
      )}
    </div>
  );
};
export default CheckCovid;
