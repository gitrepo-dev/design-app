// libs 
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// types
import Types from 'redux/types/productCustomizePropsTypes';
// actions
import { onProductCustomizePropsLoading } from 'redux/actions/productCustomizePropsActions';
// services
import {
   getProductCustomizePropsService
} from 'services/productCustomizePropsServices';
// reducers
import { setProductCustomizeProps } from 'redux/reducers/productCustomizePropsReducer';


/***
  * fetching
  * @param {''}
  * @return {'data/err'}
  * 
***/

function* fetchingProductCustomizeProps(): SagaIterator {
    try {
        yield put(onProductCustomizePropsLoading('Loading....', true));
        const data = yield call(getProductCustomizePropsService);
        yield put(setProductCustomizeProps(data));
        yield put(onProductCustomizePropsLoading('Loading....', false));
    } catch (e) {
        console.warn(e);
        yield put(onProductCustomizePropsLoading('Loading....', false));
    }
}

// exporting all sagas
const PRODUCTCUSTOMIZEPROPS_SAGAS = [
    takeLatest(Types.GET_PRODUCTCUSTOMIZEPROPS, fetchingProductCustomizeProps)
];
export default PRODUCTCUSTOMIZEPROPS_SAGAS;