import React from 'react'
import {MainContainer, MainContent,MainItems,MainH1,MainP,MainBtn} from './mainElements'
import Navbar from '../NavBar/navBarComponent'

function Main() {
    return (
    
            <MainContainer>
                <Navbar/>
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
