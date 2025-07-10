import Logo from "../../assets/img/logo.png";
import { NAVIGATION_MAIN } from "../../constants/navigation";
import { Button } from "../../ui/Button";
import { Caption } from "../../ui/Caption";

import * as Styles from "./Main.styles";

export const Main = () => {
  return (
    <Styles.Main id={NAVIGATION_MAIN}>
      <Styles.Content>
        <Styles.Logo src={Logo} />
        <Styles.Title>Регистрация открыта!</Styles.Title>
        <Button>зарегистрироваться</Button>
        <Caption>О турнире</Caption>
      </Styles.Content>
    </Styles.Main>
  );
};
