import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <NavLink className="navbar-brand active" to="/">Navbar</NavLink>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav >
              <MDBNavbarItem className='ms-lg-auto'>
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/about">About</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/product">Products</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <Outlet />
    </>
  );
}