import React from 'react'
import './Banner.css';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Nav from './Nav';


const Banner = () => {
    return (
        <div>
            <div className="banner">
            <Navbar/>
            <div className="title">
                <p style={{color:'red'}}>
                </p>
                {/* <Button style={{
                    color:'red',
                    background:"#5cfdfd",
                    width:'8rem',
                    height:'3rem',
                }}>
                   <Link to="/form">BOOK NOW</Link>
                </Button> */}
            </div>
            </div>
        </div>
    )
}

export default Banner;