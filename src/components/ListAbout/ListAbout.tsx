import * as Styles from "./ListAbout.styles.ts";
import type {DescriptionLink} from "../../models/settings.model.ts";

interface ListAboutProps {
    data: DescriptionLink[] | null | undefined;
}

export const ListAbout = ({data}: ListAboutProps) => {
    if (!data || data.length === 0) return null;

    return (
        <Styles.ListAbout>
            {data.map((item) => (
                <Styles.Item>
                    <Styles.Key>🔹 {item.key}: </Styles.Key>
                    <Styles.Value>{item.value}</Styles.Value>
                </Styles.Item>
            ))}
        </Styles.ListAbout>
    );
};