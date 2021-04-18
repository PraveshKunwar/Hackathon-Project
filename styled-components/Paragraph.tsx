import styled from "styled-components";

interface ParagraphProps {
  margin?: string;
  fontSize?: string;
  color: string;
}

const Paragraph = styled.h1`
  text-align: center;
  font-family: "Inter", "SF Mono", "Calibre", "Roboto";
  font-size: ${(props: ParagraphProps) =>
    props.fontSize ? props.fontSize : "16px"};
  color: ${(props: ParagraphProps) => (props.color ? props.color : false)};
  margin: ${(props: ParagraphProps) => (props.margin ? props.margin : "0")};
`;

export default Paragraph;
