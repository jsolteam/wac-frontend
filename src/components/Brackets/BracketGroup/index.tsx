import * as Styles from "./BracketGroup.styles.ts";

interface BracketGroupProps {
    children: React.ReactNode;
    position?: "left" | "right";
    double?: boolean;
}

export const BracketGroup = ({children, position = "right", double = false}: BracketGroupProps) => {

    return (
        <Styles.BracketGroup>
            <Styles.Line position={position} />
            <Styles.LineNext position={position} />
            {double && <>
                <Styles.Line position="left" />
                <Styles.LineNext position="left" />
            </>}
            {children}
        </Styles.BracketGroup>
    );
};