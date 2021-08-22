import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Layout/Footer/Footer'
import Header from '../../components/Layout/Header/Header'
import './Blog.css'

export default function Blog(props) {
    return (
        <div>
            <Header/>
            <Link to='/post/1'>Post 1</Link>
            <Footer/>
        </div>
    )
}
