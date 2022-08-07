// @ product typescripts
export type productData = {
    uuid: string;
    color: string,
    caption_color: string,
    caption: string,
    caption_position_x: string,
    caption_position_y: string,
    size: number,
    price: number
};

export interface productStateType {
    defaultStates: {
        isLoading: boolean;
        message: string;
        success: boolean;
    },
    data: productData[] | productData
};

export interface productActionType {
    type: string;
    payload: productData;
};