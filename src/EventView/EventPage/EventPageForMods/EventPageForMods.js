import {EventPageApi} from "../../API/EventPageApi";
import React, {useEffect, useState} from "react";
import FakeValue from "../FakeValue";
import dayjs from "dayjs";
import {toast} from "react-toastify";
import {Redirect, useHistory} from "react-router-dom";
import * as UpperSide from "../UpperSide";
import * as DownSide from "../DownSide";
import {ButtonAccessForMods, handleAboutPage, handleQuestionsPage} from "../EventPage";
import '../EventPage.css';
import {SideBar} from "../../EventAdder/SidebarDateName";
import Sidebar from "../../../components/Sidebar/Sidebar";
import {modSidebar} from "../../../components/Sidebar/SidebarData";
import Navbar from "../../../components/Navbar/Navbar";
import {GoingInfoForMods} from "../DownSide";


export default function EventPageForMods(props){
    let userType = "USER";

    const history = useHistory();

    const now = new Date();

    const eventPageApi = new EventPageApi();

    const [eventPageRequest,setEventPageRequest] = useState();
    const [page,setPage] = useState("ABOUT");
    const [eventDetails,setEventDetails] = useState(null);

    const [loaded,setLoaded] = useState(false);

    const eventLong = () => {
        const relativeTime = require('dayjs/plugin/relativeTime');
        dayjs.extend(relativeTime)

        return dayjs(eventPageRequest.endTime).from(dayjs(eventPageRequest.startTime),true);
    }

    const [duration,setDuration] = useState(null);
    const [editEventModal,setEditEventModal] = useState(false);
    const [eventAvailable,setEventAvailable] = useState(false);

    const [questionList,setQuestionList] = useState([]);

    const onCancel = async () => {
        const response = await eventPageApi.cancelEvent(eventPageRequest.eventId);

        if(response !== null && response !== undefined){
            if (response.messageType === "SUCCESS") {
                toast.dark(response.message);

                history.push("/mod-view/main-page");
            } else {
                toast.dark(response.message);
            }
        }
    }

    const onEditModalOpen = () => setEditEventModal(!editEventModal);

    useEffect(async () => {
        setEventPageRequest(await eventPageApi.getEvent(props.match.params.id));

    },[]);


    useEffect(() => {
        if(eventPageRequest !==null && eventPageRequest !== undefined){
            setEventAvailable(new Date(eventPageRequest.startTime) > new Date());
            setLoaded(true);
            setDuration(eventLong());
            console.log(eventPageRequest);
        }
    },[eventPageRequest]);

    const seeAllJoinedUser = async () => {

    }

    return (
        <><Navbar/>
            <div className={"handle-page"}>
                <Sidebar sidebarValues={modSidebar} userType={"MOD"}/>
                <div className={"page"}>{loaded &&
                <div>
                    <div className={"event-page-upper-side"}>
                        <div className={"event-page-image-calender"}>
                            <div className={"event-page-calendar"}>
                                <UpperSide.Calendar eventDate={new Date(eventPageRequest.startTime).getDate()}/>
                            </div>
                            {eventPageRequest.base64Image!==null ? <UpperSide.Image base64Image={eventPageRequest.base64Image}/> : <div/>}
                        </div>
                        <UpperSide.Dates start={new Date(eventPageRequest.startTime)} end={new Date(eventPageRequest.endTime)}/>
                        <UpperSide.EventName eventName={eventPageRequest.eventName}/>
                        <div className={"event-page-event-type-join"}>
                            <UpperSide.EventLocation eventType={eventPageRequest.eventDetails}/>
                        </div>
                        <div className={"event-page-buttons"}>
                            <div className={"event-page-button-positioning"}>
                                <UpperSide.About page={page} onClick={() => handleAboutPage(setPage)}/>
                                <UpperSide.Questions page={page} onClick={() => handleQuestionsPage(setPage)}/>
                            </div>
                            <div className={"event-page-button-positioning"}>
                                <ButtonAccessForMods oldValues={eventPageRequest} eventAvailable={eventAvailable} eventOwner={eventPageRequest.status==="OWNER"} onClickCancel={onCancel} onClickEdit={onEditModalOpen} eventId={eventPageRequest.eventId}/>
                            </div>
                        </div>
                    </div>
                    <div className={"event-page-down-side"}>
                        {
                            page === "ABOUT" ?
                                <div className={"event-page-event-components"}>
                                    <div className={"event-page-left"}>
                                        <DownSide.Details duration={duration} eventCategory={eventPageRequest.eventCategory} eventPrivacy={eventPageRequest.departments} eventDescription={eventPageRequest.eventDescription}/>
                                        <DownSide.Host picture={eventPageRequest.modImage} name={eventPageRequest.username} department={eventPageRequest.departments}/>
                                    </div>
                                    <div className={"event-page-right"}>
                                        {eventPageRequest.eventDetails !== "ONLINE" && <DownSide.LocationInfo eventCoordinates={{eventLocationName:eventPageRequest.eventLocationName,lat:eventPageRequest.lat,lng:eventPageRequest.lng}}/>}
                                        <DownSide.GoingInfoForMods going={eventPageRequest.going} quota={eventPageRequest.quota}/>
                                    </div>
                                </div>:
                                <div className={"event-page-event-components"}>
                                    <div className={"event-page-left"}>
                                        <DownSide.Questions questions={questionList}/>
                                    </div>
                                    <div className={"event-page-right"}>
                                        <DownSide.Details duration={duration} eventCategory={eventPageRequest.eventCategory} eventPrivacy={eventPageRequest.departments} eventDescription={eventPageRequest.eventDescription}/>
                                    </div>
                                </div>
                        }
                    </div></div>}
                </div>
            </div>
        </>
    );
}