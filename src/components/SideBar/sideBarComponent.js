import React from 'react'
import { SideContainer,
    Icon,CloseIcon,
    SidebarMenu,SidebarLink,
    SidebarRoute, SideWrap } from './SideBarElements'

function SideBar() {
    return (
        <SideContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink>Pizzas</SidebarLink>
                <SidebarLink>Desserts</SidebarLink>
                <SidebarLink>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideWrap>
        </SideContainer>
            
        
    )
}

export default SideBar
