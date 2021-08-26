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
import { validateDateName, validateLocation } from './validate';
import useForm from './useForm';


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

export default function EventAdder() {

    const now = new Date();

    const [newEventQuery,setNewEventQuery] = useState({eventName:"",
    quota:0,
    startTime:new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,now.getHours(),0),
    endTime:new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,now.getHours()+3,0),
    eventType:"",
    eventPublicity:"disabled",
    eventCategory:"",
    eventDescription:"",
    eventQuestions:[]
    });
    const validations = [validateDateName,validateLocation,null,null,null];
    const [pageNumber,setPageNumber] = useState(0);
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);


    const setTrue = () => {
        setIsSubmitted(true);
    }

    const setFalse = () => {
        setIsSubmitted(false);
    }

    const {errors,handleChange,handleSubmit,handleWithKeyAndValue,handleType,handleQuestions} = useForm(pageNumber,newEventQuery,setNewEventQuery,setTrue,setFalse,validations[pageNumber-1]);

    const nextPage = () => {
        if(pageNumber>0 && pageNumber<3){
            handleSubmit();
            setIsSubmitting(true);
            if(isSubmitted){
                setPageNumber(pageNumber+1);
                setIsSubmitting(false);
            }
        }else{
            setPageNumber(pageNumber+1);
            if(pageNumber===0) setIsSubmitted(false);
        }
    }

    const lastPage = () => {
        setPageNumber(pageNumber-1);
    }


    const Sidebar = [
        <SidebarChooseType/>,
        <SidebarDateName isSubmitting={isSubmitting} newEventQuery={newEventQuery} errors={errors} handleChange={handleChange}/>,
        <Location isSubmitting={isSubmitting} handleWithKeyAndValue={handleWithKeyAndValue} errors={errors} handleChange = {handleChange} newEventQuery={newEventQuery}/>,
        <Description newEventQuery={newEventQuery} handleChange={handleChange}/>,
        <Questions handleQuestions={handleQuestions}/>,
        <ImageInput handleWithKeyAndValue={handleWithKeyAndValue} newEventQuery={newEventQuery}/>]
    
    return (
        <>
            <Screen>
                <SideBar>
                    {Sidebar[pageNumber]}
                    {pageNumber>0 && <Control>
                    <div style={{'position':'relative'}}>
                        <BlockPage page={pageNumber}/>
                    </div>
                    <Buttons>
                        <BackButton onClick={lastPage}>Back</BackButton>
                        <NextButton style={!isSubmitted ? {'cursor':'not-allowed','backgroundColor':'#686868'} : null} onClick={nextPage}>{pageNumber< 5 ? "Next" : "Create Event"}</NextButton>
                    </Buttons>
                </Control>}
                </SideBar>
                {pageNumber===0 ? <AddEventTypes handleType={handleType} nextPage={nextPage}/>
                : pageNumber===4 ? 
                <QuestionsPreview handleQuestions={handleQuestions}/>
                :<EventPreView newEventQuery={newEventQuery}/>}
            </Screen>
        </>
    )
}
