import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from "react-router-dom";

export default function NavBar (){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='mobile-nav'>
      <Navbar color="light" light expand="md">
        <Link to='/' className='logo'><img src='https://www.metalsucks.net/wp-content/uploads/2019/09/CUBLOTW-09_25_2019.jpg'></img></Link>
        <NavbarToggler className='hamburger' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-list" navbar>
            <UncontrolledDropdown nav inNavbar>   
                <DropdownItem>
                  <Link to='/'>Home</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/tours'>Tour Dates</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/tickets'>Tickets</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/merch'>Merch</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/aboutus'> About Us</Link>
                </DropdownItem>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
