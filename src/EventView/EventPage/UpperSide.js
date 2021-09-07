import React, {useEffect} from "react";
import {AiFillCheckCircle, AiFillStar, AiOutlineCheckCircle, AiOutlineStar} from "react-icons/ai";
import {ImCross, MdModeEdit} from "react-icons/all";
import './UpperSide.css';
import dayjs from "dayjs";
import {Link, NavLink} from "react-router-dom";
import {ColorExtractor} from "react-color-extractor";
import ColorThief from "colorthief/dist/color-thief";


export class Calendar extends React.Component {

    render() {
        return(
            <div className={"upper-calendar"}>
                <div className={"upper-up"}/>
                <div className={"upper-down"}>
                    <h1 className={"upper-date"}>{this.props.eventDate}</h1>
                </div>
            </div>
        );
    }
}

export function Image(props){

    // let colorThief = new ColorThief();
    //
    // useEffect(() => {
    //     const img = document.querySelector('img');
    //
    //     if (img.complete) {
    //         colorThief.getColor(img);
    //     } else {
    //         img.addEventListener('load', function() {
    //             let color = colorThief.getColor(img);
    //             img.style.boxShadow = `20px 5px 40px  rgba(${color}, 0.2), 0px 5px 40px rgba(${color}, 0.2), -20px 5px 40px rgba(${color}, 0.2)`;
    //             console.log(color[0] + "IN THE FUNC");
    //         });
    //     }
    //
    //
    // },[props.base64Image]);

    return(

        <div className={"upper-image-pos"}>
        </div>
    );
}

export class Dates extends React.Component{

    render() {

        return(
            <div className={"upper-dates"}>
                {dayjs(this.props.start).format("dddd, MMMM D YYYY [AT] hh:mm").toUpperCase()} - {dayjs(this.props.end).format("dddd, MMMM D YYYY [AT] hh:mm").toUpperCase()}
            </div>
        )
    }
}

export class EventName extends React.Component{

    render() {
        return (
            <h1 className={"upper-event-name"}>
                {this.props.eventName ? this.props.eventName : <span style={{'color':'#474a4d'}}>Event Name</span>}
            </h1>
        );
    }
}

export class EventLocation extends React.Component{

    render() {
        return (
            <h5 className={"upper-event-type"}>
                {this.props.eventType === "ONLINE" ? <>ONLINE</> : this.props.eventLocationName === "" ? <>PHYSICAL</> : this.props.eventLocationName}
            </h5>
        );
    }
}

export class JoinEvent extends React.Component{

    render() {
        const now = new Date();

        return (
            <>
                {this.props.start <= now ?
                <button className={"upper-started-event"} onClick={this.props.onClick}>
                    Join Event
                </button> :
                <button className={"upper-started-event"} disabled>
                    Join Event
                </button> }
            </>
        );
    }
}

export class About extends React.Component{

    render() {
        return (
            <>
                {this.props.page==="ABOUT" ?
                    <button className={"upper-at-the-page-button"} disabled={true} >
                        About
                    </button> :
                    <button className={"upper-at-the-page-button-no"} onClick={this.props.onClick} >
                        About
                    </button>
                }
            </>
        );
    }
}

export class Questions extends React.Component{

    render() {
        return (
            <>
                {this.props.page==="QUESTIONS" ?
                <button className={"upper-at-the-page-button"} disabled={true} >
                    Questions
                </button> :
                <button className={"upper-at-the-page-button-no"} onClick={this.props.onClick} >
                    Questions
                </button> }
            </>
        );
    }
}

export class Going extends React.Component{

    render() {
        return (
            <>
                    {this.props.eventAvailable ?
                        this.props.status === "GOING" ?
                        <NavLink to={`/events/event-page/join-event/${this.props.eventId}`} className={"upper-going-interested-buttons"} onClick={this.props.onClick}>
                            <AiOutlineCheckCircle/> GOING
                        </NavLink> :
                        <NavLink to={`#`} className={"upper-going-interested-buttons"} onClick={this.props.onLeave}>
                            <AiFillCheckCircle/> LEAVE
                        </NavLink> :
                        this.props.status === "GOING" ?
                            <NavLink to={"#"} className={"upper-event-going-ended"} disabled={true}>
                            <AiFillCheckCircle/> Joined
                            </NavLink> :
                            <NavLink to={"#"} className={"upper-event-going-ended"} disabled={true}>
                                <ImCross/> Event Ended
                            </NavLink>
                    }
            </>
        );
    }
}

export class Interested extends React.Component{

    render() {
        return (
            <>
                {this.props.eventAvailable ?
                    this.props.status === "INTERESTED" ?
                    <button className={"upper-going-interested-buttons"} onClick={this.props.onClick}>
                        <AiFillStar/> Interested
                    </button> :
                    <button className={"upper-going-interested-buttons"} onClick={this.props.onClick}>
                        <AiOutlineStar/> Interested
                    </button> :
                    <button className={"upper-going-interested-buttons"} disabled={true}>
                    </button>
                }
            </>
        );
    }
}

export class Edit extends React.Component{

    render() {
        return (
            <>
            {this.props.eventAvailable ?
                <Link to={{pathname:`/events/edit-event/${this.props.id}`,oldValues:this.props.oldValues}} className={"upper-edit-button"}>
                    <MdModeEdit color={"#fff"}/> Edit
                </Link> :
                <Link className={"upper-edit-event-ended"} disabled={true}>
                    <ImCross color={"#fff"}/> Event Ended
                </Link> }
            </>
        );
    }
}

export class Cancel extends React.Component{

    render() {
        return (
            <>
            {this.props.eventAvailable ?
                <button className={"upper-cancel-event-button"} onClick={this.props.onClick}>
                    <ImCross color={"#fff"}/> Cancel Event
                </button> :
                <button className={"upper-cancel-event-ended"} disabled={"true"}>
                    <ImCross color={"#fff"}/> Event Ended
                </button>
            }
            </>
        );
    }
}