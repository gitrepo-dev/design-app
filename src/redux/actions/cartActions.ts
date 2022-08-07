import { cartData } from 'interfaces';
import Types from 'redux/types/cartTypes';


/***
 * get the cart
 * @param {''}
 * @return {''}
 * 
***/
export const onGetCartData = () => ({
    type: Types.GET_CART_DATA,
    payload: []
});


/***
 * add to cart
 * @param {'type, payload: {Object}'}
 * @return {''}
 * 
***/
export const onAddToCart = (data: cartData) => ({
    type: Types.ADD_TO_CART,
    payload: {
        ...data
    }
});


/***
 * remove items from cart
 * @param {'type, payload: 'uuid'}
 * @return {''}
 * 
***/
export const onRemoveItemToCart = (uuid: string) => ({
    type: Types.REMOVE_ITEM_FROM_CART,
    payload: {
        uuid
    }
});