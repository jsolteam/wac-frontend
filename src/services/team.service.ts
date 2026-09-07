import axios from "axios";
import {API_URL, type ApiResponse} from "./service.constant.ts";
import type {Team} from "../models/team.model.ts";

const urlFetch = `${API_URL}/teams`;

export const getTeams = async (): Promise<Team[] | null> => {
    const response = await axios.get<ApiResponse<Team[]>>(`${urlFetch}`);

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};