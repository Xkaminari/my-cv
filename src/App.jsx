import React from 'react'
import { Route, Routes } from 'react-router'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'


export default function App() {
    return (
        <>
        {/* <Home/> */}
    {/* Defines routes */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/ContactMe" element={<ContactMe/>}/>
        </Routes>
        </>
    )
}
