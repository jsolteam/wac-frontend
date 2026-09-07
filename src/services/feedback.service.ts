import axios from "axios";
import {API_URL, type ApiResponse} from "./service.constant.ts";
import type {FeedbackRequest, FeedbackResponse} from "../models/feedback.model.ts";

const urlFetch = `${API_URL}/feedback`;

export const FeedbackService = async (data: FeedbackRequest): Promise<FeedbackResponse> => {
    const response = await axios.post<ApiResponse<FeedbackResponse>>(
        `${urlFetch}`,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.data.data) {
        throw new Error(response.data.error || 'Registration failed: no data received');
    }

    return response.data.data;
};