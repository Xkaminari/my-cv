import React, { Component } from 'react'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'

export default class Home extends Component {
    render() {
        return (
            <section className='Home'>
                <div className='ThunderBackground'>
                </div>
                <LeftSide/>
                <RightSide/>
            </section>
        )
    }
}
