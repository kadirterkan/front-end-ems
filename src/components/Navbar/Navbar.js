import React from 'react';
import {NavbarData} from "./NavbarData";
import "./Navbar.css";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {

    return (
        <>
            <nav className={"navbar"}>
                <ul className={'navbar-items'}>
                    {NavbarData.map((value,index) => {
                        return(
                            <DropdownMenu item={value} key={index}/>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
