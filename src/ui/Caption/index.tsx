import type { ReactNode } from "react";
import * as Styles from "./Caption.styles";

export const Caption = ({ children }: { children: ReactNode }) => (
  <Styles.Caption>
    {children} <Styles.CaptionArrow>&#9660;</Styles.CaptionArrow>
  </Styles.Caption>
);
