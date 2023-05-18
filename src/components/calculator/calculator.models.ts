export type Unit = "metric" | "imperial";

export interface Measurement {
    height: {
        feet?: number;
        inches?: number;
        centimeters?: number;
    };
    weight: number;
}

export interface Result {
    value: number;
    message: string;
}