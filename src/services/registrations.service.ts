import {API_URL, type ApiResponse} from "./service.constant.ts";
import type {AdminResponse, UserRequest, UserResponse} from "../models/registrations.model.ts";
import axios from "axios";

const urlFetch = `${API_URL}/auth`;

export const authService = async (): Promise<UserResponse | null> => {
    const response = await axios.get<ApiResponse<UserResponse | null>>(urlFetch);

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};

export const authAdmin = async (): Promise<AdminResponse | null> => {
    const response = await axios.get<ApiResponse<AdminResponse | null>>(urlFetch+"/admin");

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};

export const registerService = async (data: UserRequest): Promise<UserResponse> => {
    const response = await axios.post<ApiResponse<UserResponse>>(
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