import React from 'react'
import {Nav, NavIcon, Bars} from './navBarElements'

function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavIcon onClick={toggle}>
                    <Bars/>
                    <p>Click aqui</p>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar