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
    
            <MainContainer>
                <Navbar toggle={toggleNav}/>
                <SideBar isOpen={isOpen} toggle={toggleNav}/>
                <MainContent>
                    <MainItems>
                        <MainH1>Greatest Pizza Ever</MainH1>
                        <MainP>Ready in 60 seconds</MainP>
                        <MainBtn>Place Order</MainBtn>
                    </MainItems>
                </MainContent>
            </MainContainer>
        
    )
}

export default Main
