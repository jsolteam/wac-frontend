export interface UserResponse {
    token?: string;
    name: string;
    avatar: string;
}

export interface UserRequest {
    id: string;
    login: string;
    name: string;
    email: string;
    avatar: string;
    telegram_url: string;
    riot_id: string;
    comment: string;
}

export interface AdminResponse {
    status: boolean;
}