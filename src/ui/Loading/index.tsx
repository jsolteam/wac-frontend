import * as Styles from "./Loading.styles.ts";
import {theme} from "../../styles/theme.ts";

interface LoadingProps {
    size?: number;
    colorMain?: string;
    colorSecondary?: string;
}

const DEFAULT_COLOR_MAIN = theme.loading.colors.primary;
const DEFAULT_COLOR_SECONDARY = theme.loading.colors.secondary;

export const Loading = ({
                            size = 20,
                            colorMain = DEFAULT_COLOR_MAIN,
                            colorSecondary = DEFAULT_COLOR_SECONDARY
                        }: LoadingProps) => {
    return <Styles.Loading size={size} colorMain={colorMain} colorSecondary={colorSecondary}/>
};