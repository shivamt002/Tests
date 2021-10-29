import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink} from './FooterElements'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import Mail from '@material-ui/icons/Mail'

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Home <br/><br/></FooterLinkTitle>
                                <FooterLink to = "/signin">About</FooterLink>
                                <FooterLink to = "/signin">Services</FooterLink>
                                <FooterLink to = "/signin">Signin</FooterLink>    
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to = "/signin">Contact</FooterLink>
                                <FooterLink to = "/signin">Support</FooterLink>
                                <FooterLink to = "/signin">Address</FooterLink>    
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to = "/signin">How it Works</FooterLink>
                                <FooterLink to = "/signin">Carrers</FooterLink>
                                <FooterLink to = "/signin">Terms and Conditions</FooterLink>    
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to = "/signin">Instagram</FooterLink>
                                <FooterLink to = "/signin">Facebook</FooterLink>
                                <FooterLink to = "/signin">Twitter</FooterLink>    
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> 
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Pronto
                        </SocialLogo>
                        <WebsiteRights>Pronto © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Gmail"><Mail /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
