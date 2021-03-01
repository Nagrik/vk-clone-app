import {authLogin} from "./authAction";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

const initialState = {
    initialized: false
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
            default:
            return state
    }
}

export const initializedSuccess = () => ({type:SET_INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(authLogin())
   dispatch(initializedSuccess())

    promise.then = (() => {
        dispatch(initializedSuccess())
    })
}

export default AppReducer
