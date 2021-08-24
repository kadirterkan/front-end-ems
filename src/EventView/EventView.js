import {useState,useEffect,Fragment} from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import EventApi from './API/EventApi.js';
import EventCalendar from './EventCalendar/EventCalendar';
import * as GoIcons from "react-icons/go";
import * as FaIcons from "react-icons/fa";
import EventBox from './EventBox/EventBox.js';
import EventTable from './EventTable/EventTable.js';
import Sidebar from '../components/Sidebar/Sidebar';


export function EventView() {


    const eventApi = new EventApi();

    const [eventQuery,setEventQuery] = useState([]);
    const [viewType,setViewType] = useState("calendar");

    const handleType = () => {
        if(viewType==="calendar"){
            setViewType("list");
        }else{
            setViewType("calendar");
        }
    }

    useEffect(() => {

        const response = eventApi.getAllEvents();
        if(response!=null){
            setEventQuery(response);
        }
    }, []);

    return(
        <>
            <Sidebar/>
            <div style={{'display':'flex','margin-top':'60px'}}>
                </div>
                <div className={"event-view"}>
                    <div>
                        <h1 className={"events-base-text"}>Discover Events</h1>
                    </div>
                    <div >
                        {/* <EventTable/> */}
                        <EventBox/>
                    </div>
                </div>
        </> 
    );

}

export default EventView;