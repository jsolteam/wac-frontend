import styled from "styled-components";
import backgroundMain from "../../assets/img/backgroundMain.png";
import { Typography } from "../../styles/typography";

export const Main = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  background-image: url(${backgroundMain});
  background-size: auto 1080px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Content = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  display: flex;

  height: 344px;
  width: auto;

  margin-bottom: 64px;
`;

export const Title = styled.h1`
  ${Typography.h1};

  color: ${({ theme }) => theme.colors.frenchPass};

  margin-bottom: 45px;
`;
