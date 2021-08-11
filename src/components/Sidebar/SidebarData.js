import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text',
    },
    {
        title: 'Events',
        path: '#',
        icon:<MdIcons.MdEvent className={'icon'}/>,
        cName: 'nav-text',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title:'All Events',
                path:'/events',
                icon:<MdIcons.MdEventNote/>,
                cName:'nav-text-sub'
            },
            {
                title:'Created Events',
                path:'/events/mod-events',
                icon:<MdIcons.MdEventAvailable/>,
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

export const SidebarDataforUsers = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text',
    },
    {
        title: 'Events',
        path: '#',
        icon:<MdIcons.MdEvent className={'icon'}/>,
        cName: 'nav-text',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title:'All Events',
                path:'/events',
                icon:<MdIcons.MdEventNote/>,
                cName:'nav-text-sub'
            },
            {
                title:'Joined Events',
                path:'/events/mod-events',
                icon:<MdIcons.MdEventAvailable/>,
                cName:'nav-text-sub'
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