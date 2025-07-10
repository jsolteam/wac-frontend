import styled from "styled-components";
import { Typography } from "../../styles/typography";
import Liner from "../../assets/icons/liner.svg";

export const About = styled.section``;

export const Subtitle = styled.h2`
  ${Typography.h2}
  text-transform: uppercase;
`;

export const HowPlay = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  margin: 0 auto;

  ${Subtitle} {
    margin-bottom: 54px;
  }
`;
export const HowPlayContent = styled.div`
  display: flex;
`;

export const HowPlaySection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: 200px;

  &::before {
    content: url(${Liner});
    position: absolute;
    box-sizing: border-box;

    right: 0;
  }
`;

export const HowPlaySectionText = styled.div`
  text-align: center;
`;
