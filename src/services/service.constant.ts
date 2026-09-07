export const API_URL = "https://wac-api.slmsquad.ru";

export interface ApiResponse<T> {
    data: T | null;
    error?: string;
}
