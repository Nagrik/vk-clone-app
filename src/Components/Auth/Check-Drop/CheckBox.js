import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import classes from '../Auth.module.css'

const CheckboxExampleCheckbox = () => (
    <Checkbox label="Don't remember me"
              className={classes.CheckBox}
    />
)

export default CheckboxExampleCheckbox