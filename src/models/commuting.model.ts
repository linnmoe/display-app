export interface CommutingResponse {
    departures: DepartureResponse[];
}

export interface DepartureResponse {
    destination: string;
    display: string;
    line: LineResponse;
}

interface LineResponse {
    designation: string;
}