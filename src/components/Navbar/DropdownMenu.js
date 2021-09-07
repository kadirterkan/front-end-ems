import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import styled from 'styled-components';


const Menu = styled.div`
    position:absolute;
    top:58px;
    background-color:#242526;
    width:300px;
    border:1px solid #474a4d;
    border-radius: 8px;
    padding:1rem;
    overflow:hidden;
`

const MenuItem = styled(Link)`
    color:#fff;
    position:relative;
    display:flex;
    height:100%;
    width:100%;
    border-radius:8px;
    padding:0.5rem;

    &:hover {
        background-color: #525357;
    }
    `;




export default function DropdownMenu({subNav,open}){
    
    return(
        <Menu>
            {subNav.map((value,index) => {
                return(
                    <MenuItem key={index} to={value.path}>{value.title}</MenuItem>
                );
            })}
        </Menu>
        );
}