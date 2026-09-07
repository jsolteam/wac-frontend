import {css} from "styled-components";
import {
    montserratAlternatesBold,
    montserratFamily200,
    montserratFamily300,
    montserratFamily400, montserratFamily600,
    tagesschriftCyrillicRegular
} from "./fonts";

export const Typography = {
    mainTitle: css`
        ${montserratAlternatesBold};
        font-size: 50px;
    `,

    subtitle: css`
        ${montserratFamily300};
        font-size: 15px;
    `,

    button: css`
        ${montserratFamily600};
        font-size: 24px;
    `,

    title: css`
        ${tagesschriftCyrillicRegular};
        font-size: 40px;
    `,

    caption: css`
        ${montserratFamily300};
        font-size: 15px;
    `,

    placeholder: css`
        ${montserratFamily200};
        font-size: 14px;
    `,

    input: css`
        ${montserratFamily400};
        font-size: 14px;
    `,

    twitchName: css`
        ${tagesschriftCyrillicRegular};
        font-size: 36px;
    `,
};
