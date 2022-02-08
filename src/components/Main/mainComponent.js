import React, {useState}from 'react'
import {MainContainer, MainContent,MainItems,MainH1,MainP,MainBtn} from './mainElements'

import Navbar from '../NavBar/navBarComponent'
import SideBar from '../SideBar/sideBarComponent'

function Main() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }
    return (
    
            <MainContainer id='main'>
                <Navbar toggle={toggleNav}/>
                <SideBar isOpen={isOpen} toggle={toggleNav}/>
                <MainContent>
                    <MainItems>
                        <MainH1>Ricardo Gonzalez Soto</MainH1>
                        <MainP>Cardiologo</MainP>
                        <a rel='noopener noreferrer' target='_blank'href='https://wa.me/message/ZIDEZLRY7MHFD1' ><MainBtn>Agenda una cita</MainBtn></a>
                    </MainItems>
                </MainContent>
            </MainContainer>
        
    )
}

export default Main
