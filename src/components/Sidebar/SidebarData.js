import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';


export const SidebarEvents = [
    {
        title:'Main Page',
        path:'/events',
        icon:<FaIcons.FaCalendarAlt/>
    },
    {
        title:'Your Company',
        path:'/company',
        icon:<HiIcons.HiOfficeBuilding/>
    },
    {
        title:'My Events',
        path:'#',
        icon:<FaIcons.FaUserAlt/>,
        iconClosed:<RiIcons.RiArrowDownSLine/>,
        iconOpened:<RiIcons.RiArrowUpSLine/>,
        subNav:[
            {
                title:'Going',
                path:'/going-events',
                icon:<BiIcons.BiCalendarCheck/>
            },
            {
                title:'Interested',
                path:'/interested-events',
                icon:<BiIcons.BiCalendarStar/>
            },
            {
                title:'Hosting',
                path:'/created-events',
                icon:<BiIcons.BiHomeSmile/>
            },
            {
                title:'Past Events',
                path:'/past-events',
                icon:<GiIcons.GiBackwardTime/>
            }
        ]
    }
]

export const SidebarHeader = [
    
]

export const SidebarEventCat = [
    {

    }
]