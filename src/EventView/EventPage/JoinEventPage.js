import React, {useEffect, useRef, useState} from "react";
import {EventPageApi} from "../API/EventPageApi";
import {useHistory} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import {sidebarEvents} from "../../components/Sidebar/SidebarData";
import './JoinEventPage.css';
import {toast} from "react-toastify";

const Question = ({value}) => {
    return(
        <div className={"question-template"}>
            <p className={"question-text"}>{value}</p>
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

    const history = useHistory();

    const [questions,setQuestions] = useState(null);

    const [answers,setAnswers] = useState(null);
    const [errors,setErrors] = useState([]);
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [loaded,setLoaded] = useState(false);

    useEffect(async () => {
        const response = await eventPageApi.getQuestions(props.id);

        setQuestions(response);
    },[]);

    useEffect(() => {
        console.log(questions);

        if(questions !== null && questions !== undefined && questions.length!==0){
            setAnswers(Array.apply(null, Array(questions.length)).map(function () { return ""; }) )
        } else if(questions !== null && questions !== undefined && questions.length === 0){
            joinEventWithouthAnswers();
        }
    },[questions]);

    const joinEventWithouthAnswers = async () => {
        toast.configure();

        const response = await eventPageApi.joinEventWithoutAnswers(props.id);

        console.log(response);

        if(response !== null && response !== undefined){
            if(response.messageType === "SUCCESS"){
                toast.success(response.message);
                history.push(`/events/event-page/${props.id}`);
            }else{
                toast.error(response.message);
                history.push(`/events/event-page/${props.id}`);
            }
        }
    }

    useEffect(() => {
        if(answers !== null && answers !== undefined){
            setLoaded(true);
        }
    },[answers])

    useEffect(() => {
        if(isSubmitting && errors.length===0){
            setIsSubmitted(true);
        }
    },[errors]);

    useEffect(() => {
        if(loaded){
            console.log("answers   " + answers);
            setErrors(validateAnswers(answers));
        }
    },[answers])

    const onChange = (event,index) => {
        let temp = answers;

        console.log(event.target.value);

        temp[index] = event.target.value;

        console.log("temp " + temp);

        setAnswers(temp);

        console.log(answers);
    }

    const onClickJoin = async () => {
        setIsSubmitting(true);
        if(true){
            const response = await eventPageApi.joinEventWithAnswers(props.id,answers);

            if(response !== undefined && response !== null){
                if(response.messageType === "SUCCESS"){
                    toast.success(response.message);
                    history.push(`/events/event-page/${props.id}`);
                }else {
                    toast.error(response.message);
                    history.push(`/events/event-page/${props.id}`);
                }
            }
        }
    }

    const onClickCancel = () => {
        history.push(`/events/event-page/${props.eventId}`);
    }

    const ref = useRef(null);

    useEffect(() => {
        if (loaded) {
            const textArea = document.querySelector("textarea");

            textArea.addEventListener("keyup", e => {
                textArea.style.height = "70px";
                let scHeight = e.target.scrollHeight;
                textArea.style.height = `${scHeight}px`;
            });
        }
    },[ref]);

    return(
        <>
            <Sidebar sidebarValues={sidebarEvents} userType={"USER"}/>
        {loaded && <>
            <div className={"questions-page"}>
                <div className={"questions-page-interior"}>
                    <h3>Answer the questions in order to join the event</h3>
                    <div className={"question-page-for-answer"}>
                        {questions.map((value,index) =>
                            (
                                <>
                                    <Question key={index} value={value}/>
                                    <textarea ref={ref} style={isSubmitting && errors[index] !== null ? {'color':'red','border':'1px solid red'} : null} className={"edit-description-input"} onChange={(event) => onChange(event,index)}/>
                                </>
                            ))}
                    </div>
                    <div className={"answered-join-buttons"}>
                        <button className={"cancel-join-button"} onClick={onClickCancel}>
                            Cancel
                        </button>
                        <button className={"answered-join-button"} onClick={onClickJoin}>
                            Submit
                        </button>
                    </div>
                </div>
            </div></>}
        </>
    );


}