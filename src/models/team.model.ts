export interface TeamMember {
    name: string;
    avatar: string;
    is_substitute: boolean;
}

export interface Team {
    name: string;
    avatar: string;
    captain: Captain;
    members: TeamMember[];
    substitute: TeamMember[];
}

export interface Captain {
    name: string;
    avatar: string;
    captain_photo: string;
}