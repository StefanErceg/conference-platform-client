import React, { FC, useState } from 'react';
import { MaterialIcon } from '../../../components/MaterialIcon';
import { Conference } from '../../../types';
import { getDate, getTime } from '../../../utils';
import { EventsModal } from './EventsModal';
import { ItemDateTime } from './ItemDateTime';

interface Props {
    conference: Conference;
}

export const ConferenceItem: FC<Props> = ({ conference }) => {
    const { id, name = '', start = '', end = '', description = '' } = conference;
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            {' '}
            <div className="conference_item">
                <span className="conference_name">{name}</span>
                <div className="duration">
                    <ItemDateTime date={start} />
                    <ItemDateTime date={end} />
                </div>
                <span className="description">{description}</span>
                <div className="actions">
                    <button className="preview" onClick={() => setModalOpened(true)}>
                        Preview events
                    </button>
                </div>
            </div>
            {modalOpened ? <EventsModal close={() => setModalOpened(false)} conferenceId={id} /> : null}
        </>
    );
};
