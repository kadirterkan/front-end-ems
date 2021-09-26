import {useState,useEffect} from 'react';
import EventApi from './API/EventApi.js';
import EventBox from './EventBox/EventBox.js';
import Sidebar from '../components/Sidebar/Sidebar';
import {sidebarEvents} from "../components/Sidebar/SidebarData";
import NoEventsAvailable from "./EventPage/Common/NoEventsAvailable";


export function EventView() {

    const eventApi = new EventApi();

    const [eventQuery,setEventQuery] = useState([]);
    const [loaded,setLoaded] = useState(false);


    useEffect(async () => {

        const response = await eventApi.getAllEvents();
        if(response!=null){
            setEventQuery(response);
        }
    }, []);

    useEffect(() => {
        if(eventQuery !== null && eventQuery !== undefined && eventQuery.length !==0){
            setLoaded(true);
        }
    },[eventQuery])

    return(
        <>
            <Sidebar sidebarValues={sidebarEvents} userType={"USER"}/>
            <div style={{'display':'flex'}}>
                </div>
                <div className={"event-view"}>
                    <div>
                        <h1 className={"events-base-text"}>Discover Events</h1>
                    </div>
                    <div >
                        {!loaded && <NoEventsAvailable/>}
                        {/* <EventTable/> */}
                        {loaded && <EventBox eventsList={eventQuery}/>}
                    </div>
                </div>
        </> 
    );

}

export default EventView;