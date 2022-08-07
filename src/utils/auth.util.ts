import { authType } from "interfaces/auth";

/**
 * authantication
 * @param {'uuid, username, password, token'}
 * @returns {data}
 */
export const auth = async ({
    id,
    uuid,
    username,
    password,
    token,
}: authType): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_USER_API}/${id}`);
        return res.json();
    } catch (e) {
        throw e
    }
};