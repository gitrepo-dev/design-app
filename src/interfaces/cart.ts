
export type cartData = {
    color: string,
    caption_color: string,
    caption: string,
    caption_position_x: string,
    caption_position_y: string,
    size: number
};

export interface cartStateType {
    isLoading: boolean,
    data: cartData[]
};

export interface cartActionType {
    type: string;
    payload: cartData
};