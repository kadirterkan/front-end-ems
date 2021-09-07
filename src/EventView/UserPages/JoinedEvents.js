import {useEffect, useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {modSidebar, sidebarEvents} from "../../components/Sidebar/SidebarData";
import EventApi from "../API/EventApi";
import NoEventsAvailable from "../EventPage/Common/NoEventsAvailable";
import EventBox from "../EventBox/EventBox";


export default function JoinedEvents(){

    const eventApi = new EventApi();

    const [allHostingEvents,setAllHostingEvents] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(async () => {
        const response = await eventApi.getJoinedEvents();

        setAllHostingEvents(response);
    },[]);

    useEffect(() => {

        if(allHostingEvents!==null && allHostingEvents!==undefined && allHostingEvents.length !== 0){
            setLoaded(true);
        }

    },[allHostingEvents])


    return(
        <>
            <Sidebar sidebarValues={sidebarEvents} userType={"USER"}/>
            <div style={{'display':'flex'}}>
            </div>
            <div className={"event-view"}>
                <div>
                    <h1 className={"events-base-text"}>Joined Events</h1>
                </div>
                <div >
                    {loaded && <EventBox eventsList={allHostingEvents}/>}
                    {!loaded && <NoEventsAvailable/>}
                </div>
            </div>
        </>
    );
}