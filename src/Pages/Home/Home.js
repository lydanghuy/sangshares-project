import React from 'react'
import Footer from '../../components/Layout/Footer/Footer'
import Header from '../../components/Layout/Header/Header'
import HomeContainer from '../../components/Layout/HomeContainer/HomeContainer'
import './Home.css'

export default function Home() {
    return (
        <div className="en-lang" lang="en">
            <div className="main-content">
                <Header/>

                <HomeContainer/>
                <Footer/>
            </div>
        </div>
    )
}
