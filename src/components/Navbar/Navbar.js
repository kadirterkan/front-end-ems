import React,{useState} from 'react';
import {NavbarData} from "./NavbarData";
import "./Navbar.css";
import NavItem from './NavItem';


export default function Navbar() {

    return (
        <>
            <nav className={"navbar"}>
                <ul className={'navbar-nav'}>
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