// libs 
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// types
import Types from 'redux/types/cartTypes';
import {
    addToCartService,
    getCartDataService
} from 'services/cartServices';
// reducers
import { setCartData, setCartDataLoader } from 'redux/reducers/cartReducer';
import { cartActionType } from 'interfaces/cart';


/***
  * fetching
  * @param {''}
  * @return {'data/err'}
  * 
***/

function* fetchingCartData(): SagaIterator {
    try {
        yield put(setCartDataLoader(true));
        const data = yield call(getCartDataService);
        yield put(setCartData(data));
        yield put(setCartDataLoader(false));
    } catch (e) {
        console.warn(e);
        yield put(setCartDataLoader(false));
    }
}

function* addingToCart(action: cartActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setCartDataLoader(true));
        const data = yield call(addToCartService, payload);
        yield put(setCartData(data));
        yield put(setCartDataLoader(false));
    } catch (e) {
        console.warn(e);
        yield put(setCartDataLoader(false));
    }
}

// exporting all sagas
const CART_SAGAS = [
    takeLatest(Types.GET_CART_DATA, fetchingCartData),
    takeLatest(Types.ADD_TO_CART, addingToCart)
];
export default CART_SAGAS;