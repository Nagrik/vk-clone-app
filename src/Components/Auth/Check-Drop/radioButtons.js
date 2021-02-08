import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import classes from './Drop.module.css'

export default class Checkboxs extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Form>
                <div className={classes.RadioTitle}>Your gender:</div>
                <div className={classes.CheckBox}>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Male'
                            name='checkboxRadioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Female'
                            name='checkboxRadioGroup'
                            value='that'
                            checked={this.state.value === 'that'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                </div>
            </Form>

        )
    }
}