import React from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import './EventBoxTemplate.css';
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function EventBoxTemplate(props) {

    const [disabled,setDisabled] = React.useState(false);

    const eventLong = () => {
        dayjs.extend(relativeTime)

        return dayjs(props.eventBoxResponse.endTime).from(dayjs(props.eventBoxResponse.startTime),true);
    }

    const onMouseOver = () => setDisabled(true);

    const onMouseLeft = () => setDisabled(false);

    return(
        <>
            <Link to={props.userType === 'MOD' ? `/mod-view/event-page/${props.eventBoxResponse.eventId}` : `/events/event-page/${props.eventBoxResponse.eventId}`} className={"event-box"}>
                <img src={props.eventBoxResponse.base64Image ? props.eventBoxResponse.base64Image : null} className={"event-box-image"}/>
                <div className={"event-box-details"}>
                    <h6 className={"event-box-start-date"}>{dayjs(props.eventBoxResponse.startTime).format("dddd, MMMM D YYYY [AT] hh:mm").toUpperCase()}</h6>
                    <h4 className={"event-box-name"}>{props.eventBoxResponse.eventName}</h4>
                    <h5 className={"event-box-status"}>{props.eventBoxResponse.available}</h5>
                    <div className={"event-box-duration"}>{eventLong()}</div>
                    <div className={"event-box-info"}>
                        <div className={"event-box-going"}>{props.eventBoxResponse.going} people going</div>
                        <div className={"event-box-quota"}>{props.eventBoxResponse.quota} quota</div>
                    </div>
                </div>
            </Link>
        </>
    )
}