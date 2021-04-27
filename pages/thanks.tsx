import { NextPage } from "next";
import Header from "../styled-components/Header";
import Img from "../styled-components/Image";
import Index from ".";
import Colors from "../util/colors";
import { useAuth } from "../util/auth";
import { Badge, useColorMode } from "@chakra-ui/react";
import Div from "../styled-components/Div";
import Button from "../styled-components/Button";
import Link from "next/link";
import Paragraph from "../styled-components/Paragraph";
const Thanks: NextPage = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <div className="thank-you">
      {user ? (
        <div className="thank-you-statement">
          <Header
            color={colorMode === "light" ? "#9f7aea" : Colors.slate}
            fontSize="25px"
            margin="3rem"
            fontFamily="Inter"
          >
            Thanks for submitting your form,
            <br></br>
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
          <Div
            width="350px"
            height="300px"
            margin="2rem"
            shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <div>
              <Header
                color={
                  colorMode === "light" ? Colors.lighter_navy : Colors.slate
                }
                fontFamily="Inter"
                fontSize="18px
            "
              >
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  💖
                </Badge>
                <b> Thanks for doing your part. 💙</b>
              </Header>
              <br></br>
              <Paragraph
                color={
                  colorMode === "light" ? Colors.lighter_navy : Colors.pink_main
                }
              >
                Thank you for doing your part. You are saving lives by filling
                out the form. Even though it make have taken some of your time,
                you are doing your part in ensuring the safety of others. We
                thank you for that. Really.
              </Paragraph>
              <Button
                radius="99px"
                color={Colors.slate}
                margin="20px auto 0 auto"
                background="linear-gradient(to left,#112240 50%, #b52660 50%) right;"
              >
                <Link href="/">
                  <a>Return home</a>
                </Link>
              </Button>
            </div>
          </Div>
        </div>
      ) : (
        <Index />
      )}
    </div>
  );
};

export default Thanks;
