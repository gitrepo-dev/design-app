
/**
 * get all users
 * @param {''}
 * @returns {data}
 */
export const getAllusers = async (): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_USER_API}`);
        return await res.json()
    } catch (e) {
        throw e
    }
};


/**
 * get spacific user
 * @param {'id'}
 * @returns {data}
 */
export const getUser = async (id: string | number): Promise<object> => {
    try {
        return await fetch(`${process.env.REACT_APP_USER_API}/${id}`);
    } catch (e) {
        throw e
    }
};


/**
 * update spacific user
 * @param {'id'}
 * @returns {data}
 */
export const updateUser = async (id: string | number): Promise<object> => {
    try {
        return await fetch(`${process.env.REACT_APP_USER_API}/${id}`);
    } catch (e) {
        throw e
    }
};


/**
 * delete spacific user
 * @param {'id'}
 * @returns {data}
 */
export const deleteUser = async (id: string | number): Promise<object> => {
    try {
        return await fetch(`${process.env.REACT_APP_USER_API}/${id}`);
    } catch (e) {
        throw e
    }
};