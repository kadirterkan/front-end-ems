import DropdownMenu from "./DropdownMenu";
import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const NavbarLink = styled(NavLink)`
    padding: 0.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
`

const NavbarLabel = styled.div`
    --button-size:40px;
    width:var(--button-size);
    height:var(--button-size);
    background-color:#484a4d;
    color:#fff;
    padding:5px;
    margin:2px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:filter 300ms;

    &:hover{
        filter:brightness(1.2);
        background-color:#484a4d;
    }

    & svg{
        fill:#dadce1;
        width:20px;
        height:20px;
    }
`

const NavbarText = styled.div`
    color:#fff;
    align-items:center;
    justify-content:center;
    display:flex;
`




export default function NavItem({item}){

    const[open,setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return(
        <>
            <NavbarLink to={item.path} onClick={item.subNav && handleOpen}>
                <NavbarLabel>{item.icon}</NavbarLabel>
                <NavbarText>{item.title}</NavbarText>
            </NavbarLink>
            {open && <DropdownMenu subNav={item.subNav}/>}
        </>
    );
}