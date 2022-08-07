
export type cartData = {
    uuid: string;
    color: string,
    caption_color: string,
    caption: string,
    caption_position_x: string,
    caption_position_y: string,
    size: number,
    price: number
};

export interface cartStateType {
    defaultStates: {
        isLoading: boolean;
        message: string;
        success: boolean;
    },
    data: cartData[] | cartData
};

export interface cartActionType {
    type: string;
    payload: cartData
};