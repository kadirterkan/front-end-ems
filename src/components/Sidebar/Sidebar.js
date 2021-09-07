import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Submenu} from "./Submenu";
import "./Sidebar.css";
import {modSidebar} from './SidebarData';
import styled from 'styled-components';
import {AiOutlineSearch} from "react-icons/ai";


const CreateEventButton = styled(NavLink)`
    position:relative;
    border-radius:8px;
    color:rgba(90, 180, 255,1);
    background-color:rgba(47, 69, 98 ,0.7);
    height:fit-content;
    text-align:center;
    padding-block: 10px;
    padding-inline: 60px;
    &:hover{
        filter:brightness(1.2);
    }
`


export default function Sidebar({sidebarValues,userType}) {

    const [sidebar,setSidebar] = useState(false);
    const [searchData,setSearchData] = React.useState("");

    const onChange = (event) => {
        const {value} = event.target.value;
        setSearchData(value);
    }

    return(
        <>
        <nav className={"side-bar-navigate"}>
            <div className={"side-bar-navigate-interior"}>
                <div className={"upper-side"}>
                    <h1 className={"side-bar-navigate-name"}>Events</h1>
                    <div className={"side-bar-navigate-search-form"}>
                        <input id={"input"} type={"text"} className={"side-bar-navigate-search-input"} onChange={onChange} value={searchData} maxLength={100} placeholder={"Search for events..."}/>
                        <label htmlFor={"input"} className={"side-bar-navigate-search-label"}><AiOutlineSearch/></label>
                    </div>
                </div>
                <div>
                    <ul className={"side-bar-navigate-items"}>
                        {sidebarValues.map((value,index) => {
                            return(
                                <Submenu item={value} key={index} open={sidebar} setOpen={(value) => setSidebar(value)}/>
                            );
                        })}
                    </ul>
                </div>
                {userType === "MOD" && <CreateEventButton to={'/mod-view/create-event'}><span>+ Create New Event</span></CreateEventButton>}
            </div>
        </nav>
        </>
    )
}

