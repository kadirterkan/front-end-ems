import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SidebarChooseType from './SidebarChooseType';
import SidebarDateName from './SidebarDateName';
import AddEventTypes from './AddEventTypes';
import {Types} from './AddEventData';
import Location from './Location';
import BlockPage from './BlockPage';
import EventPreView from './EventPreView';
import DialogModel from './DialogModel';
import Questions from './Questions';
import QuestionsPreview from './QuestionsPreview';
import Description from './Description';
import ImageInput from './ImageInput';

const Screen = styled.div`
    position:fixed;
    display:grid;
    margin:0;
    left:0;
    top:0;
    width:100%;
    height:100%;
    grid-template-columns: 22% 78%;
`




const EventAddScreen = styled.div`
    margin-top:60px;
    margin-left:320px;

    position:absolute;
`

const SideBar = styled.div`
    position:relative;
    border-right: 1px solid #474a4d;
    background-color: #242526;
    margin-top:60px;
    height:100%;
    padding: 0;
    z-index: 1;
    
    gap:10px;
`

const Control = styled.div`
    border-top:1px solid #474a4d;
    padding:1rem;
    height:22%;
    width:100%;
    position:absolute;
    left:0;
    bottom:0;
`

const Buttons = styled.div`
    margin-top:1.5rem;
    position:relative;
    width:100%;
    display:grid;
    gap:10px;
    grid-template-columns: 20% 80%;
`

const BackButton = styled.button`
    border:none;
    color:#fff;
    border-radius:8px;
    height:3rem;
    background-color:#686868;
    transition:800ms;
    cursor:pointer;

    &:hover{
        filter:brightness(1.2);

    }
`

const NextButton = styled.button`
    color:#fff;
    border:none;
    justify-text:center;
    border-radius:8px;
    background-color:#1560bd;
    transition:800ms;
    cursor:pointer;

    &:hover{
        filter:brightness(1.2);

    }
`





export default function EventAdder() {

    const [pageNumber,setPageNumber] = useState(0);
    const [showModel,setShowModel] = useState(false);
    const [loading,setLoading] = useState(false);

    const openModel = () => {
        setShowModel(prev => !prev);
    }

    const setEventType = (eventType) => {

        
        let newModel = {...newEvent};

        if(eventType==="physical"){
            newModel.eventCoordinates = {lat:0,lng:0,eventLocationName:""};
        }else{
            newModel.eventUrl="";
        }

        newModel.eventType = eventType;
        
        setNewEvent(newModel);

        setPageNumber(pageNumber+1);
    }

    const setDescription = (event) => {
        let newModel = {...newEvent};

        newModel.eventDescription = event.target.value;

        setNewEvent(newModel);
    }

    const setImage = (base64Image) => {
        let newModel = {...newEvent};

        newModel.base64Image = base64Image;

        setNewEvent(newModel);
    }


    const [newEvent,setNewEvent] = useState({
        eventName:"",
        quota:0,
        startTime:new Date(),
        endTime:new Date(),
        eventType:"",
        eventCategory:"",
        eventDescription:"",
        eventQuestions:[]
        });

    const Sidebar = [<SidebarChooseType/>,
        <SidebarDateName 
        newEvent={newEvent} 
        setNewEvent={setNewEvent}/>,
        <Location newEvent={newEvent} setNewEvent={setNewEvent}/>,<Description description={newEvent.description} onChange={setDescription}/>,<Questions/>,<ImageInput setEventImage={setImage} setLoading={setLoading}/>]
    
    return (
        <>
            <Screen>
                <SideBar>
                    {Sidebar[pageNumber]}
                    {pageNumber>0 ? <Control>
                        <div style={{'position':'relative'}}>
                            <BlockPage page={pageNumber}/>
                        </div>
                        <Buttons>
                            <BackButton onClick={() => setPageNumber(pageNumber-1)}>Back</BackButton>
                            <NextButton onClick={() => setPageNumber(pageNumber+1)}>{pageNumber>4 ? "Create Event" : "Next"}</NextButton>
                        </Buttons>
                    </Control> : null}
                </SideBar>
                {pageNumber===0 ? <AddEventTypes setEventType={setEventType}/>
                : pageNumber===4 ? 
                <QuestionsPreview/>
                :<EventPreView newEvent={newEvent}/>}
            </Screen>
        </>
    )
}
