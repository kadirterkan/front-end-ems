import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text',
    },
    {
        title: 'Events',
        path: '/events',
        icon:<MdIcons.MdEvent className={'icon'}/>,
        cName: 'nav-text',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title:'Your Events',
                path:'/events/mod-events',
                icon:<MdIcons.MdEventAvailable/>,
                cName:'nav-text-sub'
            },
            {
                title:'Add Event',
                path:'/events/add-event',
                icon:<GrIcons.GrTableAdd/>,
                cName:'nav-text-sub'
            },
            {
                title:'Statistics',
                path:'/events/statistics',
                icon:<AiIcons.AiOutlineBarChart/>,
                cName:'nav-text-sub'
            }
        ]
    },
    {
        title: 'Users',
        path: '/users',
        icon:<BsIcons.BsFillPeopleFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
]

export const SidebarDataforUser = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        icon:<MdIcons.MdEvent/>,
        cName: 'nav-text',
        subNav: [
            {
                title:'Joined Events',
                path:'/events/mod-events',
                icon:<MdIcons.MdEventAvailable/>
            }
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
]