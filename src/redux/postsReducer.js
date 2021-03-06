import {CREATE_COMMENT, CREATE_INPUT, CREATE_POST, SEND_MESSAGE} from "./types";

const initialState = {
    posts:[],
    fetchedPosts:[],
    comments:[],
    messages:[],
    inputLogin:[
         {
            isFormValid:false,
            formControls:{
                email:{
                    value:'',
                    type: 'email',
                    label: 'Email',
                    errorMessage:'Enter correct email',
                    valid:false,
                    touched:false,
                    placeholder:'Email',
                    validation:{
                        required:true,
                        email:true
                    }
                },
                password: {
                    value:'',
                    type: 'password',
                    label: 'Password',
                    placeholder:'Email',
                    errorMessage:'Minimum length 6 characters',
                    valid:false,
                    touched:false,
                    validation:{
                        required:true,
                        minLength:6
                    }
                },
            }
        }
    ],
}

export const postsReducer = (state = initialState, action) =>{
    switch (action.type){
        case CREATE_POST:
            return {...state,posts:state.posts.concat([action.payload])}
        case CREATE_COMMENT:
            return {...state,comments: state.comments.concat([action.payload])}
        case CREATE_INPUT:
            return {...state,inputRegister: state.inputRegister.concat([action.payload])}
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:Math.random(), message:body}]
            }
            default:return state
    }
}



