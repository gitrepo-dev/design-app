import { productData } from 'interfaces'

/**
 * purchase product
 * @param {'object'}
 * @returns {'promise'}
 */

export const productPurchaseService = async (data: productData): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/product/purchase`, {
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
 * purchase history
 * @param {''}
 * @returns {'promise'}
 */

export const productPurchasedHistoryService = async (): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/purchased/history`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
        });
        return await res.json()
    } catch (e) {
        throw e
    }

};


/**
 * clear purchase history
 * @param {[object]}
 * @returns {'promise'}
 */

 export const clearPurchasingHistoryService = async (data: any): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/delete/history`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(data)
        });
        return await res.json()
    } catch (e) {
        throw e
    }

};