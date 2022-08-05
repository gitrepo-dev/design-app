
import { cartData } from 'interfaces'

/**
 * get cart
 * @param {''}
 * @returns {null}
 */

export const getCartDataService = async (): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_USER_API}/cart/products`);
        return await res.json()
    } catch (e) {
        throw e
    }

};


/**
 * add to cart
 * @param {'object'}
 * @returns {'{message, success}'}
 */

export const addToCartService = async (data: cartData): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_USER_API}/cart/add`, {
            method: 'POST',
            body: JSON.stringify({ ...data }),
        });
        return await res.json()
    } catch (e) {
        throw e
    }

};