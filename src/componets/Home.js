import React from "react";
import Header from './Header';
import Banner from './Banner';
import Service from './Service'
import Footer from './Footer';
import Team from './Team';
import ContactPage from './ContactPage';


const Home = () => {
    
    return (
        <div>
            <Header  />
            <Banner />
            <Service />
            <Team/>
            <ContactPage/>
            <Footer/>
        </div>
    )
}

export default Home
