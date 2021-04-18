import styled from "styled-components";

interface ButtonProps {
  radius?: string;
  color?: string;
  background?: string;
  margin?: string;
}

const Button = styled.button`
  display: block;
  width: 150px;
  border-radius: ${(props: ButtonProps) =>
    props.radius ? props.radius : "0px"};
  text-align: center;
  border-width: 0px;
  font-size: 20px;
  background: ${(props: ButtonProps) =>
    props.background ? props.background : "none"};
  background-size: 200%;
  margin: ${(props: ButtonProps) => (props.margin ? props.margin : "0")};
  transition: 0.5s ease-out;
  &:visited {
    color: ${(props: ButtonProps) => (props.color ? props.color : false)};
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-position: left;
  }
  > a {
    text-decoration: none;
    font-family: "Inter", "Roboto", "Oswald";
    color: ${(props: ButtonProps) => (props.color ? props.color : false)};
  }
`;

export default Button;
