import styled from 'styled-components';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import React, { useState,useCallback, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";
import { IoMdClose } from 'react-icons/io';
import {AiOutlineDelete} from 'react-icons/ai';
import {FaRegEdit} from 'react-icons/fa';


const SidebarMenuName = styled.h3`
    color:#fff;
    margin-left:1rem;
    margin-top:0.25rem;
`
const SidebarMenu = styled.span`
    color:#fff;
    margin-left:1rem;
    margin-top:0.25rem;
`


export const SidebarHeaderLinks = styled.div`
    margin-top:10px;
    margin-left:10px;
    color:grey;
    display:flex;
    gap:10px;
`

const NavLink = styled(Link)`

`

export default function Questions(props){
    return(
        <>
           <SidebarHeaderLinks>
                <NavLink to={'#'}><h6>Event</h6></NavLink>
                <h6>-</h6>
                <NavLink to={'#'}><h6>Create Event</h6></NavLink>
            </SidebarHeaderLinks>
            <SidebarMenuName>Question Form</SidebarMenuName>
            <SidebarMenu>Enter your questions</SidebarMenu>
        </>
    );
}
