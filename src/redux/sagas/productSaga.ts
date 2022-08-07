// libs 
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// types
import Types from 'redux/types/productTypes';
// services
import {
    productPurchasedHistoryService,
    productPurchaseService
} from 'services/productServices';
// reducers
import { setProductData, setProductStates } from 'redux/reducers/productReducer';
import { productActionType } from 'interfaces';
import { setCartStates } from 'redux/reducers/cartReducer';

/***
  * purchasing Product
  * @param {'Object'}
  * @return {'data/err'}
  * 
***/

function* purchasingProduct(action: productActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setProductStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(productPurchaseService, payload);
        yield put(setProductData(data));
        yield put(setProductStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
        yield put(setCartStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }))
    } catch (e) {
        console.warn(e);
        yield put(setProductStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

/***
  * fatching Product history
  * @param {''}
  * @return {'data/err'}
  * 
***/

function* fatchingProductHistory(action: productActionType): SagaIterator {
    try {
        yield put(setProductStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(productPurchasedHistoryService);
        yield put(setProductData(data));
        yield put(setProductStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        console.warn(e);
        yield put(setProductStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}


/***
  * checkout
  * @param {''}
  * @return {'data/err'}
  * 
***/

function* checkingoutProduct(action: productActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setProductStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(productPurchaseService, payload);
        yield put(setProductData(data));
        yield put(setProductStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
        yield put(setCartStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }))
    } catch (e) {
        console.warn(e);
        yield put(setProductStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}

// exporting all sagas
const PRODUCTCUSTOMIZEPROPS_SAGAS = [
    takeLatest(Types.PURCHASE_PRODUCT, purchasingProduct),
    takeLatest(Types.PURCHASE_PRODUCT_HISTORY, fatchingProductHistory),
    takeLatest(Types.CHECKOUT_PRODUCT, checkingoutProduct)
];
export default PRODUCTCUSTOMIZEPROPS_SAGAS;