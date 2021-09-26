import React from 'react';
import './EditQuestionsPreview.css';
import styled from "styled-components";
import {AiOutlineDelete} from "react-icons/ai";

const DeleteButton = styled(AiOutlineDelete)`
    color:red;
    border-radius:50%;
    width:60px;
    height:60px;
    padding:1rem;
    cursor:pointer;

    &:hover{
        filter:brightness(1.2);
        background-color:#474a4d;
    }

    & svg{
        width:100px;
        height:100px;
    }
`


export default function EditQuestionsPreview({handleWithKeyAndValue,eventQuestions,isSubmitting,errors}){

    const addQuestion = () => {
        let newModel = eventQuestions;

        newModel.push("");

        handleWithKeyAndValue("eventQuestions",newModel);
    }

    const deleteQuestion = (index) => {
        let newModel = eventQuestions;

        newModel.splice(index,1);

        console.log(newModel);

        handleWithKeyAndValue("eventQuestions",newModel);
    }

    const handleQuestion = (event,index) => {
        let newModel = eventQuestions;

        newModel[index] = event.target.value;

        handleWithKeyAndValue("eventQuestions",newModel);
    }


    return(
        <>
            <div className={"edit-questions-preview-model"}>
                <h4>Questions Preview</h4>
                <div className={"edit-questions-preview-interior"}>
                    <div className={"edit-questions-question-grid"}>
                        {eventQuestions.map((value,index) =>{
                            return (
                                <>
                                    <div className={"edit-questions-question-style"}>
                                        <div className={"edit-questions-animated-form"}>
                                            <input style={isSubmitting && errors.eventQuestions && errors.eventQuestions[index] != null ? {'border':'1px solid red'} : null} type="text" id={"question"+index} name={"question"+index} value={eventQuestions[index]} className={"edit-questions-input"} onChange={(event) => handleQuestion(event,index)} autoComplete="off" placeholder=" "/>
                                            <label htmlFor={"question"+index} className={"edit-questions-string"}>Question {index+1}</label>
                                        </div>
                                        <DeleteButton onClick={() => deleteQuestion(index)}/>
                                    </div>
                                </>
                            )})}
                        <button className={"edit-questions-add-question-button"} onClick={addQuestion}>+ Add Question</button>
                    </div>
                </div>
            </div>
        </>
    );
}
