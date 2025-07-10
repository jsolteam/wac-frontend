import { css } from "styled-components";
import {
  montserratAlternatesBold,
  montserratAlternatesRegular,
  montserratFamily300,
  montserratFamily600,
} from "./fonts";

export const Typography = {
  h1: css`
    ${montserratAlternatesBold};

    font-size: 50px;
  `,

  h2: css`
    ${montserratAlternatesRegular};

    font-size: 40px;

    color: ${({ theme }) => theme.colors.kournikova};
  `,

  p1: css`
    ${montserratFamily600};
    font-size: 24px;
  `,

  caption: css`
    ${montserratFamily300};
    font-size: 15px;
  `,
};
