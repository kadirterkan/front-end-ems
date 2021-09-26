import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import {BiUserCircle} from 'react-icons/bi';
import {AiOutlineCheckCircle,AiOutlineStar,AiOutlineInfoCircle,AiFillLock,AiFillUnlock} from 'react-icons/ai';
import {GiSandsOfTime} from 'react-icons/gi';
import {privacyValues} from './departments';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {StaticMap,Marker} from 'react-map-gl';

import * as dayjs from 'dayjs';
import { set } from 'react-hook-form';

const Model = styled.div`
    position:relative;
    margin-left: 5rem;
    margin-top: 2rem;
    margin-right: 5rem;    
    border-radius:8px;
    background-color:#242526;
    height: 600px;
    color:#fff;
    padding:1rem;
    border:1px solid #474a4d;
`

const Interrior = styled.div`
    position:absolute;
    overflow-x:hidden;
    overflow-y:auto;
    height:90%;
    width:97%;
    margin-top:1rem;
    background:none;
    border-radius:8px;
    border:1px solid #474a4d;
    display:grid;
`

const Upperside = styled.div`
    height:50%;
    display:grid;
`

const ImgCalendar = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Calendar = styled.div`
    position:absolute;
    left:0;
    bottom:0;
    border-radius:8px;
    width:70px;
    height:80px;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
    margin:2rem;
    .up{
        background-color:red;
        position:relative;
        height:20%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;    
    }

    .down{
        text-align: center;
        position:relative;
        height:80%;
    }

    h1{
        top:8%;
        position:relative;
        text-align:center;
        font-size:35px;
    }
`

const Image = styled.img`
    max-height:300px;
    max-width:75%;
    border-radius:8px;
`

const Dates = styled.h4`
    margin-top:1rem;
    color:red;
    margin-left:1rem;
    font-size:80%;
`

const Creator = styled.div`
    filter:brightness(0.7);
    margin-left:0.7rem;
    margin-top:0.4rem;
    margin-right:0.7rem;
    margin-bottom:1rem;
    padding:0.5rem;
    background:#686868;
    border-radius:8px;
    border:none;
    justify-content:space-between;
    gap:2rem;
`

const Profile = styled.div`
    display:grid;
    justify-content:space-between;
    grid-template-columns:auto auto;
    gap:2rem;

`

const ProfileIcon = styled.div`
    padding:5px;
    gap:1px;
    border-radius:50%;
    border:none;
    display:flex;


    & svg{
        width:20px;
        height:20px;
    }
`



const TypeJoin = styled.div`
    margin-top:0.7rem;
    margin-left:1rem;
    justify-content:space-between;
    gap:2rem;
`

const EventName = styled.h3`
    max-width:56rem;
    word-wrap: break-word;
    margin-top:0.7rem;
    color:#fff;
    margin-left:1rem;
`

const EventType = styled.h5`
    color:#fff;
    margin-top:0.7rem;
    margin-left:1rem;
`

const OnlineEvent = styled.button`
    margin-right:0.7rem;
    position:relative;
    bottom:1rem;
    height:2rem;
    background-color:green;
    border:none;
    border-radius:8px;
    color:#fff;
    transition:800ms;

    &:hover{
        filter:brightness(1.3);
    }
`

const DownSide = styled.div`
    display:grid;
    grid-template-columns:60% 40%;
    position:relative;
    background-color:#151616;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

const RightButtons = styled.div`
    display:flex;
    gap:5px;
`

const Interested = styled.button`
    display:grid;
    justify-content:space-between;
    grid-template-columns:auto auto;
    gap:4px;
    padding:5px;
    border-radius:8px;
    color:#fff;
    border:1px solid #474a4d;
    background:none;

    & svg{
        width:20px;
        height:20px;
    }
`

const Going = styled.button`
    display:grid;
    justify-content:space-between;
    grid-template-columns:auto auto;
    gap:4px;
    padding:5px;
    border-radius:8px;
    color:#fff;
    border:1px solid #474a4d;
    background:none;

    & svg{
        width:20px;
        height:20px;
    }
`

const Details = styled.div`
    margin:1rem;
    display:grid;
    gap:1rem;
    position:relative;
    padding:1rem;
    border-radius:8px;
    background-color:#242526;
    height: fit-content;
`

const DetailsName = styled.h3`
    color:#fff;
`

const TimeLabel = styled.div`

`

const CategoryLabel = styled.div`

`

const Publicity = styled.div`
    position:relative;
    display:flex;

`

const Description = styled.div`
    max-width:25rem;
    word-wrap: break-word;
`
const LocationGuest = styled.div`
    margin-top:1rem;
    display:grid;
    gap:1rem;
`

const LocationLook = styled.div`
    display:grid;
    gap:1rem;
    background-color:#242526;
    margin-right:1rem;
    border-radius:8px;
`

const LocationValues = styled.div`
    display:grid;
    padding:1rem;
`

const GuestList = styled.div`
    height:150px;
    position:relative;
    padding:1rem;
    display:grid;
    border-radius:8px;
    background-color:#242526;
    margin-right:1rem;
    margin-bottom:1rem;
`

const GuestName = styled.h3`
    color:#fff;
`

const GoingInterested = styled.div`
    display:flex;
    justify-content:space-between;
`

const PeopleGoInt = styled.div`
    text-align:center;
    display:grid;
