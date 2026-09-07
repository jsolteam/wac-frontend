import * as Styles from "./MainPage.styles.ts";
import {Main} from "./sections/Main";
import {About} from "./sections/About";
import {Feedback} from "./sections/Feedback";
import {Header} from "../../components/Header";
import {Schedule} from "./sections/Schedule";
import {Teams} from "./sections/Teams";

import type {Settings} from "../../models/settings.model.ts";
import {useQuery} from "@tanstack/react-query";
import {authService} from "../../services/registrations.service.ts";
import {getSchedule} from "../../services/schedule.service.ts";
import {getTeams} from "../../services/team.service.ts";
import {Bracket} from "./sections/Bracket";

interface MainPageProps {
    settings: Settings;
}

export const MainPage = ({settings}: MainPageProps) => {
    const {data: user} = useQuery({
        queryKey: ["user"],
        queryFn: authService,
        refetchOnWindowFocus: false,
        staleTime: 0,
        retry: 0
    });

    const {data: schedule} = useQuery({
        queryKey: ["schedule"],
        queryFn: getSchedule,
        refetchOnWindowFocus: false,
    });

    const {data: teams} = useQuery({
        queryKey: ["teams"],
        queryFn: getTeams,
        refetchOnWindowFocus: false,
    });

    return (
        <Styles.MainPage>
            <Header scheduleOpen={settings?.schedule_open} bracketOpen={settings?.bracket_open} feedbackOpen={settings?.feedback_open} />
            <Main registrationOpen={settings.registration_open} user={user} />
            <About />
            {teams && teams.length > 0 && <Teams teams={teams}/>}
            {settings.schedule_open && schedule && <Schedule schedule={schedule}/>}
            {settings.bracket_open && <Bracket />}
            {settings.feedback_open && <Feedback/>}
        </Styles.MainPage>
    );
};