import React from 'react'
import logo from '../../images/logo192.png';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
       <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/Home'><img src = {logo} alt='p' height={40} width={40} ></img>Pronto</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">SignUp</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    );
}

export default Navbar
