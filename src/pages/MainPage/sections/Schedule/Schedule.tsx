import * as Styles from "./Shedule.styles.ts";
import {NAVIGATION_SCHEDULE} from "../../constants/navigation.ts";
import {TitleSection} from "../../../../ui/TitleSection";
import {sortScheduleData} from "./helpers/sortScheduleData.ts";
import {ScheduleBlock} from "../../../../components/ScheduleBlock";
import type {ScheduleModel} from "../../../../models/schedule.model.ts";

interface ScheduleProps {
    schedule?: ScheduleModel[] | null;
}

export const Schedule = ({schedule}: ScheduleProps) => {

    const sorted = sortScheduleData(schedule);

    const uniqueDays = [...new Set(sorted.map((item) => item.day))];

    return (
        <Styles.Schedule id={NAVIGATION_SCHEDULE}>
            <Styles.Content>
                <TitleSection>Расписание</TitleSection>
                {uniqueDays.map((day) => (
                    <Styles.DayBlock key={day}>
                        <Styles.TextDayBlock>
                            Игровой день:
                            <Styles.SelectionDayBlock>{day}</Styles.SelectionDayBlock>
                        </Styles.TextDayBlock>
                        <Styles.DayContent>
                            {sorted
                                .filter((item) => item.day === day)
                                .map((item, idx) => (
                                    <ScheduleBlock key={idx} time={item.time} description={item.description} />
                                ))}
                        </Styles.DayContent>
                    </Styles.DayBlock>
                ))}

                <Styles.SubtitleBlock>
                    Расписание турнира <Styles.SubtitleSelection>может быть изменено</Styles.SubtitleSelection>. Отслеживайте все изменения в официальном медиа-ресурсе
                    турнира, либо на сайте турнира.
                </Styles.SubtitleBlock>
            </Styles.Content>
        </Styles.Schedule>
    );
};