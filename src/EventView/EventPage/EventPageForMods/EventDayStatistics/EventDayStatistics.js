import Sidebar from "../../../../components/Sidebar/Sidebar";
import {modSidebar} from "../../../../components/Sidebar/SidebarData";

export default function EventDayStatistics(props){

    const DayStatistics = () => {

        return(
            <div className={"event-day-statistics-box"}>
                <div className={"interrior"}>

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
                    <DayStatistics/>
                </div>
            </div>
        </>
    );
}