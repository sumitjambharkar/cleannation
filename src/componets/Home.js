import React from "react";
import Header from './Header';
import Banner from './Banner';
import Service from './Service'
import Footer from './Footer';
import Team from './Team';
import ContactPage from './ContactPage';
import Navbar from './Navbar';


const Home = () => {
    
    return (
        <div>
            <Header  />
            <Navbar/>
            <Banner />
            <Service />
            <Team/>
            <ContactPage/>
            <Footer/>
        </div>
    )
}

export default Home
