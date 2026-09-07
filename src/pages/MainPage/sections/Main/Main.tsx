import * as Styles from "./Main.styles";
import {NAVIGATION_MAIN} from "../../constants/navigation";
import {ButtonRegMain} from "../../../../components/ButtonRegMain";
import {SocialBlock} from "../../../../components/SocialBlock";

import walkonsky from "../../../../assets/img/walkonsky.png";
import logo from "../../../../assets/img/logo.png";
import {CLOSE_REGISTRATION, OPEN_REGISTRATION, USER_REGISTERED} from "../../constants/statusReg.ts";
import type {UserResponse} from "../../../../models/registrations.model.ts";

interface MainProps {
    registrationOpen: boolean;
    user?: UserResponse | null;
}

export const Main = ({registrationOpen, user}: MainProps) => {
    const status = user ? USER_REGISTERED : (registrationOpen ? OPEN_REGISTRATION : CLOSE_REGISTRATION)

    const displayMainBlock = (status: string) => {
        switch (status) {
            case OPEN_REGISTRATION:
                return <>
                    <Styles.Title>Регистрация открыта!</Styles.Title>
                    <ButtonRegMain>Зарегистрироваться</ButtonRegMain>
                </>
            case CLOSE_REGISTRATION:
                return <>
                    <Styles.TopBlock>
                        <Styles.Title>Регистрация закрыта!</Styles.Title>
                        <Styles.SubTitle>Да начнется битва!</Styles.SubTitle>
                    </Styles.TopBlock>
                </>
            case USER_REGISTERED:
                return <>
                    <Styles.TopBlock>
                        <Styles.Title>С возвращением,</Styles.Title>
                        <Styles.SubTitle>будущий чемпион Walkonsky ARAM Cup</Styles.SubTitle>
                    </Styles.TopBlock>
                    <Styles.UserBlock>
                        <Styles.Avatar
                            src={user?.avatar}/>
                        <Styles.Name>{user?.name}</Styles.Name>
                    </Styles.UserBlock>
                </>
            default:
                return <></>
        }
    };

    return (
        <Styles.Main id={NAVIGATION_MAIN}>
            <Styles.Content>
                <Styles.BackgroundImage src={walkonsky}/>
                <Styles.Logo src={logo}/>
                <Styles.MainBlock>
                    {displayMainBlock(status)}
                </Styles.MainBlock>
                <Styles.BottomBlock>
                    <SocialBlock/>
                </Styles.BottomBlock>
            </Styles.Content>
        </Styles.Main>
    );
};
