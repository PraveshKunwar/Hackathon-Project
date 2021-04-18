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

const Profile: NextComponentType = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <div className="user">
      <Header
        color={colorMode === "light" ? "#9f7aea" : Colors.slate}
        fontSize="25px"
        margin="3rem"
        fontFamily="Segoe UI"
      >
        Welcome to Covid Tracker,
        <br></br>
        <b style={{ color: Colors.pink_main }}>
          {user.displayName ? user.displayName : "unknown."}.
        </b>
      </Header>
      <Img
        src={user.photoURL}
        width="128px"
        height="128px"
        radius="50%"
        margin="10px auto 0 auto"
      />
      <Div
        width="350px"
        height="450px"
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
          <br></br> <br></br> <br></br> <br></br> <br></br>
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
          <br></br> <br></br> <br></br> <br></br> <br></br>
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
          <br></br> <br></br> <br></br> <br></br> <br></br>
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
            Thanks for checking and stay safe!
          </Paragraph>
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
          <br></br> <br></br> <br></br> <br></br> <br></br>
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
            Stay calm! It will get better. Make sure to follow rules and stay up
            to date on the latest news!
          </Paragraph>
        </div>
      </Div>
    </div>
  );
};

export default Profile;
