import { NextPage } from "next";
import { useAuth } from "../util/auth";
import { useRef } from "react";
import Index from ".";
import "firebase/firestore";
import { firebase } from "../util/firebase";
import Header from "../styled-components/Header";
import { useColorMode } from "@chakra-ui/react";
import Colors from "../util/colors";
import { useState } from "react";

const AddVaccine: NextPage = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  const [id, setId] = useState<number | string | null>(null);

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
          </Header>
        </div>
      ) : (
        <Index />
      )}
    </div>
  );
};
export default AddVaccine;
