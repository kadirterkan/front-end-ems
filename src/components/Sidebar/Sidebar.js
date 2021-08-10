import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import {Submenu} from "./Submenu";
import "./Sidebar.css";
import { IconContext } from 'react-icons/lib';

export function Sidebar() {

    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className="sidebar-toggle">
                    <Link to="#" className='menu-bars'>
                        <IconContext.Provider value={{color:'#fff'}}>
                            {sidebar && <AiIcons.AiOutlineClose onClick={showSidebar}/>}
                            {!sidebar &&  <FaIcons.FaBars onClick={showSidebar}/>}
                        </IconContext.Provider>
                    </Link>
                </li>
                {SidebarData.map((value,index) => {
                    
                    return(
                        <Submenu item={value} key={index}/>
                    );

                })}
            </ul>
        </nav>
        </>
    )
}

export default Sidebar;