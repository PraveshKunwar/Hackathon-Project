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

const AddCovid: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  const [name, setName] = useState<string | null>(null);
  const [recieved, setRecieved] = useState<string | any | null>(null);
  const [db, setDb] = useState<firebase.firestore.Firestore | null>(null);
  const [time, setTime] = useState<string | any | null>(null);
  const [date, setDate] = useState<string | any | null>(null);
  const [reason, setReason] = useState<string | null>(null);
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
    setRecieved(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeReason = (event) => {
    setReason(event.target.value);
  };
  const handleSubmit = (e) => {
    db.collection("covid19")
      .doc()
      .set({
        name: name,
        recieved: recieved,
        reason: reason,
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
    <div className="addcovid">
      {user ? (
        <div className="addcovid">
          <Header
            color={colorMode === "light" ? "#9f7aea" : Colors.slate}
            fontSize="25px"
            margin="3rem"
            fontFamily="Inter"
          >
            Add yourself to the official Covid-19 database.
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
              <div className="form" style={{ fontFamily: "Inter" }}>
                <FormControl
                  colorScheme="messenger"
                  isRequired
                  style={{ fontFamily: "Inter" }}
                >
                  <FormLabel>Enter full name.</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    name="name"
                    placeholder="Enter name..."
                    onChange={handleChangeName}
                    required={true}
                  />
                  <FormLabel>How did you get COVID 19. (REQUIRED)</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    id="reason"
                    name="reason"
                    onChange={handleChangeReason}
                    required={true}
                  />
                  <FormLabel>
                    When did you get covid? (Time) (At least, when did you start
                    feeling sick?)
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
                    When did you get COVID-19, or tested positive for it ?
                    (Date)
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
                  <FormLabel>List any symptoms:</FormLabel>
                  <Input
                    isRequired
                    type="text"
                    name="name"
                    placeholder="Symptoms:"
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
export default AddCovid;
