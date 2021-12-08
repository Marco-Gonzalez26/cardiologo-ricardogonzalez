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
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SideContainer>
            
        
    )
}

export default SideBar
