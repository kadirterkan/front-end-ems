import * as CgIcons from 'react-icons/cg';
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";

export const NavbarData = [
    {
        title:'Notifications',
        icon:<IoIcons.IoNotificationsOutline/>,
        cName:'navbar-text',
        path:'/user/notifications'
    },
    {
        title:'Profile',
        icon:<CgIcons.CgProfile/>,
        cName:'navbar-text',
        path:'#',
        iconOpen:<RiIcons.RiArrowDownSFill/>,
        subNav: [
            {
                title:'Your Profile',
                path:'/user/profile',
                cName:'navbar-text-sub'
            },
            {
                title:'Log Out',
                path:'/logout',
                cName: 'navbar-text-sub'
            }

        ]
    }
]