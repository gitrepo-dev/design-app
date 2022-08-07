import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
// reducers
import userReducer from 'redux/reducers/userReducer';
import cartReducer from 'redux/reducers/cartReducer';
import productCustomizePropsReducer from 'redux/reducers/productReducer';
// sagas
import userSaga from 'redux/sagas/userSaga';
import cartSaga from 'redux/sagas/cartSaga';
import productSaga from 'redux/sagas/productSaga';
// reducers
const reducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    product: productCustomizePropsReducer
});

//Add Sagas
function* rootSaga() {
    yield all([
        ...userSaga,
        ...cartSaga,
        ...productSaga
    ]);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;