`

const SeeAll = styled.button`
    position:absolute;
    top:15px;
    right:10px;
    border:none;
    background:none;
    color:#fff;
    cursor:pointer;
`

const Static = styled(StaticMap)`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width:100%;
`

const EventDescription = ({eventDescription}) => {

    return(
        <>
        <Description><p>{eventDescription}</p></Description>
        </>
    );
}

const PhysicalLocation = ({eventCoordinates}) => {

    return(

        <Static
        mapboxApiAccessToken={"pk.eyJ1IjoiZmxvd215dGVhcnMiLCJhIjoiY2tzdzM1N2FwMXc4YjJxbjFwenh1MmkzMiJ9.b4TjcSITKdwiZ8Wv39LZLQ"}
        width="100%"
        height="300px"
        latitude={eventCoordinates.lat}
        longitude={eventCoordinates.lng}
        zoom={15}>
            <Marker  latitude={eventCoordinates.lat} longitude={eventCoordinates.lng}>
                <FaMapMarkerAlt style={{'color':'red'}}/>
            </Marker>
        </Static>
        );
}

export default function EventPreView({newEventQuery,isLoading}) {

    const eventLong = () => {
        var relativeTime = require('dayjs/plugin/relativeTime')
        dayjs.extend(relativeTime)

        return dayjs(newEventQuery.endTime).from(dayjs(newEventQuery.startTime),true);
    }

    const [duration,setDuration] = useState(eventLong());

    useEffect(() => {
        setDuration(eventLong());
    },[newEventQuery.startTime,newEventQuery.endTime]);
    
    return(
        <>
            <div style={{'margin-top':'60px'}}>
                <Model>
                    <h4>Event Preview</h4>
                    <Interrior>
                        <Upperside>
                            {newEventQuery.base64Image!=null ? <ImgCalendar>
                                <Calendar><div className="up"></div><div className={"down"}><h1>{newEventQuery.startTime.getDate()}</h1></div></Calendar>
                                <Image src={newEventQuery.base64Image}></Image>
                            </ImgCalendar> :<Calendar style={{'position':'static'}}><div className="up"></div><div className={"down"}><h1>{newEventQuery.startTime.getDate()}</h1></div></Calendar>}
                            <Dates>{newEventQuery.startTime.toString()} - {newEventQuery.endTime.toString()}</Dates>
                            <EventName>{newEventQuery.eventName === "" ? "Event Name" : newEventQuery.eventName}</EventName>
                            {newEventQuery.eventCoordinates ? <EventType>{newEventQuery.eventCoordinates.eventLocationName !="" ? <p>{newEventQuery.eventCoordinates.eventLocationName}</p> : <p>Location</p>}</EventType> : null}
                            {newEventQuery.eventType === "ONLINE" ? <EventType>Online</EventType> : null }
                            <Creator>
                                <Profile>
                                    <ProfileIcon><BiUserCircle/><h4>NAME GOES HERE</h4></ProfileIcon>
                                    <RightButtons >
                                        {/*<Interested><AiOutlineStar/><h3>Interested</h3></Interested>*/}
                                        <Going><AiOutlineCheckCircle/><h3>Going</h3></Going>
                                    </RightButtons>
                                </Profile>
                            </Creator>
                        </Upperside>
                        <DownSide>
                            <Details>
                                <DetailsName>Details</DetailsName>
                                <TimeLabel><GiSandsOfTime/> {duration}</TimeLabel>
                                <CategoryLabel> {newEventQuery.eventCategory != "" && <p><AiOutlineInfoCircle/> {newEventQuery.eventCategory}</p>}</CategoryLabel>
                                {newEventQuery.eventPrivacy != "disabled" ? (<Publicity><p>Privacy {newEventQuery.eventPrivacy != "ALL" ? <><AiFillLock/> (Locked) </> : <><AiFillUnlock/> (All Available)</>}  : {privacyValues.filter(value => value.name == newEventQuery.eventPrivacy)[0].icon} {privacyValues.filter(value => value.name == newEventQuery.eventPrivacy)[0].title}</p></Publicity>) : null}
                                <EventDescription eventDescription={newEventQuery.eventDescription}/>
                            </Details>
                            <LocationGuest>
                                {newEventQuery.eventCoordinates &&  newEventQuery.eventCoordinates.eventLocationName!="" ? (<LocationLook><PhysicalLocation eventCoordinates={newEventQuery.eventCoordinates}/><LocationValues>{newEventQuery.eventCoordinates.eventLocationName}</LocationValues></LocationLook>) : null}
                                <GuestList>
                                    <SeeAll>See All</SeeAll>
                                    <GuestName>Guest List</GuestName>
                                    <GoingInterested>
                                        <PeopleGoInt>
                                            <h4>1</h4>
                                            <h5>GOING</h5>
                                        </PeopleGoInt>
                                        <PeopleGoInt>
                                            <h4>{newEventQuery.quota === 0 ? "Quota" : newEventQuery.quota }</h4>
                                            <h5>QUOTA</h5>
                                        </PeopleGoInt>
                                        <PeopleGoInt>
                                            <h4>0</h4>
                                            <h5>INTERESTED</h5>
                                        </PeopleGoInt>
                                    </GoingInterested>
                                </GuestList>
                            </LocationGuest>
                        </DownSide>
                    </Interrior>
                </Model>
            </div>
        </>
    )
}