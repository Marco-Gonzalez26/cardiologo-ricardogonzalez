import React from 'react'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap,
    SocialLogo, SocialIcons, SocialIconLink, Author} from './footerElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='main' smooth duration={1000}>Ricardo Gonzalez</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='https://wa.me/message/ZIDEZLRY7MHFD1' target='_blank'
                            aria-label='Whatsapp' rel='noopener noreferrer'>
                                <FaWhatsapp/>
                            </SocialIconLink>
                            <SocialIconLink href='https://instagram.com/ricardojosegonzalezsoto?utm_medium=copy_linkhttps://instagram.com/ricardojosegonzalezsoto?utm_medium=copy_link' target='_blank'
                            aria-label='Instagram' rel='noopener noreferrer'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='mailto:cardiologodrrjgs@gmail.com' target='_blank'
                            aria-label='Email' rel='noopener noreferrer'>
                                <FaEnvelope/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <Author href='https://www.linkedin.com/in/marco-gonzalez-77341b1b7/' target='_blank'
                            aria-label='Linkedin' rel='noopener noreferrer'>Hecho por Marco Gonzalez</Author>'
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer
