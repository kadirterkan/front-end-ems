import React,{useState} from 'react';
import {NavbarData} from "./NavbarData";
import { NavbarmidData } from './NavbarmidData';
import * as SiIcons from 'react-icons/si';
// import "./Navbar.css";
import NavItem from './NavItem';
import NavmidItem from './NavmidItem';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavbarLink = styled(Link)`
    margin:2px;
    padding: 1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    

    & svg{
        fill:#dadce1;
        width:30px;
        height:30px;
    }
`




export default function Navbar() {

    return (
        <>
            <nav className={"navbar"}>
                <NavbarLink to={'/'}><SiIcons.SiReactos/></NavbarLink>
                <ul className={'navbar-mid'}>
                    {NavbarmidData.map((value,index) => {
                        return(
                            <NavmidItem key={index} item={value}/>
                        );
                    })}
                </ul>
                <ul className={'navbar-right'}>
                    {NavbarData.map((value,index) => {
                        return(
                            <NavItem key={index} item={value}/>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}