import styled from "styled-components";

interface ImageProps {
  radius?: string;
  width?: string;
  height?: string;
  margin?: string;
}

const Img = styled.img`
  margin: ${(props: ImageProps) => (props.margin ? props.margin : "none")};
  border-radius: ${(props: ImageProps) =>
    props.radius ? props.radius : "0px"};
  width: ${(props: ImageProps) => (props.width ? props.width : "0")};
  height: ${(props: ImageProps) => (props.height ? props.height : "0")};
  display: "block";
`;

export default Img;
