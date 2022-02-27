import React, { FC, useEffect, useState } from 'react';
import api from '../../../api';
import { Modal } from '../../../components/Modal';
import { Event } from '../../../types';
import { EventItem } from './EventItem';

interface Props {
    close: () => void;
    conferenceId: number;
}

export const EventsModal: FC<Props> = ({ close, conferenceId }) => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        (async () => {
            const events = await api.events.getAll(conferenceId);
            setEvents(events);
        })();
    }, []);

    return (
        <Modal
            close={close}
            size="xl"
            body={
                <div className="events_wrap">
                    {events?.map((event, index) => (
                        <EventItem key={index} event={event} />
                    ))}
                </div>
            }
        ></Modal>
    );
};
