import React, { Component } from 'react'
import { Accordion} from 'semantic-ui-react'
import  classes from '../NewsPage/Accordeon.module.css'

export default class AccordionFriends extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion  styled className={classes.accordion}>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                    className={classes.ActiveTitle}
                >
                    <div className={classes.News}>News</div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0} className={classes.Content}>
                    <ul className={classes.Menu}>
                        <li>All friends</li>
                        <li>Search</li>
                        <li>Best friends</li>
                        <li>Black list</li>
                        <li>Friend requests</li>
                        <li>Recommendations</li>
                    </ul>
                </Accordion.Content>
                <div className={classes.Title}>Suggestions</div>
                <div className={classes.Title}>Search</div>
                <div className={classes.Title}>Updates</div>
                <div className={classes.Title}>Comments</div>
            </Accordion>
        )
    }
}