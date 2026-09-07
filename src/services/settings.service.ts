import {API_URL, type ApiResponse} from "./service.constant.ts";
import axios from "axios";
import type {Description, DescriptionLink, Settings} from "../models/settings.model.ts";

const urlFetch = `${API_URL}/settings`;

export const getDescription = async (): Promise<Description | null> => {
    const response = await axios.get<ApiResponse<Description>>(`${urlFetch}/description`);

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};

export const getDescriptionLinks = async (): Promise<DescriptionLink[] | null> => {
    const response = await axios.get<ApiResponse<DescriptionLink[]>>(`${urlFetch}/description/links`, {timeout: 5000});

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};

export const getSettings = async (): Promise<Settings> => {
    const response = await axios.get<ApiResponse<Settings>>(`${urlFetch}`, {
        timeout: 5000,
    });

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};