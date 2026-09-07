export interface TeamResponse {
    name: string;
    avatar: string;
}

export interface BracketNextResponse {
    stage: string;
    group_num: number;
}

export interface BracketItemResponse {
    stage: string;
    group_num: number;
    home_team: TeamResponse | null;
    away_team: TeamResponse | null;
    home_score: number;
    away_score: number;
    home_winner: boolean;
    away_winner: boolean;
    next_stage: BracketNextResponse;
    lose_stage: BracketNextResponse;
    next_is_home: boolean;
    lose_is_home: boolean;
}

export interface BracketStageResponse {
    stage: string;
    rounds: BracketItemResponse[];
}

export interface BracketResponse {
    final: BracketItemResponse;
    grand_final: BracketItemResponse;
    rounds: BracketStageResponse[];
}

export interface BracketAllResponse {
    winners: BracketResponse;
    losers: BracketResponse;
}