import * as Styles from "./About.styles";

import RegisterIcon from "../../assets/icons/Register.svg";
import PlayIcon from "../../assets/icons/play.svg";
import ShuffleIcon from "../../assets/icons/shuffle.svg";
import TimeIcon from "../../assets/icons/time.svg";

export const About = () => (
  <Styles.About>
    <Styles.Subtitle>О турнире</Styles.Subtitle>
    <Styles.Subtitle>правила</Styles.Subtitle>
    <Styles.HowPlay>
      <Styles.Subtitle>КАК УЧАСТВОВАТЬ</Styles.Subtitle>
      <Styles.HowPlayContent>
        <Styles.HowPlaySection>
          <img src={RegisterIcon} />
          <Styles.HowPlaySectionText>зарегистрируйся</Styles.HowPlaySectionText>
        </Styles.HowPlaySection>
        <Styles.HowPlaySection>
          <img src={PlayIcon} />
          <Styles.HowPlaySectionText>Дождись распределение в команду</Styles.HowPlaySectionText>
        </Styles.HowPlaySection>
        <Styles.HowPlaySection>
          <img src={ShuffleIcon} />
          <Styles.HowPlaySectionText>получи героя в драфте</Styles.HowPlaySectionText>
        </Styles.HowPlaySection>
        <Styles.HowPlaySection>
          <img src={TimeIcon} />
          <Styles.HowPlaySectionText>играй на стриме</Styles.HowPlaySectionText>
        </Styles.HowPlaySection>
      </Styles.HowPlayContent>
    </Styles.HowPlay>
    <Styles.Subtitle>регистрация</Styles.Subtitle>
  </Styles.About>
);
