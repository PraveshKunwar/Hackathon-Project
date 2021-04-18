import styled from "styled-components";

type direction = "row" | "column";

interface DivProps {
  margin?: string;
  fontSize?: string;
  color?: string;
  display?: string;
  flexDir?: direction;
  width?: string;
  height?: string;
  background?: string;
}

const Div = styled.div`
  text-align: center;
  font-family: "Inter", "SF Mono", "Calibre", "Roboto";
  margin: ${(props: DivProps) => (props.margin ? props.margin : "16px")};
  font-size: ${(props: DivProps) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props: DivProps) => (props.color ? props.color : false)};
  display: flex;
  flex-direction: ${(props: DivProps) =>
    props.flexDir ? props.flexDir : "row"};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > div {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: "30px";
    width: ${(props: DivProps) => (props.width ? props.width : "0")};
    height: ${(props: DivProps) => (props.height ? props.height : "0")};
    background: ${(props: DivProps) =>
      props.background ? props.background : false};
  }
`;

export default Div;
