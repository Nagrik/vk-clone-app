import React, {Component} from 'react'
import InputActive from "./InputActive";

export default class Input extends Component {


    state = {
        active: true
    }

    onActive = () => {
        this.setState(() => ({
            active: true
        }))
    }


    onBlur = () => {
        this.setState(() => ({
            active: false
        }))
    }

    render() {

        return (
            <div>
                <InputActive/>
            </div>
        )

    }
}

