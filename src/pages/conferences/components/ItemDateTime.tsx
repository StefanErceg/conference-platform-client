import React, { FC } from 'react';
import { MaterialIcon } from '../../../components/MaterialIcon';
import { getDate, getTime } from '../../../utils';

interface Props {
    date: string;
}

export const ItemDateTime: FC<Props> = ({ date }) => {
    return (
        <div className="conference_time_date">
            <div className="conference_date">
                <MaterialIcon icon="event" />
                <span className="date">{getDate(date)}</span>
            </div>
            <div className="conference_time">
                <MaterialIcon icon="access_time" />
                <span className="time">
                    {getTime(date)}
                    <span className="hours">h</span>
                </span>
            </div>
        </div>
    );
};
