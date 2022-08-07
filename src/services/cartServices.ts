
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
 * @returns {'promise'}
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


/**
 * remove item from cart
 * @param {'uuid'}
 * @returns {'promise'}
 */

 export const removeItemFromCartService = async (uuid: string): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_USER_API}/cart/remove/${uuid}`, {
            method: 'DELETE',
        });
        return await res.json()
    } catch (e) {
        throw e
    }

};