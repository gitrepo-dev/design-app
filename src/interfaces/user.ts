export type userInfos = {
    id: string | number;
    name: string,
    email: string
}

export interface userInterface {
    data: userInfos[]
}

export interface userAction {
    type: string;
    payload: userInfos[];
}