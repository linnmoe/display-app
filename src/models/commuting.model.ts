export interface CommutingModel {
    ResponseData: ResponseData;
}

interface ResponseData {
    Metros: Metro[]
}

export interface Metro {
    DisplayTime: string;
    LineNumber: string;
    Destination: string;
}

export enum ColorEnum {
    GREEN = 'green',
    RED = 'red',
    BLUE = 'blue'
}