import {CREATE_INPUT_REGISTER, SEND_MESSAGE} from "./types";

const initialState = {
    isFormValidRegister:false,
    inputRegister:[
        {
            formControlsRegister:{
                name: {
                    valueRegister: '',
                    typeRegister: 'text',
                    labelRegister: 'Name',
                    placeholder: 'UserName',
                    errorMessageRegister: 'Minimum length 2 characters',
                    validRegister: false,
                    touchedRegister: false,
                    validationRegister: {
                        required: true,
                        minLength: 2
                    }
                },
                surname: {
                    valueRegister: '',
                    typeRegister: 'text',
                    labelRegister: 'Surname',
                    placeholder: 'UserSurName',
                    errorMessageRegister: 'Minimum length 2 characters',
                    validRegister: false,
                    touchedRegister: false,
                    validationRegister: {
                        required: true,
                        minLength: 2
                    }
                }  ,
                email: {
                    valueRegister:'',
                    typeRegister: 'email',
                    labelRegister: 'Email',
                    errorMessageRegister:'Enter correct email',
                    validRegister:false,
                    touchedRegister:false,
                    placeholder:'Email',
                    validationRegister:{
                        required:true,
                        email:true
                    }
                },
                password: {
                    valueRegister:'',
                    typeRegister: 'password',
                    labelRegister: 'Password',
                    placeholder:'Email',
                    errorMessageRegister:'Minimum password length 6 characters',
                    validRegister:false,
                    touchedRegister:false,
                    validationRegister:{
                        required:true,
                        minLength:6
                    }
                }

            }
        }
    ]
}

export const InputReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_INPUT_REGISTER:
            return {...state,inputRegister: state.inputRegister.concat([action.payload])}
            default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type:SEND_MESSAGE, newMessageBody})