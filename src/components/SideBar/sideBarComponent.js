import React from 'react'
import { SideContainer,
    Icon,CloseIcon,
    SidebarMenu,SidebarLink,
    SidebarRoute, SideBtnWrap } from './SideBarElements'


function SideBar({toggle, isOpen}) {
    return (
        <SideContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to='main' smooth duration={1000}>Inicio</SidebarLink>
                <SidebarLink onClick={toggle} to='servicios' smooth duration={1000}>Servicios</SidebarLink>
                <SidebarLink onClick={toggle} to='mi-perfil' smooth duration={1000}>Mi perfil</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute onClick={toggle} rel='noopener noreferrer' target='_blank'href='https://wa.me/message/ZIDEZLRY7MHFD1' >Agenda tu cita</SidebarRoute>
            </SideBtnWrap>
        </SideContainer>
            
        
    )
}

export default SideBar
