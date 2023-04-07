import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <Link to='/'>Navbar</Link>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <Link className='nav-link' to="/"  >
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/feature'>Features</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/pricing'>Pricing</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/about'>About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/Example'>Example</Link>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}