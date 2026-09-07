import type {ScheduleModel} from "../../../../../models/schedule.model.ts";

export const sortScheduleData = (data: ScheduleModel[] | null | undefined): ScheduleModel[] => {
    const monthMap: Record<string, number> = {
        "января": 0,
        "февраля": 1,
        "марта": 2,
        "апреля": 3,
        "мая": 4,
        "июня": 5,
        "июля": 6,
        "августа": 7,
        "сентября": 8,
        "октября": 9,
        "ноября": 10,
        "декабря": 11,
    };

    const parseDay = (dayStr: string): Date => {
        const [day, monthStr] = dayStr.split(" ");
        const year = new Date().getFullYear();
        const month = monthMap[monthStr.toLowerCase()];
        return new Date(year, month, Number(day));
    };

    const parseTime = (timeStr: string): number => {
        const [start] = timeStr.split(" - ");
        const [hours, minutes] = start.split(":").map(Number);
        return hours * 60 + minutes;
    };

    if (!data) {
        return [];
    }

    return [...data].sort((a, b) => {
        const dateA = parseDay(a.day);
        const dateB = parseDay(b.day);

        if (dateA.getTime() !== dateB.getTime()) {
            return dateA.getTime() - dateB.getTime();
        }

        return parseTime(a.time) - parseTime(b.time);
    });
};
