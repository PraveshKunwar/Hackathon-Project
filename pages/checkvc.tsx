import { NextPage } from "next";
import { useAuth } from "../util/auth";
import Index from ".";
import { useState, useEffect } from "react";
import "firebase/firestore";
import { firebase } from "../util/firebase";
import Header from "../styled-components/Header";
import {
  Table,
  useColorMode,
  TableCaption,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Colors from "../util/colors";
import moment from "moment";
import geolib from "geolib";

const CheckVaccine: NextPage = () => {
  const { user } = useAuth();
  const [docs, setDocs] = useState<firebase.firestore.DocumentData[] | null>(
    null
  );
  const { colorMode } = useColorMode();
  useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("vaccine").get();
      data.docs.map((d) => {
        console.log(d.data().where);
      });
      setDocs(data.docs.map((doc) => doc.data()));
    };
    getData();
  }, [docs]);
  return (
    <div className="checkvc">
      {user ? (
        <div className="checkvc">
          <Header
            color={colorMode === "light" ? "#9f7aea" : Colors.slate}
            fontSize="25px"
            margin="3rem"
            fontFamily="Inter"
          >
            The official Vaccine Recieved Database.
            <br></br>
            <b style={{ color: Colors.pink_main }}>
              {user.displayName ? user.displayName : "unknown."}.
            </b>
          </Header>
          <Table variant="striped" colorScheme="facebook">
            <TableCaption>The official Vaccine Recieved Database.</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Recieved?</Th>
                <Th>When</Th>
                <Th>Covid ID</Th>
              </Tr>
            </Thead>
            <Tbody>
              {docs
                ? docs.map((doc) => {
                    return (
                      <Tr key={doc.id}>
                        <Td>{doc.name}</Td>
                        <Td>{`${doc.recieved}`}</Td>
                        <Td>{`${moment
                          .unix(doc.when.seconds)
                          .format("MMMM Do YYYY, h:mm:ss a")}`}</Td>
                        <Td>{`${doc.id}`}</Td>
                      </Tr>
                    );
                  })
                : "Not loaded"}
            </Tbody>
          </Table>
        </div>
      ) : (
        <Index />
      )}
    </div>
  );
};

export default CheckVaccine;
