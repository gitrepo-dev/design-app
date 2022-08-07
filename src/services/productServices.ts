import { productData } from 'interfaces'

/**
 * purchase product
 * @param {'object'}
 * @returns {'promise'}
 */

 export const productPurchaseService = async (data: productData): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_USER_API}/product/purchase`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return await res.json()
    } catch (e) {
        throw e
    }

};


/**
 * purchase history
 * @param {''}
 * @returns {'promise'}
 */

 export const productPurchasedHistoryService = async (): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_USER_API}/purchased/history`);
        return await res.json()
    } catch (e) {
        throw e
    }

};