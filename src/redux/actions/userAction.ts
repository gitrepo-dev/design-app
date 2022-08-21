import { users } from 'interfaces/user';
import Types from 'redux/types/userType'

/***
 * user registration
 * @param {'uuid, email, name, password'}
 * @return {''}
 * 
***/
export const onUserRegistration = (data: users) => ({
    type: Types.USER_REGISTRATION,
    payload: data
});


/***
 * login user
 * @param {'email, password'}
 * @return {''}
 * 
***/
export const onLoginUser = (data: users) => ({
    type: Types.USER_LOGIN,
    payload: data
});


/***
 * get user credentials
 * @param {''}
 * @return {''}
 * 
***/
export const onGetUserCredentials = () => ({
    type: Types.GET_USER_CREDENTIALS,
    payload: {}
});


/***
 * billing details
 * @param {'email'}
 * @return {''}
 * 
***/
export const userBillingDetails = (data: {
    email: string,
    billingDetails: {
        card_number: string,
        cvc: string,
        phone: string,
        address: string
    }
}) => ({
    type: Types.BILLING_DETAILS,
    payload: data
});