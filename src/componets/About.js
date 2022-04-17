import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css'


const About = () => {
    return (
        <>
        <div className='about'>
            <Header/>
            <Navbar/>
            <div className='text-center m-4'>
            <h1 className=' tag text-5xl font-bold m-4 my-8'>WHO WE ARE</h1>
            <h2 className='ss text-3xl font-bold m-4 text-red-700 my-8'>  Cleannation.In <spam style={{color:"black"}}>(Clean-Nation)</spam> Company Is A Professional All Service<br></br> Provide In All Over India 
            With low Cost . The Customer <br></br>Is The King And We Are The Servant</h2>
           
           <p className='text-5xl font-bold m-4 my-8'> <spam style={{color:"blue"}}>OUR NEW SERVICE</spam></p>
            

            <p className=' soon text-2xl font-bold m-4 my-8'>Coming Soon Services</p>

           <p className='text-2xl font-bold m-4 my-8'> Thank You</p>

            </div>
            
        </div>
        <Footer/>
        
        </>
    )
}

export default About
