import React,{useState} from 'react'
import styled from 'styled-components';
import { AddModel, EditModel } from './DialogModels';
import {AiOutlineDelete} from 'react-icons/ai';
import {FaRegEdit} from 'react-icons/fa';
import useForm from './useForm';


const AnimatedForm = styled.div`
position:relative;
display:grid;
height:3rem;


.input{
    border-radius:8px;
    border:1px solid #474a4d;
    box-shadow: none;
    width:900px;
    box-sizing:border-box;
    padding:1.25rem;
    background:none;
    color:#fff;
}

.string{
    position:absolute;
    left:1rem;
    padding:0 0.5rem;
    color:#fff;
    cursor:text;
    transition: 200ms;
    top:1.20rem;
}

.size{
    position:absolute;
    visibility:hidden;
}



.input:focus ~ .string,
.input:not(:placeholder-shown).input:not(:focus) ~ .string{
    color:rgba(90, 180, 255,1);
    top:0.2rem;
    font-size:0.8rem;
    left:0.8rem;
}


.input:focus ~ .size,
.input:not(:placeholder-shown).input:not(:focus) ~ .size{
    color:#fff;
    top:0.2rem;
    font-size:0.7rem;
    right:5px;
    visibility:visible;
}

`

const Model = styled.div`
    margin:5rem;
    border-radius:8px;
    background-color:#242526;
    color:#fff;
    padding:0.5rem;
    border:1px solid #474a4d;
    `

const InterriorModel = styled.div`
    position:relative;
    height:520px;
    margin-top:1rem;
    background:none;
    border-radius:8px;
    border:1px solid #474a4d;
    display:grid;
    gap:1rem;
    overflow-y:auto;
    overflow-x:hidden;
`

const Interrior = styled.div`
    background:none;
    position:absolute;
    height:100%;
    width:100%;
`


const QuestionGrid = styled.div`
    margin-left:1.2rem;
    margin-right:1.2rem;
    margin-top:1rem;
    display:grid;
    gap:1rem;
    max-height:70%;
`

const AddButton = styled.button`
    color:#fff;
    border:none;
    padding:20px;
    justify-text:center;
    border-radius:8px;
    background-color:#1560bd;
    transition:800ms;
    cursor:pointer;

    &:hover{
        filter:brightness(1.2);
    }
`

const DeleteButton = styled(AiOutlineDelete)`
    color:red;
    border-radius:50%;
    width:60px;
    height:60px;
    padding:1rem;
    cursor:pointer;

    &:hover{
        filter:brightness(1.2);
    }

    & svg{
        width:100px;
        height:100px;
    }
`

export default function QuestionsPreview({handleQuestions}) {


    const [questions,setQuestions] = useState([]);


    const addQuestion = () => {

        setQuestions(oldArray => [...oldArray,""]);

    }

    const onSubmit = () => {

        handleQuestions(questions);
    }

    

    const deleteLine = (index) => {
        let newModel = questions;

        newModel.splice(index,1);

        setQuestions([...newModel]);
    }

    const onChange = (event,index) => {
        let newModel = questions;

        newModel[index] = event.target.value;

        setQuestions([...newModel]);
    }

    return (
        <>
            <Model>
                <h2>Question Form</h2>
                <InterriorModel>
                    <Interrior>
                    <QuestionGrid>
                        {questions.map((value,index) => (
                            <div style={{'display':'flex','gap':'1rem','align-items':'center'}}>
                                <AnimatedForm>
                                    <input type="text" id={"question"+index} name={"question"+index} value={value} className={"input"} onChange={(event) => onChange(event,index)} autoComplete="off" placeholder=" "/>
                                    <label htmlFor={"question"+index} className={"string"}>Question {index+1}</label>
                                </AnimatedForm>
                                <DeleteButton onClick={() => deleteLine(index)}/>
                            </div>
                        ))}
                        <AddButton onClick={addQuestion}>+ Add Question</AddButton>
                    </QuestionGrid>
                    </Interrior>
                </InterriorModel>
            </Model>
        </>
    );
}
