import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';


export const sidebarEvents = [
    {
        title:'Main Page',
        path:'/events/main-page/',
        icon:<FaIcons.FaCalendarAlt/>
    },
    {
        title:'Going',
        path:'/events/going-events',
        icon:<BiIcons.BiCalendarCheck/>
    },
    {
        title:'Past Events',
        path:'/events/past-events',
        icon:<GiIcons.GiBackwardTime/>
    }
    //
    // {
    //     title:'My Events',
    //     path:'#',
    //     icon:<FaIcons.FaUserAlt/>,
    //     iconClosed:<RiIcons.RiArrowDownSLine/>,
    //     iconOpened:<RiIcons.RiArrowUpSLine/>,
    //     subNav:[
    //         {
    //             title:'Going',
    //             path:'/going-events',
    //             icon:<BiIcons.BiCalendarCheck/>
    //         },
    //         {
    //             title:'Past Events',
    //             path:'/past-events',
    //             icon:<GiIcons.GiBackwardTime/>
    //         }
    //     ]
    // }
]

export const modSidebar = [
    {
        title:'Main Admin Page',
        path:'/mod-view/main-page',
        icon:<FaIcons.FaCalendarAlt/>
    },
    {
        title:'Hosting',
        path:'/mod-view/hosting-events',
        icon:<BiIcons.BiHomeSmile/>
    },
    {
        title:'Past Events',
        path:'/mod-view/hosted-events',
        icon:<GiIcons.GiBackwardTime/>
    },
    {
        title:'Event Day Statistics',
        path:'/mod-view/event-day-statistics',
        icon:<IoIcons.IoMdStats/>
    }
    // {
    //     title:'My Events',
    //     path:'#',
    //     icon:<FaIcons.FaUserAlt/>,
    //     iconClosed:<RiIcons.RiArrowDownSLine/>,
    //     iconOpened:<RiIcons.RiArrowUpSLine/>,
    //     subNav:[
    //
    //     ]
    // }
]