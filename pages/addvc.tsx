import { NextPage } from "next";
import { useAuth } from "../util/auth";
import moment from "moment";
import Index from ".";
import "firebase/firestore";
import { firebase } from "../util/firebase";
import Header from "../styled-components/Header";
import { useColorMode } from "@chakra-ui/react";
import Colors from "../util/colors";
import { useState, useEffect } from "react";

const AddVaccine: NextPage = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  const [id, setId] = useState<number | string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [recieved, setRecieved] = useState<boolean | null>(null);
  const [db, setDb] = useState<firebase.firestore.Firestore | null>(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
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
          new Date(moment(`${date} ${time}`).unix() * 1000)
        ),
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
            Add yourself to the official Covid 19 Database.
            <br></br>
            <b style={{ color: Colors.pink_main }}>
              {user.displayName ? user.displayName : "unknown."}.
            </b>
            {db ? (
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="id"
                    placeholder="Enter id..."
                    style={{ background: "#000" }}
                    onChange={handleChangeID}
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name..."
                    style={{ background: "#000" }}
                    onChange={handleChangeName}
                    required
                  />
                  <select onChange={handleChangeRecieved} required>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                  <input
                    type="time"
                    id="when"
                    name="appt"
                    style={{ background: "#000" }}
                    onChange={handleChangeTime}
                    required
                  />
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    min="2020-01-01"
                    max="2021-05-31"
                    style={{ background: "#000" }}
                    onChange={handleChangeDate}
                    required
                  />
                  <input type="submit" value="submit" />
                </form>
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
