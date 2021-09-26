import {HiUsers} from 'react-icons/hi';
import {FiUsers} from 'react-icons/fi';
import {GiEarthAfricaEurope} from 'react-icons/gi';



export const AddEventSidebarData = [
    {
        title:'Create Event'
    },
    {
        title:'NAME GOES HERE',
        subtext:'HOST - YOUR PROFILE'
    },
    {
        title:'Create Event',
        icon:<HiUsers/>
    }
]

export const Types = [
    {
        icon:<GiEarthAfricaEurope/>,
        title:'Online / Remote',
        type:'ONLINE',
        description:'Online Events with an external link for the event'
    },
    {
        icon:<FiUsers/>,
        title:'In Person / Physical',
        type:'PHYSICAL',
        description:'Get together with people in a specific location'
    }
]

export const Pages = [
    {
        title:'Event Details'
    },
    {
        title:'Location',
        description:'Enter your event link'
    },
    {
        title:'Location',
        description:'Enter your event location from the map'
    },
    {
        title:'Description',
        description:'Enter details about your event'
    },
    {
        title:'Additional Details'
    }

]