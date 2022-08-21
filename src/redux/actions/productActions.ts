import Types from 'redux/types/productTypes';
import { productData } from 'interfaces';

/***
  * loading
  * @param {'string, boolean'}
  * 
***/
export const onProductCustomizePropsLoading = (data: string, status: boolean) => ({
    type: Types.PRODUCTCUSTOMIZEPROPS_LOADING,
    payload: {
        data,
        status
    }
});

/***
 * get the productCustomizeProps
 * @param {''}
 * 
***/
export const onGetProductCustomizeProps = () => ({
    type: Types.GET_PRODUCTCUSTOMIZEPROPS,
    payload: []
});


/***
 * purchase product
 * @param {'type, payload: {Object}'}
 * 
***/

interface BllingData {
    address: string;
    card_number: string;
    cvc: string;
    phone: string;
}
export const onProductPurchase = (data: { 
    product: productData,
    billingAddress: BllingData
}) => {
    return {
        type: Types.PURCHASE_PRODUCT,
        payload: {
            ...data
        }
    }
};


/***
 * purchase history
 * @param {''}
 * 
***/
export const onProductPurchasedHistory = () => ({
    type: Types.PURCHASE_PRODUCT_HISTORY,
    payload: []
});



/***
 * checkout
 * @param {'[object]'}
 * 
***/
export const onCheckout = (data: productData[]) => ({
    type: Types.CHECKOUT_PRODUCT,
    payload: data
});


/***
 * clear purchase history
 * @param {'[object]'}
 * 
***/
export const onClearHistory = (data: productData[]) => ({
    type: Types.CLEAR_PURCHANGE_HISTORY,
    payload: data
});