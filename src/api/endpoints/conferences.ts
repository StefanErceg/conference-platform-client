import { Conference } from '../../types';
import { http } from '../http';

export const conferences = {
    getAll(): Promise<Conference[]> {
        return http.get('/conference-list').then((res) => res.data);
    },
};
