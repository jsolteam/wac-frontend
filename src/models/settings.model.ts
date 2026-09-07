export interface Description {
    text: string;
}

export interface DescriptionLink {
    key: string;
    value: string;
}

export interface Settings {
    registration_open: boolean;
    schedule_open: boolean;
    bracket_open: boolean;
    feedback_open: boolean;
    tournament_start_date: string;
}