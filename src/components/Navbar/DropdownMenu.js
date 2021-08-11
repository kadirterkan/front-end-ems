import { CSSTransition } from 'react-transition-group';
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import styled from 'styled-components';


const Menu = styled.div`
    position:absolute;
    top:58px;
    width:300px;
    border:1px solid #474a4d;
    border-radius: 8px;
    padding:1rem;
    overflow:hidden;
`

const MenuItem = styled(Link)`
    position:relative;
    display:flex;
    background:#414757;
    height:50px;
    width:150px;
    border-radius:8px;
    padding:0.5rem;
    `




export default function DropdownMenu({subNav,open}){
    
    return(
        <CSSTransition in={open} timeout={500} className={"menu-primary"}>
            <Menu>
                {subNav.map((value,index) => {
                    return(
                        <MenuItem to={value.path}>{value.title}</MenuItem>
                    );
                })}
            </Menu>
        </CSSTransition>    
        );
}