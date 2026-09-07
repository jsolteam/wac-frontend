export interface FeedbackRequest {
    telegram: string;
    text: string;
}

export interface FeedbackResponse {
    success: boolean;
}