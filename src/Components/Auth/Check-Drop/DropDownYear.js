import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import classes from './Drop.module.css'

const options = [
    { key: 1, text: '1999', value: 1 },
    { key: 2, text: '2000', value: 2 },
    { key: 3, text: '2001', value: 3 },
    { key: 4, text: '2002', value: 4 },
    { key: 5, text: '2003', value: 5 },
    { key: 6, text: '2004', value: 6 },
    { key: 7, text: '2005', value: 7 },
    { key: 8, text: '2006', value: 8 },
    { key: 9, text: '2007', value: 9 },
    { key: 10, text: '2008', value: 10 },
    { key: 11, text: '2009', value: 11 },
    { key: 12, text: '2010', value: 12 },
    { key: 13, text: '2011', value: 13 },
]

const Dropdowns = () => (
    <Dropdown clearable placeholder='Year' options={options} selection className={classes.DropDownYear}/>
)

export default Dropdowns