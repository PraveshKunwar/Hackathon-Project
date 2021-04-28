import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Div from "../styled-components/Div";
import Header from "../styled-components/Header";
import { firebase } from "./firebase";
import { useColorMode } from "@chakra-ui/react";
import Colors from "../util/colors";
import Img from "../styled-components/Image";
import Paragraph from "../styled-components/Paragraph";
import Link from "next/link";

type flows = "popup" | "redirect";

interface SignInOpts {
  provider: any;
  requiredDisplayName?: boolean;
}

interface ConfigTypes {
  signInFlow: flows;
  signInOptions: SignInOpts[];
  signInSuccessUrl: string;
}

const configs: ConfigTypes = {
  signInFlow: "redirect",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requiredDisplayName: false,
    },
    {
      provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
    },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
  ],
  signInSuccessUrl: "/",
};

const AuthComponent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { colorMode } = useColorMode();
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div className="?login" style={{ marginBottom: "3rem" }}>
      <Div margin="3rem 0 0 0" flexDir="column">
        <Header
          color={colorMode === "light" ? "#9f7aea" : Colors.slate}
          fontFamily="Inter"
          fontSize="45px
            "
        >
          Welcome to Covid Tracker.
        </Header>
        <Header
          color={
            colorMode === "light"
              ? Colors.pink_main
              : Colors.dark_slate_border_purple
          }
          fontFamily="Inter"
          fontSize="22px"
        >
          The all in one covid tracker.
        </Header>
        <Img
          src="/images/tests.png"
          margin="3rem auto 0 auto"
          width="500"
          height="500"
        />
      </Div>
      <br></br>
      <br></br>
      <Paragraph
        fontSize="14px"
        color={
          colorMode === "light"
            ? Colors.red_main
            : Colors.dark_slate_border_purple
        }
      >
        Welcome to Covid Tracker, a website built for users health. <br></br>
        <br></br>
        Here at Covid Tracker, we try to make sure that users are aware of local
        conditions, especially during this time. <br></br> We provide users with
        access to databases, allowing them to check for positive cases or people
        who have recieved the vaccine, <br></br>or they can add themselves to
        the database if they tested positive for COVID-19 or recieved the
        vaccine!
        <br></br>
        <br></br>
        <br></br>
        <Link href="/toc">
          <a style={{ color: Colors.red_main }}>
            Click here to read our Terms and Condition.
          </a>
        </Link>
      </Paragraph>

      <br></br>
      <br></br>

      <Paragraph
        margin="30px 0 0 0"
        fontSize="14px"
        color={colorMode === "light" ? Colors.pink_main : Colors.slate}
      >
        Get started by signing in below.
      </Paragraph>
      {visible && (
        <StyledFirebaseAuth
          uiConfig={configs}
          firebaseAuth={firebase.auth()}
        ></StyledFirebaseAuth>
      )}
    </div>
  );
};

export default AuthComponent;
