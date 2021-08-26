import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Submenu} from "./Submenu";
import "./Sidebar.css";
import {SidebarEvents,modSidebar} from './SidebarData';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { blue } from '@material-ui/core/colors';


const CreateEventButton = styled(NavLink)`
    position:absolute;
    border-radius:8px;
    color:rgba(90, 180, 255,1);
    background-color:rgba(47, 69, 98 ,0.7);
    padding:20px;
    text-align:center;
    margin-left:25px;
    padding-inline: 60px;
    margin-top:5px;

    &:hover{
        filter:brightness(1.2);
    }
`


export default function Sidebar() {

    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <nav className={'nav-menu'}>
            <h1 className={'nav-menu-name'}>Events</h1>
            <h1 className={'nav-menu-name'}>Search</h1>
            <ul className='nav-menu-items'>
                {modSidebar.map((value,index) => {
                    return(
                        <Submenu item={value} key={index} open={sidebar} setOpen={(value) => setSidebar(value)}/>
                    );
                })}
            </ul>
            <CreateEventButton to={'events/create-event'}><span style={{'filter':'brightness(1.2)','z-index':'2'}}>+ Create New Event</span></CreateEventButton>
        </nav>
        </>
    )
}

