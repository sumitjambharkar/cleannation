// import React,{useState} from 'react';
// import {Link} from "react-router-dom";
// import './Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Navbar = () => {
//     const [isMobile, setIsMobile] = useState(false)
    
//     return (
//         <div>
//             <nav className="navbar">
//                 <ul onClick={()=>setIsMobile(false)} className={isMobile? "mobile_nav" : "nav"}>
//                     <li className="btn active">
//                     <Link className="active" to="/">HOME</Link>
//                     </li>
//                     <li className="btn">
//                     <Link className="mobile_menu" to="/about">ABOUT</Link>
//                     </li>
//                     <li className="btn">
//                     <Link to="/service">SERVICE</Link>
//                     </li>
//                     <li className="btn">
//                     <Link to="/gallery">OFFER</Link>
//                     </li>
//                     <li className="btn">
//                     <Link to="/pages">PAGES</Link>
//                     </li>
//                     <li className="btn">
//                     <Link to="/contact">CONTACT</Link>
//                     </li>
//                 </ul>
//                 <button onClick={()=>setIsMobile(!isMobile)} className="mobile_menu_icon">
//                        { isMobile ? ( <CloseIcon style={{
//                     color:'white',
//                     width:'8rem',
//                     height:'3rem',
//                     marginTop:'0.8rem',
//                     position:'absolute'
//                 }}/>):(<MenuIcon style={{
//                     color:'white',
//                     marginTop:'0.8rem',
//                     width:'8rem',
//                     height:'3rem',
//                 }}/>)}
//                     </button>
//             </nav>
//         </div>
//     )
// }

// export default Navbar
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  background-color: black;
    font-size: 17px;
    font-weight: 700;
    color: white;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar