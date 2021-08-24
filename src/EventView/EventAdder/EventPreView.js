import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {IoCalendarClearOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi';
import {AiOutlineCheckCircle,AiOutlineStar} from 'react-icons/ai';
import {GiSandsOfTime} from 'react-icons/gi';
import {HiUsers,HiOfficeBuilding} from 'react-icons/hi';
import {BsFillLockFill} from 'react-icons/bs';
import * as dayjs from 'dayjs'

const Model = styled.div`
    position:relative;
    margin:5rem;
    border-radius:8px;
    background-color:#242526;
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

const EventType = styled.h4`
    color:#fff;
    
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
    padding:1rem;
    display:grid;
    grid-template-columns:50% 50%;
    gap:0.5rem;
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
    position:relative;
    display:grid;
    padding:1rem;
    gap:1rem;
    border-radius:8px;
    background-color:#242526;
`

const DetailsName = styled.h3`
    color:#fff;
`

const TimeLabel = styled.div`

`

const Publicity = styled.div`

`

const Description = styled.div`
    max-width:30rem;
    word-wrap: break-word;
`
const LocationGuest = styled.div`
    display:grid;
    gap:1rem;
`

const LocationLook = styled.div`
    background-color:#242526;
    margin-right:1rem;
    border-radius:8px;
`

const LocationValues = styled.div`
    display:grid;
    padding:1rem;
`


const GuestList = styled.div`
    position:relative;
    margin-right:1rem;
    padding:1rem;
    display:grid;
    gap:1rem;
    border-radius:8px;
    background-color:#242526;
`

const GuestName = styled.h3`
    color:#fff;
`

const GoingInterested = styled.div`

    display:flex;
`

const PeopleGoInt = styled.div`
    text-align:center;
    margin-left:3rem;
    margin-right:3rem;
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

export default function EventPreView({newEvent}) {


    const eventLong = () => {
        var relativeTime = require('dayjs/plugin/relativeTime')
        dayjs.extend(relativeTime)


        return dayjs(newEvent.endTime).from(dayjs(newEvent.startTime),true);
    }

    const [duration,setDuration] = useState(eventLong());


    useEffect(() => {
        setDuration(eventLong());
    },[newEvent.startTime,newEvent.endTime])
    
    return(
        <>
        <Model>
            <h4>Event Preview</h4>
            <Interrior>
                <Upperside>
                    {newEvent.base64Image!=null ? <ImgCalendar>
                        <Calendar><div className="up"></div><div className={"down"}><h1>{newEvent.startTime.getDate()}</h1></div></Calendar>
                        <Image src={newEvent.base64Image}></Image>
                    </ImgCalendar> :<Calendar style={{'position':'static'}}><div className="up"></div><div className={"down"}><h1>{newEvent.startTime.getDate()}</h1></div></Calendar>}
                    <Dates>{newEvent.startTime.toString()} - {newEvent.endTime.toString()}</Dates>
                        <EventName>{newEvent.eventName === "" ? "Event Name" : newEvent.eventName}</EventName>
                        <TypeJoin>
                            <EventType>{newEvent.eventType === "online" ? "Online" 
                            : (newEvent.eventCoordinates !=null ? newEvent.locationName: "Location")}</EventType>
                        </TypeJoin>
                    <Creator>
                        <Profile>
                            <ProfileIcon><BiUserCircle/><h4>NAME GOES HERE</h4></ProfileIcon>
                            <RightButtons >
                                <Interested><AiOutlineStar/><h3>Interested</h3></Interested>
                                <Going><AiOutlineCheckCircle/><h3>Going</h3></Going>
                            </RightButtons>
                        </Profile>
                    </Creator>
                </Upperside>
                <DownSide>
                    
                    <Details>
                        <DetailsName>Details</DetailsName>
                        <TimeLabel><GiSandsOfTime/> {duration}</TimeLabel>
                        {newEvent.eventPublicity && (<Publicity><HiOfficeBuilding/> {newEvent.eventPublicity === "company" ? "Company - Only for the people in your Company" : "Department - Only for the people in your Department"}</Publicity>)}
                        <Description><p>{newEvent.eventDescription}</p></Description>
                    </Details>
                    <LocationGuest>
                        {newEvent.eventCoordinates !=null ? (<LocationLook><LocationValues>{newEvent.eventCoordinates.locationName}</LocationValues></LocationLook>) : null}
                        <GuestList>
                            <SeeAll>See All</SeeAll>
                            <GuestName>Guest List</GuestName>
                            <GoingInterested>
                                <PeopleGoInt>
                                    <h4>1</h4>
                                    <h5>GOING</h5>
                                </PeopleGoInt>
                                <PeopleGoInt>
                                    <h4>{newEvent.quota === 0 ? "Quota" : newEvent.quota }</h4>
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
        </>
    )
}