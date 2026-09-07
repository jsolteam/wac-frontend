import * as Styles from "./BracketGroupStage.styles.ts";
import {BracketGroup} from "../BracketGroup";
import type {ReactElement} from "react";

interface BracketGroupStageProps {
    top: ReactElement<typeof BracketGroup>;
    middle: ReactElement<typeof BracketGroup>;
    bottom: ReactElement<typeof BracketGroup>;
}

export const BracketGroupStage = ({top, middle, bottom}: BracketGroupStageProps) => {
    return (
        <Styles.BracketGroupStage>
            <Styles.CurrentStage>
                <Styles.TopLine />
                {top}
                {bottom}
                <Styles.BottomLine/>
            </Styles.CurrentStage>
            <Styles.NextStage>{middle}</Styles.NextStage>
        </Styles.BracketGroupStage>
    );
};