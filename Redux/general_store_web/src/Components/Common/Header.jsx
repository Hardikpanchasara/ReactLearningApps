// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'

// const Header = () => {
//   return (
//     <>
//       <div className="w-100 ">
//         <nav className="navbar navbar-expand-lg ">
//           <div className="container-fluid">
//             <NavLink className="navbar-brand active" to="/">Navbar</NavLink>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <NavLink className="nav-link" aria-current="page"  to="/">Home</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link"  to="about">About</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link"  to="product">Products</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link"  to="contact">Contact</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//       <Outlet />
//     </>
//   )
// }

// export default Header

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