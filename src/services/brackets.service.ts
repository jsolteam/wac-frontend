import {API_URL, type ApiResponse} from "./service.constant.ts";
import axios from "axios";
import type {BracketAllResponse} from "../models/brackets.model.ts";

const urlFetch = `${API_URL}/brackets`;

export const getBrackets = async (): Promise<BracketAllResponse | null> => {
    const response = await axios.get<ApiResponse<BracketAllResponse>>(`${urlFetch}`);

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};