export interface CommutingModel {
    responseData: ResponseData;
}

interface ResponseData {
    metros: Metro[]
}

export interface Metro {
    displayTime: string;
    lineNumber: string;
    destination: string;
    stopAreaName: string;
}

export enum ColorEnum {
    GREEN = 'green',
    RED = 'red',
    BLUE = 'blue'
}