import React, {Component} from 'react'
import classes from './Auth.module.css'
import CheckboxExampleCheckbox from "./Check-Drop/CheckBox";
import Registration from "./Check-Drop/Registration";
import Input from './InputUi/input'
import is from 'is_js'

export default class Auth extends Component{

    state = {
        formControls:{
            email:{
              value:'',
              type: 'email',
              label: 'Email',
              errorMessage:'Enter correct email',
              valid:false,
              touched:false,
              validation:{
                  required:true,
                  email:true
              }
            },
            password: {
                value:'',
                type: 'password',
                label: 'Password',
                errorMessage:'Enter correct password',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    minLength:6
                }
            },
        }
    }
    loginHandler = () => {

    }


    submitHandler = (e) => {
        e.preventDefault()
    }

    validateControl(value, validation) {
        if(!validation){
            return true
        }

        let isValid = true

        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }

        if(validation.email){
            isValid = is.email(value) && isValid
        }

        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}:`,event.target.value)

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls
        })
    }

    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return(
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event,controlName)}
                />
            )
        })
    }

    render(){

        return(
            <div className={classes.Auth}>
                <h1 className={classes.Title}>Log in</h1>
                <div className={classes.Wrapper}>
                    <form onSubmit={this.submitHandler} className={classes.Form}>

                        { this.renderInputs() }

                        <div className={classes.FooterAuth}>
                            <button
                                type='success'
                                className={classes.Button}
                                onClick={this.loginHandler}>
                                Log In
                            </button>
                            <CheckboxExampleCheckbox className={classes.CheckBox}/>
                        </div>

                    </form>
                </div>
                <Registration/>
            </div>
        )
    }
}