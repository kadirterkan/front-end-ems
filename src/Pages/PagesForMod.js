import {Route, Switch} from "react-router-dom";
import EventPageForMods from "../EventView/EventPage/EventPageForMods/EventPageForMods";
import React from "react";
import EventAdder from "../EventView/EventAdder/EventAdder";
import EditEvent from "../EventView/EventPage/EventPageForMods/EditEventModal/EditEvent";
import EventView from "../EventView/EventView";


export default function PagesForMods(){

    const WithoutNavbar = () => {
        return(
            <div>
                <Switch>
                    <Route path='/events/create-event' exact component={EventAdder}/>
                    <Route path='/events/edit-event/:id' exact component={EditEvent}/>
                </Switch>
            </div>
        )
    }

    const WithSideBar = () => {
        return(
            <div>
                <Switch>
                    <Route path="/events/event-page/:id" exact component={EventPageForMods}/>
                    <Route path='/events/' exact component={EventView}/>
                    {/*<Route path='/events/mod-view' exact component={}/>*/}
                </Switch>
            </div>
        )
    }

    return(
        <div>
            <Switch>
                {/*<Route path="/main-page" exact component={} />*/}
                <Route component={WithSideBar}/>
                <Route component={WithoutNavbar}/>
            </Switch>
        </div>

    );
}