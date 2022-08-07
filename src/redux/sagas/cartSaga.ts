// libs 
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// types
import Types from 'redux/types/cartTypes';
import {
    addToCartService,
    getCartDataService,
    removeItemFromCartService
} from 'services/cartServices';
// reducers
import { setCartData, setCartStates } from 'redux/reducers/cartReducer';
import { cartActionType } from 'interfaces/cart';
import { onGetCartData } from 'redux/actions/cartActions';

/***
  * fetching
  * @param {''}
  * @return {'data/err'}
  * 
***/

function* fetchingCartData(): SagaIterator {
    try {
        yield put(setCartStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(getCartDataService);
        yield put(setCartData(data));
        yield put(setCartStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        console.warn(e);
        yield put(setCartStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

/***
  * add to cart
  * @param {'data'}
  * @return {'{message, success}'}
  * 
***/

function* addingToCart(action: cartActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setCartStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(addToCartService, payload);
        yield put(setCartData(data));
        if (data.success) yield put(onGetCartData());
        yield put(setCartStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        console.warn(e);
        yield put(setCartStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

/***
  * remove item from cart
  * @param {'data'}
  * @return {'{message, success}'}
  * 
***/

function* removingItemFromCart(action: cartActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setCartStates({
            isLoading: true,
            message: '',
            success: false
        }));
        // @ts-ignore
        const data = yield call(removeItemFromCartService, payload.uuid);
        yield put(setCartData(data));
        if (data.success) yield put(onGetCartData());
        yield put(setCartStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        console.warn(e);
        yield put(setCartStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

// exporting all sagas
const CART_SAGAS = [
    takeLatest(Types.GET_CART_DATA, fetchingCartData),
    takeLatest(Types.ADD_TO_CART, addingToCart),
    takeLatest(Types.REMOVE_ITEM_FROM_CART, removingItemFromCart)
];
export default CART_SAGAS;