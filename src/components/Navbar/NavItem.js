import DropdownMenu from "./DropdownMenu";
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const NavbarLink = styled(Link)`
    padding: 1rem;
    display:flex;`

const NavbarLabel = styled.span`
    --button-size:32px;
    width:var(--button-size);
    height:var(--button-size);
    background-color:#484a4d;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:filter 300ms;
`

const NavbarText = styled.span`
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