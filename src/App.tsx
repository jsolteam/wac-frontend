import {ThemeProvider} from 'styled-components';
import {theme, type TTheme} from './styles/theme';
import {GlobalStyles} from './styles/mixins/GlobalStyles';
import {LoaderPage} from "./pages/LoaderPage";
import {useEffect, useState} from "react";
import {MainPage} from "./pages/MainPage";
import {useQuery} from "@tanstack/react-query";
import {getSettings} from "./services/settings.service.ts";

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends TTheme {
    }
}

export const App = () => {
    const {data: settings, isFetching: queryLoading, isError} = useQuery({
        queryKey: ["settings"],
        queryFn: getSettings,        refetchOnWindowFocus: false,
        staleTime: 0,
        retry: 0
    });

    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setShowPage(true);
        }, 2000);

        return () => clearTimeout(delayTimer);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <LoaderPage loading={showPage && !queryLoading} error={isError}/>
            {(showPage && !queryLoading && settings) && <MainPage settings={settings}/>}
        </ThemeProvider>
    );
};
