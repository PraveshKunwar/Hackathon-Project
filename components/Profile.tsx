import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextComponentType } from "next";
import nookies from "nookies";
import { useAuth } from "../util/auth";
import Header from "../styled-components/Header";
import Div from "../styled-components/Div";
import Img from "../styled-components/Image";
import Colors from "../util/colors";
import { Badge, useColorMode } from "@chakra-ui/react";
import Paragraph from "../styled-components/Paragraph";
import Button from "../styled-components/Button";

const Profile: NextComponentType = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <div className="user">
      <Header
        color={colorMode === "light" ? "#9f7aea" : Colors.slate}
        fontSize="25px"
        margin="3rem"
        fontFamily="Inter"
      >
        Welcome to Covid Tracker,
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
        />
      ) : (
        <Img
          src={user.photoURL}
          width="128px"
          height="128px"
          margin="10px auto 0 auto"
        />
      )}
      <Div
        width="350px"
        height="475px"
        margin="2rem"
        shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <div>
          <Header
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
            fontFamily="Inter"
            fontSize="18px
            "
          >
            <Badge borderRadius="full" px="2" colorScheme="teal">
              ✅
            </Badge>
            <b> Add yourself to vaccine recieved.</b>
          </Header>
          <Div shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
            <Img
              src="/images/main.png"
              radius="50%"
              width="128px"
              height="128px"
              margin="0 0 0 0 "
            />
          </Div>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            ❓ What's this?
          </Badge>
          <Paragraph
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
          >
            Want to add yourself to our vaccine received database? Click the
            button below to get started.
          </Paragraph>{" "}
          <br></br>
          <Badge borderRadius="full" px="2" colorScheme="pink">
            🌌 Make the world a better place!
          </Badge>
          <Paragraph
            color={
              colorMode === "light" ? Colors.lighter_navy : Colors.pink_main
            }
          >
            Do your part in making the world a better place.
          </Paragraph>
          <Button
            radius="99px"
            color={Colors.slate}
            margin="20px auto 0 auto"
            background="linear-gradient(to left, #b52660 50%, #112240 50%) right;"
          >
            <a>Get started</a>
          </Button>
        </div>
        <div>
          <Header
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
            fontFamily="Inter"
            fontSize="18px
            "
          >
            <Badge borderRadius="full" px="2" colorScheme="teal">
              ✅
            </Badge>
            <b> Add yourself to COVID-19 recieved.</b>
          </Header>
          <Div shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
            <Img
              src="/images/main2.png"
              radius="50%"
              width="128px"
              height="128px"
              margin="0 0 0 0"
            />
          </Div>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            ❓ What's this?
          </Badge>
          <Paragraph
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
          >
            Want to add yourself to our vaccine received database? Click the
            button below to get started.
          </Paragraph>{" "}
          <br></br>
          <Badge borderRadius="full" px="2" colorScheme="pink">
            🌌 Feel better!
          </Badge>
          <Paragraph
            color={
              colorMode === "light" ? Colors.lighter_navy : Colors.pink_main
            }
          >
            Thanks for adding yourself! Hope you feel better!
          </Paragraph>
          <Button
            radius="99px"
            color={Colors.slate}
            margin="20px auto 0 auto"
            background="linear-gradient(to left, #b52660 50%, #112240 50%) right;"
          >
            <a>Get started</a>
          </Button>
        </div>
        <div>
          <Header
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
            fontFamily="Inter"
            fontSize="18px
            "
          >
            <Badge borderRadius="full" px="2" colorScheme="teal">
              ✅
            </Badge>
            <b> Check vaccine recieved.</b>
          </Header>
          <Div shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
            <Img
              src="/images/main3.png"
              radius="50%"
              width="128px"
              height="128px"
              margin="0 0 0 0"
            />
          </Div>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            ❓ What's this?
          </Badge>
          <Paragraph
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
          >
            Want to see how many people have recieved COVID-19 vaccine within a
            10 mile range? Click the button below to get started.
          </Paragraph>{" "}
          <br></br>
          <Badge borderRadius="full" px="2" colorScheme="pink">
            🌌 Stay safe!
          </Badge>
          <Paragraph
            color={
              colorMode === "light" ? Colors.lighter_navy : Colors.pink_main
            }
          >
            Thanks for checking and stay safe! Good to check up on your friends
            and family as well!
          </Paragraph>
          <Button
            radius="99px"
            color={Colors.slate}
            margin="20px auto 0 auto"
            background="linear-gradient(to left, #b52660 50%, #112240 50%) right;"
          >
            <a>Get started</a>
          </Button>
        </div>
        <div>
          <Header
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
            fontFamily="Inter"
            fontSize="18px
            "
          >
            <Badge borderRadius="full" px="2" colorScheme="teal">
              ✅
            </Badge>
            <b> Check COVID-19 recieved.</b>
          </Header>
          <Div shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
            <Img
              src="/images/main4.png"
              radius="50%"
              width="128px"
              height="128px"
              margin="0 0 0 0"
            />
          </Div>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            ❓ What's this?
          </Badge>
          <Paragraph
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
          >
            Want to see how many people have recieved COVID-19 within a 10 mile
            range? Click the button below to get started.
          </Paragraph>{" "}
          <br></br>
          <Badge borderRadius="full" px="2" colorScheme="pink">
            🌌 Stay calm!
          </Badge>
          <Paragraph
            color={
              colorMode === "light" ? Colors.lighter_navy : Colors.pink_main
            }
          >
            Make sure to follow rules and stay up to date on the latest news!
          </Paragraph>
          <Button
            radius="99px"
            color={Colors.slate}
            margin="20px auto 0 auto"
            background="linear-gradient(to left, #b52660 50%, #112240 50%) right;"
          >
            <a>Get started</a>
          </Button>
        </div>
      </Div>
    </div>
  );
};

export default Profile;
