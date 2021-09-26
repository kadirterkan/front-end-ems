import Sidebar from "../../components/Sidebar/Sidebar";
import EventBox from "../EventBox/EventBox";
import {modSidebar} from "../../components/Sidebar/SidebarData";
import NoEventsAvailable from "../EventPage/Common/NoEventsAvailable";
import EventApi from "../API/EventApi";
import {useEffect, useState} from "react";

export default function ModEventView (props) {

    const eventApi = new EventApi();

    const [eventQuery,setEventQuery] = useState([]);
    const [loaded,setLoaded] = useState(false);


    useEffect(async () => {

        const response = await eventApi.getCreatedEvents();
        if(response!=null){
            setEventQuery(response);
        }
    }, []);

    useEffect(() => {
        if(eventQuery !== null && eventQuery !== undefined && eventQuery.length !==0){
            setLoaded(true);
        }
    },[eventQuery]);


    return(
        <>
            <Sidebar sidebarValues={modSidebar} userType={"MOD"}/>
            <div className={"event-view"}>
                <div>
                    <h1 className={"events-base-text"}>Your Events</h1>
                </div>
                <div>
                    {!loaded && <NoEventsAvailable/>}
                    {loaded && <EventBox eventsList={eventQuery}/>}
                </div>
            </div>
        </>
    );
}