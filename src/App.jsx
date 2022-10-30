import React from 'react'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import ThunderBackground from './ThunderBackground/ThunderBackground'

export default function App() {
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
