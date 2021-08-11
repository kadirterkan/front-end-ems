import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {CSSTransition} from "react-transition-group";

const SidebarLink = styled(Link)`
    display:flex;
    color:#e1e9fc;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;

    &:hover {
        background: #252831;
        border-left:4px solid #631ce4;
        cursor:pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left:16px;`;

const DropdownLink = styled(Link)`
    background:#414757;
    height: 60px;
    paddin-left:3rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#f5f5f5;
    font-size:18px;

    &:hover{
        background:#632ce4;
        cursor:pointer;
    }
    `;

/* TODO: FIX THE WEIRD ANIMATION */


export function Submenu({item,open,setOpen}){

    const [subnav,setSubnav] = useState(false);

    const showSubnav = () => {
        setOpen(true);
        setSubnav(!subnav);
    }

    useEffect(() => {
        if(subnav){
            setSubnav(open);
        }
    },[open]);

    return(
        <>

            <SidebarLink to={item.subNav ? item.path : "#"} onClick={item.subNav && showSubnav}>
            <div className={"tooltip"}>
                {item.icon}
                {!open && <span className={"tooltiptext"}>{item.title}</span>}
                {open && <SidebarLabel>{item.title}</SidebarLabel>} 
            </div>
            <div>
                {item.subNav && subnav ? 
                item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                : null}
            </div>
        </SidebarLink>
        {subnav && item.subNav.map((item,index) => {
            return(
            <DropdownLink key={index} to={item.path}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
            );
        })}
        </>
    );
}

export default Submenu;