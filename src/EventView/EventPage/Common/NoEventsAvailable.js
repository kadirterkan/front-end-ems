import {FcCalendar} from "react-icons/all";
import {IconContext} from "react-icons";
import './NoEventsAvailable.css';

export default function NoEventsAvailable(props){


    return(
        <div className={"no-events-available"}>
            <IconContext.Provider value={{className:"no-events-available-icon"}}>
                <FcCalendar/>
            </IconContext.Provider>
            <h1>No Events Available</h1>
        </div>

    );
}