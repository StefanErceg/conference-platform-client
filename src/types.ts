export interface Conference {
    id: number;
    name: string;
    start: string;
    end: string;
    description: string;
    ratingSchema: RatingSchema;
}

export interface RatingSchema {
    id: number;
    name: string;
    properties: RatingProperty[];
}

export interface RatingProperty {
    id: number;
    name: string;
    description: string;
    rangeStart: number;
    rangeEnd: number;
}

export interface Event {
    name: string;
    start: string;
    end: string;
    location: Location;
    eventTypeName: string;
}

export interface Location {
    id: number;
    name: string;
    active: boolean;
    address: string;
    room: string;
    city: City;
    locationTypeName: string;
}

export interface City {
    id: number;
    name: string;
    countryName: string;
}
