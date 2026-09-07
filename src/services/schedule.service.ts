import {API_URL, type ApiResponse} from "./service.constant.ts";
import axios from "axios";
import type {ScheduleModel} from "../models/schedule.model.ts";

const urlFetch = `${API_URL}/schedule`;

export const getSchedule = async (): Promise<ScheduleModel[] | null> => {
    const response = await axios.get<ApiResponse<ScheduleModel[]>>(`${urlFetch}`);

    if (!response.data.data) {
        throw new Error(response.data.error || 'No data received');
    }

    return response.data.data;
};