import PropTypes from 'prop-types';
import murray from './fillmurray.jpg';
import styled from 'styled-components';
import {AiOutlineStar} from 'react-icons/ai';
import {FiBookmark} from 'react-icons/fi';
import {GoPrimitiveDot} from 'react-icons/go';


const EventBox = styled.div`
    border-radius:8px;
    color:#fff;
    background-color:#242526;
    height:360px;
    width:360px;
    transition:800ms;

    &:hover{
        filter:brightness(1.2);
    }
`

const EventDetails = styled.div`
    
    margin-left:1rem;
` 

const EventImage = styled.img`
    border-top-left-radius:8px ;
    border-top-right-radius:8px ;    
    width:100%;
    height:45%;
`

const EventStartDate = styled.h6`
    padding-top:10px;
    padding-bottom:5px;

`

const EventName = styled.h4`
    padding-bottom:10px;
`

const EventStatus = styled.h5`
    padding-bottom:15x;
`
const EventQuotaDetails = styled.div`
    margin-top:15px;
    display:flex;
    gap:10px;
`

const EventInterestedDetails = styled.h6`

`

const EventGoing = styled.h6`

`

const EventInterestedButton = styled.button`
    display:flex;
    justify-content:center;
    background: #686868;
    margin-top:15px;
    inline-size: 70%;

    padding:7.5px;
    border-radius:8px;

    & svg{
        width:20px;
        height:20px;
    }
`

const EventButtons = styled.div`
    opacity:0.7;
    margin-top:20px;
    display:flex;
    gap:15px;
    bottom:0;
`

const EventSaveButton = styled.button`
    z-index:1000000;  

    display:flex;
    justify-content:center;
    background:#686868;
    margin-top:15px;
    inline-size:20%;
    padding:7.5px;
    border-radius:8px;

    & svg{
        width:20px;
        height:20px;
    }
`



export default function EventBoxTemplate(props) {
    return(
        <>
            <EventBox>
                <EventImage src={murray}></EventImage>
                <EventDetails>
                    <EventStartDate>EVENT DAY GOES HERE</EventStartDate>
                    <EventName>EVENT NAME GOES HERE</EventName>
                    <EventStatus>EVENT STATUS GOES HERE</EventStatus>
                    <EventQuotaDetails>
                        <EventInterestedDetails>256 interested</EventInterestedDetails>
                        <EventGoing><GoPrimitiveDot/>65 going</EventGoing>
                    </EventQuotaDetails>
                    <EventButtons>
                        <EventInterestedButton><AiOutlineStar/>INTERESTED</EventInterestedButton>
                        <EventSaveButton><FiBookmark/>SAVE</EventSaveButton>
                    </EventButtons>
                </EventDetails>
            </EventBox>
        </>
    );
}