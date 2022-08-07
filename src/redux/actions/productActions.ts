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
export const onProductPurchase = (data: productData) => ({
    type: Types.PURCHASE_PRODUCT,
    payload: {
        ...data
    }
});


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