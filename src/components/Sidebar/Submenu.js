import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(NavLink)`
    gap:5px;
    width:98%;
    display:flex;
    color:#e1e9fc;
    align-items:center;
    margin:5px;
    padding:10px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;

    &:hover {
        border-radius:8px;
        filter:brightness(1.2);
        background: #686868;
        cursor:pointer;
    }

`;

const SidebarLabel = styled.span`
    `;



const DropdownLink = styled(NavLink)`
    gap:5px;
    width:93%;
    height: 60px;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#fff;
    font-size:18px;
    margin-left:20px;
    padding:10px;
    border-radius:8px;

    &:hover{
        border-radius:8px;
        filter:brightness(1.2);
        background: #686868;
        cursor:pointer;
    }

    &:active{
        background:#632ce4;
        cursor:pointer;
    }
    `

    const NavbarLabel = styled.a`
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
const SidebarSubm = styled(NavLink)`
    display:flex;
    color:#e1e9fc;
    justify-content:space-between;
    align-items:center;
    margin:5px;
    padding:10px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;

    &:hover {
        border-radius:8px;
        filter:brightness(1.2);
        background: #686868;
        cursor:pointer;
    }
`;


/* TODO: FIX THE WEIRD ANIMATION */


export function Submenu({item}){

    const [subnav,setSubnav] = useState(false);

    const showSubnav = () => {
        setSubnav(!subnav);
    }

    return(
        <>

            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <NavbarLabel>{item.icon}</NavbarLabel>
                <SidebarLabel>{item.title}</SidebarLabel>
            <span>
                {item.subNav && subnav ? 
                item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                : null}
            </span>
        </SidebarLink>
        {subnav && item.subNav.map((value,index) => {
            return(
            <DropdownLink key={index} to={value.path}>
                    <NavbarLabel>{value.icon}</NavbarLabel>
                    <SidebarLabel>{value.title}</SidebarLabel>
            </DropdownLink>
            );
        })}
        </>
    );
}

export default Submenu;