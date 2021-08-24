import * as CgIcons from 'react-icons/cg';
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

export const NavbarData = [
    {
        // title:'Notifications',
        icon:<BellIcon/>,
        cName:'navbar-text',
        path:'/user/notifications'
    },
    {
        // title:'Profile',
        icon:<CaretIcon/>,
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