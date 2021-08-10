import React,{useState} from 'react';
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


export function Submenu({item}){

    const [subnav,setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return(
        <>

            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                {item.subNav && subnav ? 
                item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                : null}
            </div>
        </SidebarLink>
            <CSSTransition
                in={subnav}
                unmountonExit
                timeout={500}
                classNames={"sub-menu-trans"}>
            <div>
        {subnav && item.subNav.map((item,index) => {
            return(
            <DropdownLink key={index} to={item.path}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
            );
        })}
            </div>
            </CSSTransition>
        </>
    );
}

export default Submenu;