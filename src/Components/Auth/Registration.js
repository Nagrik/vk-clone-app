import React from 'react'
import classes from './Check-Drop/Drop.module.css'
import Dropdowns from "./Check-Drop/DropDown";
import DropDownMonth from "./Check-Drop/DropDownMonth";
import DropDownYear from "./Check-Drop/DropDownYear";
import Checkboxs from "./Check-Drop/radioButtons";
import Input from "./InputUi/input";
import {connect} from "react-redux";


function Registration() {
    const registerHandler = () => {

    }


   const submitHandler = (e) => {
        e.preventDefault()
    }

    const onChangeHandler = (event, controlName) => {
        debugger
        const formControls = this.props.formControls
        const control = { ...formControls[controlName] }
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


  const renderInputs = () => {
        debugger
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
                    onChange={event => onChangeHandler(event, controlName)}
                />
            )
        })
    }



    return (
        <div className={classes.Registration}>
            <div className={classes.Wrapper}>
                <div className={classes.Title}>
                    <div className={classes.MainTitle}>Firs time here?</div>
                    <div className={classes.Subtitle}>Sing up for VK</div>
                </div>
                <form
                    className={classes.Form}
                    onSubmit={submitHandler}
                >


                    {renderInputs()}


                    <p>Select your birthday:</p>
                    <div className={classes.DropDowns}>
                        <Dropdowns/>
                        <DropDownMonth/>
                        <DropDownYear/>
                    </div>
                    <Checkboxs/>
                    <button
                        type='success'
                        className={classes.Button}
                        onClick={registerHandler}
                    >
                        Registration
                    </button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.inputs.inputRegister[0].formControls)
    return{
        isFormValid:state.inputs.inputRegister[0].isFormValid,
        formControls:state.inputs.inputRegister[0].formControls,
        errorMessage:state.inputs.inputRegister[0].formControls.email.errorMessage,
        validation:state.inputs.inputRegister[0].formControls.email.validation,
        label:state.inputs.inputRegister[0].formControls.email.label,
        touched:state.inputs.inputRegister[0].formControls.email.touched,
        valid:state.inputs.inputRegister[0].formControls.email.valid,
        value:state.inputs.inputRegister[0].formControls.email.value,
        type:state.inputs.inputRegister[0].formControls.email.type,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Registration)