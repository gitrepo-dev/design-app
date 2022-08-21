// libs 
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import toast from 'modules/toast';
// types
import Types from 'redux/types/productTypes';
// services
import {
    productPurchasedHistoryService,
    productPurchaseService,
    clearPurchasingHistoryService
} from 'services/productServices';
// reducers
import { setProductData, setProductStates } from 'redux/reducers/productReducer';
import { productActionType } from 'interfaces';
import { setCartData, setCartStates } from 'redux/reducers/cartReducer';
import { onGetCartData } from 'redux/actions/cartActions';

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
        if (data.success) {
            yield put(setProductData(data));
            toast.success(data.message)
        } else toast.error(data.message)
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
        toast.error('Network error')
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

function* fatchingProductHistory(): SagaIterator {
    try {
        yield put(setProductStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(productPurchasedHistoryService);
        if (data.success) {
            yield put(setProductData(data));
            toast.success(data.message)
        } else toast.error(data.message)
        yield put(setProductStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        toast.error('Network error')
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
        if (data.success) {
            yield put(setCartData(data));
            yield put(onGetCartData());
            toast.success(data.message)
        } else toast.error(data.message)
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
        toast.error('Network error')
        console.warn(e);
        yield put(setProductStates({
            isLoading: false,
            message: `client side error ${e}`,
            success: false
        }));
    }
}


/***
  * clear purchasing history
  * @param {'[object]'}
  * @return {'data/err'}
  * 
***/

function* clearPurchasingHistory(action: productActionType): SagaIterator {
    const { payload } = action;
    try {
        yield put(setProductStates({
            isLoading: true,
            message: '',
            success: false
        }));
        const data = yield call(clearPurchasingHistoryService, payload);
        if (data.success) {
            yield put(setProductData(data));
            toast.success(data.message);
        } else toast.error(data.message)
        yield put(setProductStates({
            isLoading: false,
            message: data.message,
            success: data.success
        }));
    } catch (e) {
        toast.error('Network error')
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
    takeLatest(Types.CHECKOUT_PRODUCT, checkingoutProduct),
    takeLatest(Types.CLEAR_PURCHANGE_HISTORY, clearPurchasingHistory)
];
export default PRODUCTCUSTOMIZEPROPS_SAGAS;