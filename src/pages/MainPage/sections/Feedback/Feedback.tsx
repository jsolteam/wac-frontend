import * as Styles from "./Feedback.styles.ts";

import image from "../../../../assets/img/feedback.png";

import {NAVIGATION_FEEDBACK} from "../../constants/navigation.ts";
import {TitleSection} from "../../../../ui/TitleSection";
import { Input } from "../../../../ui/Input";
import {CreatorBlock} from "../../../../components/CreatorBlock";
import {useMediaQuery} from "react-responsive";
import {ButtonSendFeedback} from "../../../../components/ButtonSendFeedback";
import {useState} from "react";
import type {FeedbackRequest} from "../../../../models/feedback.model.ts";
import {FeedbackService} from "../../../../services/feedback.service.ts";

interface InputsData {
    telegram: string;
    text: string;
}


export const Feedback = () => {
    const isMobile = useMediaQuery({maxWidth: 700});
    const [data, setData] = useState<InputsData>({telegram: "", text: ""});
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError(null);
        setSuccess(false);
    };

    const handleSubmit = () => {
        if (!data.telegram.trim() || !data.text.trim()) {
            setError("Пожалуйста, заполните все поля.");
            setSuccess(false);
            return;
        }

        const request: FeedbackRequest = {
            telegram: data.telegram.trim(),
            text: data.text,
        }

        FeedbackService(request);

        // Очистка формы
        setData({ telegram: "", text: "" });
        setError(null);
        setSuccess(true);
    };


    return (
        <Styles.Feedback id={NAVIGATION_FEEDBACK}>
            <Styles.Content>
                <TitleSection>Обратная связь</TitleSection>
                <Styles.MainBox>
                    <Styles.Form>
                        <Styles.TextForm>При возникновении вопросов, багов и прочее, Вы можете написть нам через
                            специальную форму ниже:
                        </Styles.TextForm>
                        {success && <Styles.Success>Обращение успешно отправлено!</Styles.Success>}
                        <Styles.TelegramBlock>
                            <Input width={isMobile ? 290 : 467} height={50} padding={14} placeholder="Ваш Telegram @username" required name="telegram" onChange={handleChange} disabled={success}/>
                        </Styles.TelegramBlock>
                        <Input width={isMobile ? 290 : 467} height={216} padding={14} placeholder="Текст обращения" required area name="text" onChange={handleChange} disabled={success} />
                        {error && <Styles.ErrorMessage>{error}</Styles.ErrorMessage>}
                        <ButtonSendFeedback disabled={success} onClick={handleSubmit}>Отправить</ButtonSendFeedback>
                    </Styles.Form>
                    <Styles.Img src={image}/>
                </Styles.MainBox>
            </Styles.Content>
            <Styles.Footer>
                <Styles.FooterContent>
                    <Styles.FooterBlock>
                        <Styles.LinksBlock>
                            <Styles.TitleLink>Навигация</Styles.TitleLink>
                            <Styles.TextBlock>
                                <Styles.Link href="#main">Главная</Styles.Link>
                                <Styles.Link href="#about">О турнире</Styles.Link>
                                <Styles.Link>Расписание</Styles.Link>
                                <Styles.Link>Турнирная сетка</Styles.Link>
                                <Styles.Link href="#feedback">Обратная связь</Styles.Link>
                            </Styles.TextBlock>
                        </Styles.LinksBlock>
                        <Styles.LinksBlock>
                            <Styles.TitleLink>Ссылки</Styles.TitleLink>
                            <Styles.TextBlock>
                                <Styles.Link href="https://t.me/walkonskytw">Telegram канал</Styles.Link>
                                <Styles.Link href="https://twitch.tv/walkonskyy">Twitch</Styles.Link>
                                <Styles.Link href="https://discord.gg/668WZMhaTQ">Discord</Styles.Link>
                                <Styles.Link href="https://t.me/jsol_team">JSOL Team канал</Styles.Link>
                            </Styles.TextBlock>
                        </Styles.LinksBlock>
                        <Styles.LinksBlock>
                            <Styles.TitleLink>Положения</Styles.TitleLink>
                            <Styles.TextBlock>
                                <Styles.Link href="https://docs.google.com/document/d/1TRHGx83EaFXFnAFuvOus3ABvJYvAJ-gIcrxMoX_XPbk/edit?tab=t.0">Регламент турнира</Styles.Link>
                            </Styles.TextBlock>
                        </Styles.LinksBlock>
                    </Styles.FooterBlock>
                    <Styles.FooterBlock>
                        <CreatorBlock />
                    </Styles.FooterBlock>
                </Styles.FooterContent>
            </Styles.Footer>
        </Styles.Feedback>
    );
};