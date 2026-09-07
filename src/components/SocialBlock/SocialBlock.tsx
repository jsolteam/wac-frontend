import * as Styles from "./SocialBlock.styles.ts";
import {TelegramIcon, TwitchIcon} from "../../ui/Icons";
import {useMediaQuery} from "react-responsive";

export const SocialBlock = () => {
    const isMobile = useMediaQuery({maxWidth: 700});

    const handleClickTwitch = () => (window.open('https://twitch.tv/walkonskyy', '_blank'));
    const handleClickTelegram = () => (window.open('https://t.me/walkonskytv', '_blank'));

    return (
        <Styles.SocialBlock>
            <Styles.Title>Подписывайся на соц.сети</Styles.Title>
            <Styles.Content>
                <Styles.SocialButton onClick={handleClickTwitch}>
                    <TwitchIcon size={isMobile ? 19 : 32} />
                </Styles.SocialButton>

                <Styles.SocialButton onClick={handleClickTelegram}>
                    <TelegramIcon size={isMobile ? 19 : 32} />
                </Styles.SocialButton>
            </Styles.Content>
        </Styles.SocialBlock>
    );
};