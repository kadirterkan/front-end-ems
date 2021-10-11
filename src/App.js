import './App.css';
import './EventView/Event.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import PagesForMods from "./Pages/PagesForMod";
import {SystemApi} from "./common/API/SystemApi";
import EmailVerificationRedirection from "./WelcomeScreen/EmailVerification/EmailVerificationRedirection";
import EnterScreen from "./WelcomeScreen/EnterScreen";
import SpecialNavBarForLogin from "./WelcomeScreen/ForgottedPassword/SpecialNavBarForLogin";
import ForgottenPasswordsGetEmail from "./WelcomeScreen/ForgottedPassword/ForgottenPasswordGetEmail";
import IsThisYou from "./WelcomeScreen/ForgottedPassword/IsThisYou";
import VerificationCode from "./WelcomeScreen/ForgottedPassword/VerificationCode";
import ChooseANewPassword from "./WelcomeScreen/ForgottedPassword/ChooseANewPassword";
import MainPage from "./MainPage/MainPage";
import LogOut from "./common/LogOutHandler/LogOut";
import EventPage from "./EventView/EventPage/EventPage";
import EventView from "./EventView/EventView";
import Navbar from "./components/Navbar/Navbar";
import EventAdder from "./EventView/EventAdder/EventAdder";
import EditEvent from "./EventView/EventPage/EventPageForMods/EditEventModal/EditEvent";
import EventPageForMods from "./EventView/EventPage/EventPageForMods/EventPageForMods";
import ModEventView from "./EventView/EventViewForMods/ModEventView";
import EventStatistics from "./EventView/EventViewForMods/Pages/EventStatistics";
import HostingEvents from "./EventView/EventViewForMods/Pages/HostingEvents";
import PastEvents from "./EventView/EventViewForMods/Pages/PastEvents";
import JoinEventPage from "./EventView/EventPage/JoinEventPage";
import GoingEvents from "./EventView/UserPages/GoingEvents";
import JoinedEvents from "./EventView/UserPages/JoinedEvents";

function App() {
    const systemApi = new SystemApi();

    const [userType,setUserType] = React.useState("GUEST");
    const [load,setLoad] = useState(false);

    React.useEffect(async () => {
        getUserType();
    },[]);

    const getUserType = async () => {

        const response = await systemApi.getAuthentication();

        if(response !== null && response !== undefined){
            setUserType(response.roleEnum);
        }
    }

    useEffect(() => {
        if(userType !== null && userType !== undefined && userType !== "GUEST"){
            setLoad(true);
        }
    },[userType]);

    const WithSpecialNavbar = () => {
        return(
            <div>
                <SpecialNavBarForLogin/>
                <Switch>
                    <Route path={"/forgot-my-password"} exact component={ForgottenPasswordsGetEmail}/>
                    <Route path={"/forgot-my-password/is-this-you"} exact component={IsThisYou}/>
                    <Route path={"/forgot-my-password/verification"} exact component={VerificationCode}/>
                    <Route path={"/forgot-my-password/choose-a-new-password"} exact component={ChooseANewPassword}/>
                </Switch>
            </div>
        );
    }

    return (
      <div>
          <BrowserRouter>
              <Switch>
                  <Route path={'/registration-confirm/token/:token'} exact component={EmailVerificationRedirection}/>
                  <Route path={"/"} exact render={() => <><EnterScreen userType={userType}/></>}/>
                  <Route path={'/main-page'} exact component={MainPage}/>
                  <Route path={'/log-out'} exact render={() => <LogOut userType={userType} setUserType={setUserType}/>}/>
                  {true && <>{/*<Route component={WithSpecialNavbar}/>*/}
                      <Route path="/mod-view/event-page/:id" exact component={EventPageForMods}/>
                  <Route path='/events/event-page/:id' exact render={(props) => <div><Navbar/><EventPage id={props.match.params.id}/></div>}/>
                  <Route path='/events/event-page/join-event/:id' exact render={(props) => <div><Navbar/><JoinEventPage id={props.match.params.id}/></div>}/>
                  <Route path='/events/main-page' exact render={() => <div><Navbar/><EventView/></div>}/>
                  <Route path='/events/going-events' exact render={() => <div><Navbar/><GoingEvents/></div>}/>
                  <Route path='/events/past-events' exact render={() => <div><Navbar/><JoinedEvents/></div>}/>
                  <Route path='/mod-view/main-page' exact render={() => <div><Navbar/><ModEventView/></div>}/>
                  <Route path='/mod-view/hosting-events' exact render={() => <div><Navbar/><HostingEvents/></div>}/>
                  <Route path='/mod-view/hosted-events' exact render={() => <div><Navbar/><PastEvents/></div>}/>
                  <Route path='/mod-view/event-day-statistics' exact render={() => <div><Navbar/><EventStatistics/></div>}/>
                  <Route path='/mod-view/create-event' exact component={EventAdder}/>
                  <Route path='/mod-view/edit-event/:id' exact component={EditEvent}/>
                  {/*{userType === "USER" && <Route component={PagesForUsers}/>}*/}
                  <Route component={PagesForMods}/>}</>}
              </Switch>
          </BrowserRouter>
      </div>
    );
}

export default App;