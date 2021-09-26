import React, { useState,useEffect } from "react";
import * as UpperSide from './UpperSide';
import * as DownSide from './DownSide';
import dayjs from "dayjs";
import {EventPageApi} from "../API/EventPageApi";
import './EventPage.css';
import {toast} from "react-toastify";
import FakeValue from "./FakeValue";
import {IconContext} from "react-icons";
import {modSidebar, sidebarEvents} from "../../components/Sidebar/SidebarData";
import Sidebar from "../../components/Sidebar/Sidebar";

const ButtonAccessForUsers = ({eventAvailable,status,onClickGoing,eventId,onClickLeave}) => {
    return(
        <>
            <UpperSide.Going eventId={eventId} eventAvailable={eventAvailable} status={status} onClick={onClickGoing} onLeave={onClickLeave}/>
            {/*<UpperSide.Interested eventAvailable={eventAvailable} status={status} onClick={onClickInterested}/>*/}
        </>
    )
}
export const ButtonAccessForMods = ({eventAvailable,eventOwner,onClickEdit,onClickCancel,eventId,oldValues}) => {
    return(
        <>
            {eventOwner && <><UpperSide.Edit oldValues={oldValues} id={eventId} eventAvailable={eventAvailable} onClick={onClickEdit}/>
            <UpperSide.Cancel eventAvailable={eventAvailable} onClick={onClickCancel}/></>}
        </>
    )
}

export const handleAboutPage = (setPage) => {
    setPage("ABOUT");
}

export const handleQuestionsPage = (setPage) => {
    setPage("QUESTIONS");
}

export default function EventPage(props) {

    const now = new Date();

    const eventPageApi = new EventPageApi();

    const [eventPageRequest,setEventPageRequest] = useState(null);
    const [page,setPage] = useState("ABOUT");
    const [eventAvailable,setEventAvailable] = useState(false);
    const [loaded,setLoaded] = useState(false);

    const eventLong = () => {
        const relativeTime = require('dayjs/plugin/relativeTime');
        dayjs.extend(relativeTime)

        return dayjs(eventPageRequest.endTime).from(dayjs(eventPageRequest.startTime),true);
    }

    const [duration,setDuration] = useState(null);
    const [question,setQuestion] = useState("");
    const [joinEventModal,setJoinEventModal] = useState(false);

    const [questionList,setQuestionList] = useState([]);

    const onQuestionChange = (event) => {
        setQuestion(event.target.value);
    }

    const openJoinEventModal = () => setJoinEventModal(true);

    useEffect(async () => {
        setEventPageRequest(await eventPageApi.getUserEventPage(props.id));

    },[]);


    useEffect(() => {
        if(eventPageRequest !==null && eventPageRequest !== undefined){
            setEventAvailable(new Date(eventPageRequest.startTime) > new Date());
            setLoaded(true);
            setDuration(eventLong());
        }
    },[eventPageRequest]);

    const askQuestion = async () => {
        if (question.length !== 0) {
            const response = await eventPageApi.askQuestion(props.id,question);

            if(response !== null && response !== undefined){
                if(response.messageType === "SUCCESS"){
                    toast.success(response.message);
                    setQuestion("");
                }else {
                    toast.error(response.message);
                }
            }
        }
    }

    const leaveEvent = async () => {
        const response = await eventPageApi.leaveEvent(props.id);

        if(response !== null && response !== undefined){
            if(response.messageType === "SUCCESS"){
                toast.success(response.message);
                window.location.reload();
            }else {
                toast.error(response.message);
            }
        }
    }

    // const onInterested = () => {
    //     const response = eventPageApi.joinEvent(eventPageRequest.eventId);
    //
    //     if(response !== null){
    //         if (response.messageType === "SUCCESS") {
    //             toast.dark(response.message);
    //         } else {
    //             toast.dark(response.message);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     eventPageApi.getEvent(props.match.params.id);
    // });


    return (
        <>
            <div className={"handle-page"}>
            <Sidebar sidebarValues={sidebarEvents} userType={"USER"}/>
                <div className={"event-page"}>{loaded && <>
                    <div className={"event-page-upper-side"}>
                        <IconContext.Provider value={{color :'#fff' ,size:'20px'}}>
                            <div className={"event-page-image-calender"}>
                                <div className={"event-page-calendar"}>
                                    <UpperSide.Calendar eventDate={new Date(eventPageRequest.startTime).getDate().toString()}/>
                                </div>
                                <UpperSide.Image base64Image={eventPageRequest.base64Image && eventPageRequest.base64Image}/>
                            </div>
                            <UpperSide.Dates start={new Date(eventPageRequest.startTime)} end={new Date(eventPageRequest.endTime)}/>
                            <UpperSide.EventName eventName={eventPageRequest.eventName}/>
                            <div className={"event-page-event-type-join"}>

                                <UpperSide.EventLocation eventType={eventPageRequest.eventDetails}/>
                                {eventPageRequest.eventType === "ONLINE" && new Date(eventPageRequest.startTime)>=now &&new Date(eventPageRequest.endTime) <now && <UpperSide.JoinEvent onClick={() => 5}/>}
                            </div>
                            <div className={"event-page-buttons"}>
                                <div className={"event-page-button-positioning"}>
                                    <UpperSide.About page={page} onClick={() => handleAboutPage(setPage)}/>
                                    <UpperSide.Questions page={page} onClick={() => handleQuestionsPage(setPage)}/>
                                </div>
                                <div className={"event-page-button-positioning"}>
                                    <ButtonAccessForUsers eventId={eventPageRequest.eventId} status={eventPageRequest.status} eventAvailable={true} onClickGoing={openJoinEventModal} onClickLeave={leaveEvent}/>
                                </div>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className={"event-page-down-side"}>
                        <IconContext.Provider value={{color :'#474a4d' ,size:'20px'}}>
                            {
                                page === "ABOUT" ?
                                    <div className={"event-page-event-components"}>
                                        <div className={"event-page-left"}>
                                            <DownSide.Details duration={duration} eventCategory={eventPageRequest.eventCategory} eventPrivacy={eventPageRequest.departments} eventDescription={eventPageRequest.eventDescription}/>
                                            <DownSide.Host picture={eventPageRequest.modImage} name={eventPageRequest.username} department={eventPageRequest.departments}/>
                                        </div>
                                        <div className={"event-page-right"}>
                                            {/*{eventPageRequest.eventType !== "ONLINE" && <DownSide.LocationInfo/>}*/}
                                            <DownSide.GoingInfoForUsers going={eventPageRequest.going} quota={eventPageRequest.quota}/>
                                        </div>
                                    </div>:
                                    <div className={"event-page-event-components"}>
                                        <div className={"event-page-left"}>
                                            <DownSide.AnimatedFormQuestion value={question} onChange={onQuestionChange} onClick={askQuestion}/>
                                            <DownSide.Questions questions={questionList}/>
                                        </div>
                                        <div className={"event-page-right"}>
                                            <DownSide.Details duration={duration} eventCategory={eventPageRequest.eventCategory} eventPrivacy={eventPageRequest.departments} eventDescription={eventPageRequest.eventDescription}/>
                                        </div>
                                    </div>
                            }
                        </IconContext.Provider>
                    </div>
                </>}
                </div>
        </div>
        </>
    );
}