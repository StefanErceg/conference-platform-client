import { Event } from '../../types';
import { http } from '../http';

export const events = {
    getAll(conferenceId: number): Promise<Event[]> {
        return http.get(`/event-list?conferenceId=${conferenceId}`).then((res) => res.data);
    },
};
