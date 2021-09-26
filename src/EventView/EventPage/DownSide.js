import React, {useEffect, useRef} from "react";
import {GiSandsOfTime} from "react-icons/gi";
import {HiOfficeBuilding} from "react-icons/hi";
import {AiFillLock, AiOutlineInfoCircle} from "react-icons/ai";
import {privacyValues} from "../EventAdder/departments";
import {FaQuestion} from "react-icons/all";
import './DownSide.css';
import {Marker, StaticMap} from "react-map-gl";
import {FaMapMarkerAlt} from "react-icons/fa";

export class Details extends React.Component{

    render() {
        return (
                <div className={"details"}>
                    <h3>Details</h3>
                    <div className={"event-details-standard"}><GiSandsOfTime/> <div>{this.props.duration}</div></div>
                    <div className={"event-details-standard"}><AiOutlineInfoCircle/> <div>{this.props.eventCategory}</div></div>
                    <div className={"event-details-standard"}>{this.props.eventPrivacy === "ALL" ? <><HiOfficeBuilding/> Company </> : <><div><AiFillLock/> Locked : </div> <div>{privacyValues.filter(value => value.name === this.props.eventPrivacy)[0].icon}</div><div>{privacyValues.filter(value => value.name === this.props.eventPrivacy)[0].title}</div> </>}</div>
                    <div className={"event-description"}><div>{this.props.eventDescription}</div></div>
                </div>
        );
    }
}

export class Host extends React.Component{

    ProfilePic({picture}){
        return(
            <div className={"profile-picture"}>
                <img className={"picture"} src={picture}/>
            </div>
        )
    }

    render() {
        return (
            <div className={"host"}>
                <h3>Host</h3>
                <div className={"profile"}>
                    <this.ProfilePic picture={this.props.picture}/>
                    <div className={"host-values"}>
                        <h4>{this.props.name}</h4>
                        <h6 className={"department"}>From Department : {privacyValues.filter(value => value.name === this.props.department)[0].icon} {this.props.department}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export class LocationInfo extends React.Component{

    PhysicalLocation = ({eventCoordinates}) => {

        return(

            <StaticMap
                className={"down-side-static-map"}
                mapboxApiAccessToken={"pk.eyJ1IjoiZmxvd215dGVhcnMiLCJhIjoiY2tzdzM1N2FwMXc4YjJxbjFwenh1MmkzMiJ9.b4TjcSITKdwiZ8Wv39LZLQ"}
                width="100%"
                height="300px"
                latitude={eventCoordinates.lat}
                longitude={eventCoordinates.lng}
                zoom={15}>
                <Marker  latitude={eventCoordinates.lat} longitude={eventCoordinates.lng}>
                    <FaMapMarkerAlt style={{'color':'red'}}/>
                </Marker>
            </StaticMap>
        );
    }

    render() {
        return (
            <div className={"location-info"}>
                <this.PhysicalLocation eventCoordinates={this.props.eventCoordinates}/>
                <span className={"down-side-location-name"}>{this.props.eventCoordinates.eventLocationName}</span>
            </div>
        );
    }
}

export class GoingInfoForUsers extends React.Component{

    render() {
        return (
            <div className={"going-info"}>
                {/*<button className={"see-all"}>See All</button>*/}
                <h3>Guest List</h3>
                <div className={"going-interested-info"}>
                    <div className={"going-interested"}>
                        <h4>{this.props.going}</h4>
                        <h5>Going</h5>
                    </div>
                    <div className={"going-interested"}>
                        <h4>{this.props.quota}</h4>
                        <h5>Quota</h5>
                    </div>
                    {/*<div className={"going-interested"}>*/}
                    {/*    <h4>{this.props.interested}</h4>*/}
                    {/*    <h5>Interested</h5>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export class GoingInfoForMods extends React.Component{

    render() {
        return (
            <div className={"going-info"}>
                <button className={"see-all"} onClick={this.props.onClick}>See All</button>
                <h3>Guest List</h3>
                <div className={"going-interested-info"}>
                    <div className={"going-interested"}>
                        <h4>{this.props.going}</h4>
                        <h5>Going</h5>
                    </div>
                    <div className={"going-interested"}>
                        <h4>{this.props.quota}</h4>
                        <h5>Quota</h5>
                    </div>
                    {/*<div className={"going-interested"}>*/}
                    {/*    <h4>{this.props.interested}</h4>*/}
                    {/*    <h5>Interested</h5>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

// export class AnimatedFormQuestion extends React.Component{
//
//     constructor(props) {
//         super(props);
//
//     }
//
//     render() {
//
//
//     }
// }

export function AnimatedFormQuestion(props) {

    const ref = useRef(null);


    useEffect(() => {
        const textArea = document.querySelector("textarea");

        textArea.addEventListener("keyup", e => {
            textArea.style.height = "70px";
            let scHeight = e.target.scrollHeight;
            textArea.style.height = `${scHeight}px`;
        });
    },[ref]);

    return (
        <div className={"ask-question"}>
            <div className={"animated-form"}>
                <textarea ref={ref} type={"text"} id={"questionForm"} name={"questionForm"} className={"input"} onChange={props.onChange} autoComplete="off" placeholder=" "/>
                <label htmlFor={"questionForm"} className={"string"}>Enter a question</label>
            </div>
            <div className={"button-place"}>
                <button className={"ask-button"} onClick={props.onClick}><FaQuestion color={"#fff"}/> Ask</button>
            </div>
        </div>
    );
}

export class Questions extends React.Component{

    question({value,key}){
        console.log("TEST");
        return(
            <div key={key} className={"question"}>
                <div className={"question-text"}>{value.question}</div>
                <div className={"asker-info"}>
                    <div className={"question-asker"}>{value.askedBy}</div>
                    <div className={"question-time"}>{value.time}</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={"question-list"}>
                {this.props.questions!=null && this.props.questions.map((value,index) => {
                    this.question({value,index});
                })}
            </div>
        );
    }
}