import React,{useState} from 'react';
import {NavbarData} from "./NavbarData";
import { NavbarmidData } from './NavbarmidData';
import * as SiIcons from 'react-icons/si';
import "./Navbar.css";
import NavItem from './NavItem';
import NavMidItem from './NavMidItem';
import {Link, NavLink} from "react-router-dom";
import styled from 'styled-components';
import {IconContext} from "react-icons";

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
        <IconContext.Provider value={{className:"upper-side-navigation-site-icon"}}>
            <nav className={"upper-side-navigation"}>
                    <NavLink className={"upper-side-navigation-site"} to={'/'}>
                            <SiIcons.SiReactos color={"#1560bd"}/>
                    </NavLink>
                    {/*<ul className={'navbar-mid'}>*/}
                    {/*    {NavbarmidData.map((value,index) => {*/}
                    {/*        return(*/}
                    {/*            <NavMidItem key={index} item={value}/>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                    <ul className={'navbar-right'}>
                        {NavbarData.map((value,index) => {
                            return(
                                <NavItem key={index} item={value}/>
                            );
                        })}
                    </ul>
                </nav>
        </IconContext.Provider>

        </>
    );
}