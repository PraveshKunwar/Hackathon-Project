import { NextPage } from "next";
import { useAuth } from "../util/auth";
import Index from ".";
import "firebase/firestore";
import { firebase } from "../util/firebase";
import Header from "../styled-components/Header";
import {
  useColorMode,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import Colors from "../util/colors";
import { useState, useEffect } from "react";
import Img from "../styled-components/Image";
import { useRouter } from "next/dist/client/router";

const AddVaccine: NextPage = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [id, setId] = useState<number | string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [recieved, setRecieved] = useState<boolean | null>(null);
  const [db, setDb] = useState<firebase.firestore.Firestore | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  useEffect(() => {
    setDb(firebase.firestore());
  }, []);
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  const handleChangeRecieved = (event) => {
    setRecieved(event.target.value as boolean);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeID = (event) => {
    setId(event.target.value as number);
  };
  const handleSubmit = (e) => {
    db.collection("vaccine")
      .doc()
      .set({
        id: id,
        name: name,
        recieved: recieved,
        when: firebase.firestore.Timestamp.fromDate(
          new Date(`${date} ${time}`)
        ),
      })
      .then((c) => {
        router.push("/thanks");
      });
    e.preventDefault();
  };

  return (
    <div className="addvc">
      {user ? (
        <div className="addvc">
          <Header
            color={colorMode === "light" ? "#9f7aea" : Colors.slate}
            fontSize="25px"
            margin="3rem"
            fontFamily="Inter"
          >
            Add yourself to the official vaccine recieved database.
            <br></br>
            <b style={{ color: Colors.pink_main }}>
              {user.displayName ? user.displayName : "unknown."}.
            </b>
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
            {db ? (
              <div className="form">
                <FormControl colorScheme="messenger" isRequired>
                  <FormLabel>Enter Covid ID.</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    name="id"
                    placeholder="Enter id..."
                    onChange={handleChangeID}
                    required={true}
                  />
                  <FormLabel>Enter full name.</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    name="name"
                    placeholder="Enter name..."
                    onChange={handleChangeName}
                    required={true}
                  />
                  <FormLabel>
                    When did you or when will you get the vaccine? (Time)
                  </FormLabel>
                  <Input
                    isRequired
                    type="time"
                    id="when"
                    name="when"
                    onChange={handleChangeTime}
                    required={true}
                  />
                  <FormLabel>
                    When did you or when will you get the vaccine? (Date)
                  </FormLabel>
                  <Input
                    isRequired
                    type="date"
                    id="start"
                    name="date"
                    min="2000-01-01"
                    max="2030-05-31"
                    onChange={handleChangeDate}
                    required={true}
                  />
                  <FormLabel>How many doses have you recieved?</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    name="name"
                    placeholder="Dosage number?"
                    onChange={handleChangeRecieved}
                    required={true}
                  />
                  <Button
                    mt={4}
                    size="lg"
                    colorScheme="teal"
                    type="submit"
                    value="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </FormControl>
              </div>
            ) : (
              "Not loaded "
            )}
          </Header>
        </div>
      ) : (
        <Index />
      )}
    </div>
  );
};
export default AddVaccine;
