import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, {useEffect, useState} from "react";
import * as UpperSide from "../../UpperSide";
import * as DownSide from "../../DownSide";
import * as EditUpperSide from './EditUpperSide';
import '../../UpperSide';
import '../../DownSide.css';
import './EditPreView.css';

export function EditPreView({editEventQuery}) {

    const now = new Date();

    const eventLong = () => {
        dayjs.extend(relativeTime)

        return dayjs(editEventQuery.endTime).from(dayjs(editEventQuery.startTime),true);
    }

    const [duration,setDuration] = useState(eventLong());

    useEffect(() => {
        setDuration(eventLong());
    },[editEventQuery.startTime,editEventQuery.endTime]);

    return (
        <>
            <div className={"edit-preview-model"}>
                <h4>Event Preview</h4>
                <div className={"edit-preview-interior"}>
                    <div className={"edit-preview-upper-side"}>
                        <div className={"edit-preview-image-calender"}>
                            <div className={"edit-preview-calendar"}>
                                <UpperSide.Calendar eventDate={editEventQuery.startTime.getDate().toString()}/>
                            </div>
                            {editEventQuery.base64Image!==null ? <UpperSide.Image base64Image={editEventQuery.base64Image}/> : <div/>}
                            <div/>
                        </div>
                        <UpperSide.Dates start={editEventQuery.startTime} end={editEventQuery.endTime}/>
                        <UpperSide.EventName eventName={editEventQuery.eventName}/>
                        {/*<div className={"edit-event-type-join"}>*/}
                            <UpperSide.EventLocation eventType={editEventQuery.eventType} eventLocationName={editEventQuery.eventLocationName && editEventQuery.eventLocationName}/>
                        {/*</div>*/}
                        <div className={"edit-preview-profile-box"}>
                            <div className={"edit-preview-profile-place"}>
                                <EditUpperSide.ProfileBox base64Image={null} name={editEventQuery.username}/>
                            </div>
                            <div className={"edit-preview-profile-box-buttons"}>
                                <EditUpperSide.DisabledButtons/>
                            </div>
                        </div>
                    </div>
                    <div className={"edit-preview-down-side"}>
                        <div className={"edit-preview-event-components"}>
                            <div className={"edit-preview-left"}>
                                <DownSide.Details duration={duration} eventCategory={editEventQuery.eventCategory} eventPrivacy={editEventQuery.eventPrivacy} eventDescription={editEventQuery.eventDescription}/>
                            </div>
                            <div className={"edit-preview-right"}>
                                {editEventQuery.eventDetails !== "ONLINE" && <DownSide.LocationInfo eventCoordinates={{lat:editEventQuery.lat,lng:editEventQuery.lng,eventLocationName:editEventQuery.eventLocationName}}/>}
                                <DownSide.GoingInfoForUsers going={editEventQuery.going} quota={editEventQuery.quota}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}