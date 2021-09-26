import {useEffect, useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {modSidebar, sidebarEvents} from "../../components/Sidebar/SidebarData";
import EventApi from "../API/EventApi";
import NoEventsAvailable from "../EventPage/Common/NoEventsAvailable";
import EventBox from "../EventBox/EventBox";


export default function GoingEvents(){

    const eventApi = new EventApi();

    const [allGoingEvents,setAllGoingEvents] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(async () => {
        const response = await eventApi.getGoingEvents();

        setAllGoingEvents(response);
    },[]);

    useEffect(() => {

        if(allGoingEvents!==null && allGoingEvents!==undefined && allGoingEvents.length !== 0){
            setLoaded(true);
        }

    },[allGoingEvents])


    return(
        <>
            <Sidebar sidebarValues={sidebarEvents} userType={"USER"}/>
            <div style={{'display':'flex'}}>
            </div>
            <div className={"event-view"}>
                <div>
                    <h1 className={"events-base-text"}>Going Events</h1>
                </div>
                <div >
                    {loaded && <EventBox eventsList={allGoingEvents}/>}
                    {!loaded && <NoEventsAvailable/>}
                </div>
            </div>
        </>
    );
}