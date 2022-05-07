import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  width:100%;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    z-index: 1;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
          <Link to="/">Home</Link>
          </li>
      <li>
          <Link to="about">About Us</Link>
          </li>
      <li>
          <Link to="contact">Contact Us</Link>
          </li>
      <li>
          <Link to="gallery">Offer</Link>
          </li>
      <li><Link to="service">Service</Link></li>
      <li><Link to="pages">Pages</Link></li>
    </Ul>
  )
}

export default RightNav