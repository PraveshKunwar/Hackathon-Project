import React, { useState, useEffect } from "react";
import { GetServerSideProps, NextComponentType } from "next";
import nookies from "nookies";
import { useAuth } from "../util/auth";
import Header from "../styled-components/Header";
import Div from "../styled-components/Div";
import Img from "../styled-components/Image";
import Colors from "../util/colors";
import { Box, Badge, Image, Flex, Spacer } from "@chakra-ui/react";

const Profile: NextComponentType = () => {
  const { user } = useAuth();
  return (
    <div className="user">
      <Header color={Colors.slate} fontSize="25px" margin="3rem">
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
      <Div width="350px" height="400px" margin="2rem">
        <div>
          <Header
            color={Colors.dark_slate_border_purple}
            fontFamily="Inter"
            fontSize="18px"
          >
            <b> Add yourself to vaccine recieved.</b>
          </Header>
        </div>
        <div>
          <Header
            color={Colors.dark_slate_border_purple}
            fontFamily="Inter"
            fontSize="18px"
          >
            <b> Add yourself to positive.</b>
          </Header>
        </div>
        <div>
          {" "}
          <Header
            color={Colors.dark_slate_border_purple}
            fontFamily="Inter"
            fontSize="18px"
          >
            <b> Check vaccine recieved within 10 mile range.</b>
          </Header>
        </div>
        <div>
          {" "}
          <Header
            color={Colors.dark_slate_border_purple}
            fontFamily="Inter"
            fontSize="18px"
          >
            <b> Check positive within 10 mile range.</b>
          </Header>
        </div>
      </Div>
    </div>
  );
};

export default Profile;
