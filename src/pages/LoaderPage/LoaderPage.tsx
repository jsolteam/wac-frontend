import {useMediaQuery} from 'react-responsive';
import * as Styles from "./Loader.styles.ts";
import {CreatorBlock} from "../../components/CreatorBlock";
import {Loading} from "../../ui/Loading";

import logoWAC from "../../assets/img/logoClear.png"

interface LoaderPageProps {
    loading: boolean;
    error?: boolean;
}

export const LoaderPage = ({loading, error = false}: LoaderPageProps) => {
    const isMobile = useMediaQuery({maxWidth: 440});

    const displayErrorOrLoading = error ? (
        <>
            <Styles.ErrorTextTitle>Ошибка загрузки сайта</Styles.ErrorTextTitle>
            <Styles.ErrorTextSubtitle>Попробуйте позже</Styles.ErrorTextSubtitle>
        </>
    ) : (
        <>
            <Styles.LoadingText>Загрузка страницы...</Styles.LoadingText>
            <Loading size={isMobile ? 32 : 43}/>
        </>
    );

    return (
        <Styles.LoaderPage isVisible={loading}>
            <Styles.Content>
                <Styles.LoadingBlock>
                    <Styles.Logo src={logoWAC}/>
                    {displayErrorOrLoading}
                </Styles.LoadingBlock>
                <CreatorBlock/>
            </Styles.Content>
        </Styles.LoaderPage>
    );
};