import React, { Component } from 'react'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import ThunderBackground from './ThunderBackground/ThunderBackground'

export default class Home extends Component {
    render() {
        return (
            <>
                <LeftSide/>
                <RightSide/>
                <div className='ThunderBackground'>
                <ThunderBackground/>
                </div>
            </>
        )
    }
}
