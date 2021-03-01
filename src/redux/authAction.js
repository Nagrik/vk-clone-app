import axios from "axios";
import {AUTH_LOGOUT, AUTH_SUCCESS, LOGIN} from "./types";



export const auth = (email, password, isLogin) => {
    return async (dispatch) => {
        const url = isLogin
            ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU8gNE0fGG8z9zqUyh68Inw9_RzljhCCs'
            : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU8gNE0fGG8z9zqUyh68Inw9_RzljhCCs'
        const response = await axios.post(url, {
            email,
            password,
            returnSecureToken:true
        })
         dispatch({
            type:LOGIN,
            payload:response.data
        })
         const data = response.data

        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(authLogout(data.expiresIn))
    }
}

export function authLogout(time){
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return{
        type: AUTH_LOGOUT
    }
}

export function authLogin(){
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
    } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()){
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(authLogout((expirationDate.getTime() - new Date().getTime()) /1000))
            }
    }
    }
}

export function authSuccess(token){
    return{
        type: AUTH_SUCCESS,
        token
    }
}

