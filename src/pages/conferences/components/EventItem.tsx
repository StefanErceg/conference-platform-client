import React, { FC } from 'react';
import { MaterialIcon } from '../../../components/MaterialIcon';
import { Event } from '../../../types';
import { getDate, getTime } from '../../../utils';

interface Props {
    event: Event;
}

export const EventItem: FC<Props> = ({ event }) => {
    const { name, start, location, eventTypeName } = event;

    const locationField = `${location?.name} - ${location?.address} - ${location?.city?.name} - ${location?.room} | ${location?.locationTypeName}`;
    return (
        <div className="event_item">
            <span className="name">{name}</span>
            <div className="date">
                <MaterialIcon icon="event" />
                <span className="value">{getDate(start)}</span>
            </div>
            <div className="time">
                <MaterialIcon icon="access_time" />
                <span className="value">
                    {getTime(start)}
                    <span className="hours">h</span>
                </span>
            </div>

            <div className="location">
                <MaterialIcon icon="location_on" />
                <span className="value">{locationField}</span>
            </div>

            <div className="type">{eventTypeName}</div>
        </div>
    );
};
