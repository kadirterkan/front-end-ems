import Sidebar from "../../../components/Sidebar/Sidebar";
import {modSidebar} from "../../../components/Sidebar/SidebarData";
import NoEventsAvailable from "../../EventPage/Common/NoEventsAvailable";
import './EventStatistics.css';

export default function EventStatistics(props){

    const EventStatistics = () => {

        return(
            <div className={"event-statistics-box"}>
                <div className={"event-statistics-box-interior"}>

                </div>
            </div>

        );
    }


    return(
        <>
            <Sidebar sidebarValues={modSidebar} userType={"MOD"}/>
            <div className={"event-view"}>
                <div>
                    <h1 className={"events-base-text"}>Event Day Statistics</h1>
                </div>
                <div>
                    <EventStatistics/>
                </div>
            </div>
        </>
    );
}