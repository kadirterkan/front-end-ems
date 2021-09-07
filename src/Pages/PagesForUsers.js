import {Route, Switch} from "react-router-dom";
import EventPageForMods from "../EventView/EventPage/EventPageForMods/EventPageForMods";
import EventView from "../EventView/EventView";
import React from "react";
import EventPage from "../EventView/EventPage/EventPage";
import MainPage from "../MainPage/MainPage";

export default function PagesForUsers() {

    const WithSidebar = () => {
        return(
            <div>

            </div>
        )
    }

    return(
        <div>
            <Switch>
                {/*<Route path="/main-page" exact component={} />*/}
                <Route component={WithSidebar}/>
            </Switch>
        </div>
    )
}