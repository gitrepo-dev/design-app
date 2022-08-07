// libs
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import Types from 'redux/types/userType'
// actions
import {
    onUserLoading,
    // onGetAllUsers,
    // onGetUser,
    // onDeleteUser,
    // onUpdateUser
} from '../actions/userAction'
// services
import {
    getAllusers,
    getUser,
    updateUser,
    deleteUser
} from '../../services/userServices'
// import { userAction } from '../types/user';
import { setUser } from 'redux/reducers/userReducer';



// fetching all users
function* fetchingAllUsers(): SagaIterator {
    try {
        yield put(onUserLoading('loading....', true));
        const data = yield call(getAllusers);
        yield put(setUser(data));
        yield put(onUserLoading('loading....', false));
    } catch (e) {
        console.warn(e);
        yield put(onUserLoading('loading....', false));
    }
}


// fetch spacific users
function* fetchingUser(action: any): SagaIterator {
    const { payload } = action;
    try {
        yield put(onUserLoading('loading....', true));
        const res = yield call(getUser, payload.id);
        yield put(onUserLoading('loading....', false));
        console.log(res)
    } catch (e) {
        console.warn(e);
        yield put(onUserLoading('loading....', false));
    }
}


// deletong users
function* deletingUser(action: any): SagaIterator {
    const { payload } = action;
    try {
        yield put(onUserLoading('loading....', true));
        const res = yield call(deleteUser, payload.id);
        yield put(onUserLoading('loading....', false));
        console.log(res)
    } catch (e) {
        console.warn(e);
        yield put(onUserLoading('loading....', false));
    }
}


// updating users
function* updatingUser(action: any): SagaIterator {
    const { payload } = action;
    try {
        yield put(onUserLoading('loading....', true));
        const res = yield call(updateUser, payload.id);
        yield put(onUserLoading('loading....', false));
        console.log(res)
    } catch (e) {
        console.warn(e);
        yield put(onUserLoading('loading....', false));
    }
}

// exporting all sagas
const USER_SAGAS = [
    takeLatest(Types.GET_ALL_USERS, fetchingAllUsers),
    takeLatest(Types.GET_USER, fetchingUser),
    takeLatest(Types.UPDATE_USER, updatingUser),
    takeLatest(Types.DELETE_USER, deletingUser),
];
export default USER_SAGAS;