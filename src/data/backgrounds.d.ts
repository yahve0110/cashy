export type BackgroundStatus = "buy" | "owned" | "locked" | "selected";
export type BackgroundItem = {
    id: string;
    name: string;
    image: string;
    status: BackgroundStatus;
    price?: number;
    note?: string;
};
export declare const backgroundData: BackgroundItem[];
