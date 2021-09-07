import React, {useEffect, useState} from "react";
import {EventPageApi} from "../API/EventPageApi";
import './JoinEventModal.css';


const Question = ({value,eventId}) => {
    return(
        <div className={"question-template"}>
            <p className={"question-text"}>value</p>
        </div>
    );
}

const validateAnswers = (values) => {
    let errors = [];

    if(values.length !==0){
        let check = false;
        values.forEach((element) => {
            if(element.length === 0){
                check = true;
                errors.push("Enter the answer");
            }else{
                errors.push(null);
            }
        })
        if(!check){
            errors=[];
        }
    }

    return errors;
}


export default function JoinEventPage(props){

    const eventPageApi = new EventPageApi();

    const [answers,setAnswers] = useState(Array.apply(null, Array(props.eventQuestions.length)).map(function () { return ""; }) );
    const [errors,setErrors] = useState([]);
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);

    useEffect(() => {
        if(isSubmitting && errors.length===0){
            setIsSubmitted(true);
        }
    },[errors]);

    useEffect(() => {
        setErrors(validateAnswers(answers));
    },[answers])

    const onChange = (event,index) => {
        let temp = answers;

        answers[index] = event.target.value;

        setAnswers(temp);
    }

    const onClickJoin = () => {
        setIsSubmitting(true);
        if(isSubmitted){
            eventPageApi(props.eventId,answers);
        }
    }

    const onClickCancel = () => {
        props.setJoinEventModal(false);
    }

    return (
        <div className={"join-event-page"}>
            <div className={"join-event-view"}>
                <h3>Answer the questions in order to join the event</h3>
                <div className={"question-list-for-answer"}>
                    {props.eventQuestions.map((value,index) =>
                        (
                            <>
                                <Question key={index} value={value}/>
                                <textarea style={isSubmitting && errors[index] !== null ? {'color':'red','border':'1px solid red'} : null} className={"auto-answer"} value={answers[index]} onChange={(event) => onChange(event,index)}/>
                            </>
                        ))}
                </div>
                <div className={"answered-join-buttons"}>
                    <button className={"cancel-join-button"} onClick={onClickCancel}>
                        Cancel
                    </button>
                    <button className={"answered-join-button"} onClick={onClickJoin}>
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
}