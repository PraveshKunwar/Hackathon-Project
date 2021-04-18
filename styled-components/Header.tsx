import styled from "styled-components";

interface HeaderProps {
  margin?: string;
  fontSize?: string;
  color: string;
  fontFamily?: string;
}

const Header = styled.h1`
  text-align: center;
  font-family: ${(props: HeaderProps) =>
    props.fontFamily ? props.fontFamily : "SF Mono"};
  font-size: ${(props: HeaderProps) =>
    props.fontSize ? props.fontSize : "16px"};
  color: ${(props: HeaderProps) => (props.color ? props.color : false)};
  margin: ${(props: HeaderProps) => (props.margin ? props.margin : "0")};
`;

export default Header;
