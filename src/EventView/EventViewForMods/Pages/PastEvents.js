import {ModViewApi} from "../../API/ModViewApi";
import {useEffect, useState} from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import {modSidebar, sidebarEvents} from "../../../components/Sidebar/SidebarData";
import EventBox from "../../EventBox/EventBox";
import NoEventsAvailable from "../../EventPage/Common/NoEventsAvailable";

export default function PastEvents(props) {
    const modViewApi = new ModViewApi();

    const [allHostedEvents,setAllHostedEvents] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(async () => {
        const response = await modViewApi.getAllHostedEvents();

        setAllHostedEvents(response);
    },[]);

    useEffect(() => {
        if(allHostedEvents!==undefined && allHostedEvents!==null && allHostedEvents.length !== 0){
            setLoaded(true);
        }
    },[allHostedEvents])


    return(
        <>
            <Sidebar sidebarValues={modSidebar} userType={"MOD"}/>
            <div style={{'display':'flex'}}>
            </div>
            <div className={"event-view"}>
                <div>
                    <h1 className={"events-base-text"}>Hosting Events</h1>
                </div>
                <div>
                    {!loaded && <NoEventsAvailable/>}
                    {loaded && <EventBox userType={'MOD'} eventsList={allHostedEvents}/>}
                </div>
            </div>
        </>
    );
}