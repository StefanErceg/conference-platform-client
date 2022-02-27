import React, { FC, useEffect, useState } from 'react';
import api from '../../api';
import { Conference } from '../../types';
import { ConferenceItem } from './components/ConferenceItem';

export const Conferences: FC = () => {
    const [conferences, setConferences] = useState<Conference[]>([]);

    useEffect(() => {
        (async () => {
            const conferences = await api.conferences.getAll();
            setConferences(conferences);
        })();
    }, []);

    return (
        <div className="page_wrap">
            <div className="title">
                <span>Upcoming conferences</span>
            </div>
            <div className="conferences_wrap">
                {conferences?.map((conference, index) => (
                    <ConferenceItem key={index} conference={conference} />
                ))}
            </div>
        </div>
    );
};
