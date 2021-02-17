import React, {Component} from 'react'
import classes from './Auth.module.css'
import Input from './InputUi/input'
import is from 'is_js'
import {connect} from "react-redux";
import Dropdowns from "./Check-Drop/DropDown";
import DropDownMonth from "./Check-Drop/DropDownMonth";
import DropDownYear from "./Check-Drop/DropDownYear";
import Checkboxs from "./Check-Drop/radioButtons";
import {auth} from "../../redux/authAction";


class Auth extends Component {


    submitHandler = event => {
        event.preventDefault()
    }


    validateControl(value = this.props.value, validation = this.props.validation) {
        if (!validation) {
            return true
        }

        let isValid = true
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }




    validateRegisterControl(valueRegister = this.props.valueRegister, validationRegister = this.props.validationRegister) {
        if (!validationRegister) {
            return true
        }
        let isValidRegister = true
        if (validationRegister.required) {
            isValidRegister = valueRegister.trim() !== '' && isValidRegister
        }

        if (validationRegister.email) {
            isValidRegister = is.email(valueRegister) && isValidRegister
        }

        if (validationRegister.minLength) {
            isValidRegister = valueRegister.length >= validationRegister.minLength && isValidRegister
        }

        return isValidRegister
    }
    onChangeHandler = (event, controlName) => {
        const formControls = this.props.formControls
        const control = {...formControls[controlName]}
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(type => {
            isFormValid = this.props.formControls[type].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    onChangeRegisterHandler = (event, controlName) => {
        const formControls = this.props.formControlsRegister
        const control = {...formControls[controlName]}
        control.valueRegister = event.target.value
        control.touchedRegister = true
        control.validRegister = this.validateRegisterControl(control.valueRegister, control.validationRegister)

        formControls[controlName] = control

        let isFormValidRegister = true
        console.log('EMAIL REG IN:  ' + this.props.valueRegister)
        Object.keys(formControls).forEach(type => {
            isFormValidRegister = this.props.formControlsRegister[type].validRegister && isFormValidRegister
            // console.log('222' + isFormValidRegister)

        })

        this.setState({
            formControls, isFormValidRegister
        })
    }

    loginHandler = () => {
        this.props.auth(
            this.props.formControls.email.value,
            this.props.formControls.password.value,
            true
        )
    }
    registerHandler = () => {
        this.props.auth(
            this.props.formControlsRegister.email.valueRegister,
            this.props.formControlsRegister.password.valueRegister,
            false
        )

    }
    renderInputs() {
        return Object.keys(this.props.formControls).map((controlName, index) => {
            const control = this.props.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    placeholder={control.placeholder}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }
    renderRegisterInputs() {
        return Object.keys(this.props.formControlsRegister).map((controlName, index) => {
            const control = this.props.formControlsRegister[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.typeRegister}
                    value={control.valueRegister}
                    valid={control.validRegister}
                    touched={control.touchedRegister}
                    label={control.labelRegister}
                    shouldValidate={!!control.validationRegister}
                    errorMessage={control.errorMessageRegister}
                    onChange={event => this.onChangeRegisterHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div className={classes.Component}>
                    <div className={classes.Wrapper}>
                        <div className={classes.TitleLog}>Log In</div>
                        <div className={classes.SubTitleLog}>Log In into VK</div>
                        <form onSubmit={this.submitHandler} className={classes.Form}>

                            {this.renderInputs()}
                            {console.log()}
                            <div className={classes.FooterAuth}>
                                <button
                                    type='success'
                                    className={classes.Button}
                                    onClick={this.loginHandler}
                                >

                                    Log In
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className={classes.WrapperRegister}>
                        <div className={classes.Title}>
                            <div className={classes.MainTitle}>First time here?</div>
                            <div className={classes.Subtitle}>Sing up for VK</div>
                        </div>
                        <form
                            className={classes.Form}
                            onSubmit={this.submitHandler}
                        >


                            {this.renderRegisterInputs()}

                            <p>Select your birthday:</p>
                            <div className={classes.DropDowns}>
                                <Dropdowns/>
                                <DropDownMonth/>
                                <DropDownYear/>
                            </div>
                            <Checkboxs/>
                            <button
                                type='success'
                                className={classes.ButtonRegister}
                                onClick={this.registerHandler}
                            >
                                Registration
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        isFormValid: state.posts.inputLogin[0].isFormValid,
        formControls: state.posts.inputLogin[0].formControls,
        errorMessage: state.posts.inputLogin[0].formControls.email.errorMessage,
        validation: state.posts.inputLogin[0].formControls.email.validation,
        label: state.posts.inputLogin[0].formControls.email.label,
        touched: state.posts.inputLogin[0].formControls.email.touched,
        valid: state.posts.inputLogin[0].formControls.email.valid,
        value: state.posts.inputLogin[0].formControls.email.value,
        type: state.posts.inputLogin[0].formControls.email.type,
        AuthMail:state.posts.inputLogin[0].formControls.email.value,
        AuthPass:state.posts.inputLogin[0].formControls.password.value,


        isFormValidRegister: state.inputs.inputRegister[0].isFormValid,
        formControlsRegister: state.inputs.inputRegister[0].formControlsRegister,
        errorMessageRegister: state.inputs.inputRegister[0].formControlsRegister.name.errorMessageRegister,
        validationRegister: state.inputs.inputRegister[0].formControlsRegister.name.validationRegister,
        labelRegister: state.inputs.inputRegister[0].formControlsRegister.name.labelRegister,
        touchedRegister: state.inputs.inputRegister[0].formControlsRegister.name.touchedRegister,
        validRegister: state.inputs.inputRegister[0].formControlsRegister.name.validRegister,
        valueRegister: state.inputs.inputRegister[0].formControlsRegister.name.valueRegister,
        typeRegister: state.inputs.inputRegister[0].formControlsRegister.name.typeRegister,
        AuthRegMail:state.inputs.inputRegister[0].formControlsRegister.email.valueRegister,
        AuthRegPass:state.inputs.inputRegister[0].formControlsRegister.password.valueRegister,

    }
}

const  mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)
