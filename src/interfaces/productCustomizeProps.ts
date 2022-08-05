
export type productCustomizePropsData = {
    data: string;
};

export interface productCustomizeType {
    data: {
        color: string,
        caption: string,
        size: number
    }
};

export interface productCustomizePropsActionType {
    type: string;
    payload: {
        color: string,
        caption: string,
        size: number
    };
};
