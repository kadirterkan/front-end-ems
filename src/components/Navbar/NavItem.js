import DropdownMenu from "./DropdownMenu";
import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import './NavItem.css';
import {IconContext} from "react-icons";

export default function NavItem({item}){

    const[open,setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return(
        <>
            <NavLink className={"upper-side-navigation-links"} to={item.path} onClick={item.subNav && handleOpen}>
                <IconContext.Provider value={{className:"upper-side-navigation-links-icons-left"}}>
                    <div className={"upper-side-navigation-links-labels"}>{item.icon}</div>
                </IconContext.Provider>
            </NavLink>
        </>
    );
}