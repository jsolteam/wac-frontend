import styled from "styled-components";
import { Typography } from "../../styles/typography";

export const Caption = styled.p`
  margin-top: auto;
  position: relative;

  ${Typography.caption};

  text-transform: uppercase;
  padding-bottom: 15px;
`;

export const CaptionArrow = styled.span`
  display: block;
  position: absolute;

  bottom: 0;
  left: calc(50% - 4px);

`;
