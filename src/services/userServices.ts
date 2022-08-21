//  all user services

/**
 * user login
 * @param {'email, password, uuid'}
 * @returns {promise}
 */
export const loginUserServices = async (data: any): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/user/login`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};


/**
 * signup user
 * @param {'email, password, uuid, name'}
 * @returns {promise}
 */
export const registrationUserServices = async (data: any): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/user/registration`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};


/**
 * billing address
 * @param {'object'}
 * @returns {promise}
 */
export const billingDetailsServices = async (data: any): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/user/billing/details`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};