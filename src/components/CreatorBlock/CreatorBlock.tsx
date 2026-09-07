import * as Styles from "./CreatorBlock.styles.ts";
import logoJSOL from "../../assets/img/logoJSOL.png"

export const CreatorBlock = () => {
    return (
        <Styles.CreatorBlock>
            <Styles.CreatorText>Создано в подвале</Styles.CreatorText>
            <Styles.CreatorLogo src={logoJSOL}/>
        </Styles.CreatorBlock>
    );
};