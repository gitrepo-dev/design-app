import { cartData } from 'interfaces';
import Types from 'redux/types/cartTypes';


/***
 * get the cart
 * @param {''}
 * @return {'data'}
 * 
***/
export const onGetCartData = () => ({
    type: Types.GET_CART_DATA,
    payload: []
});


/***
 * add to cart
 * @param {'type, payload: {isLoading, Object}'}
 * @return {'null'}
 * 
***/
export const onAddToCart = (data: cartData) => ({
    type: Types.ADD_TO_CART,
    payload: {
        ...data
    }
});