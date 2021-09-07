import Sidebar from "../../../components/Sidebar/Sidebar";
import {modSidebar, sidebarEvents} from "../../../components/Sidebar/SidebarData";
import EventBox from "../../EventBox/EventBox";
import ModEventView from "../ModEventView";
import {useEffect, useState} from "react";
import {ModViewApi} from "../../API/ModViewApi";
import NoEventsAvailable from "../../EventPage/Common/NoEventsAvailable";

export default function HostingEvents(props){

    const modViewApi = new ModViewApi();

    const [allHostingEvents,setAllHostingEvents] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(async () => {
        const response = await modViewApi.getAllHostingEvents();

        setAllHostingEvents(response);
    },[]);

    useEffect(() => {

        if(allHostingEvents!==null && allHostingEvents!==undefined && allHostingEvents.length !== 0){
            setLoaded(true);
        }

    },[allHostingEvents])


    return(
        <>
            <Sidebar sidebarValues={modSidebar} userType={"MOD"}/>
            <div style={{'display':'flex'}}>
            </div>
            <div className={"event-view"}>
                <div>
                    <h1 className={"events-base-text"}>Hosting Events</h1>
                </div>
                <div >
                    {loaded && <EventBox eventsList={allHostingEvents}/>}
                    {!loaded && <NoEventsAvailable/>}
                </div>
            </div>
        </>
    );
}