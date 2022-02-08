import styled from 'styled-components'
import {Link} from 'react-scroll'
import {FaHeartbeat} from 'react-icons/fa'

export const Nav = styled.div`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
`

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
`

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

p{
    transform: translate(-100px, -275%);
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 3px #0000FF, 0 0 5px #0000FF;

    &:hover{
        transform: translate(-100px, -290%);
        transition: all ease 0.2s;
    }
}
`

export const Bars = styled(FaHeartbeat)`
color:	#0000FF;
font-size: 5rem;
transition: all ease 0.2s;
margin: 5px;

&:hover{
    transform: translateY(-5px);
}
`