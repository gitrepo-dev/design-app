import Types from 'redux/types/userType'

/***
 * loading
 * @param {'boolean'}
 * @return {'false'}
 * 
***/
export const onUserLoading = (data: string, status: boolean) => ({
    type: Types.USER_LOADING,
    payload: {
        data,
        status,
    }
});


/***
 * get the all users
 * @param {''}
 * @return {'data'}
 * 
***/
export const onGetAllUsers = () => ({
    type: Types.GET_ALL_USERS,
    payload: []
});


/***
 * get spacific user by id
 * @param {'id'}
 * @return {'data'}
 * 
***/
export const onGetUser = (id: string) => ({
    type: Types.GET_USER,
    payload: []
});


/***
 * update spacific user by id
 * @param {'id'}
 * @return {'data'}
 * 
***/
export const onUpdateUser = (id: string) => ({
    type: Types.GET_ALL_USERS,
    payload: []
});


/***
 * delete spacific user by id
 * @param {'id'}
 * @return {'data'}
 * 
***/
export const onDeleteUser = (id: string) => ({
    type: Types.GET_ALL_USERS,
    payload: []
});