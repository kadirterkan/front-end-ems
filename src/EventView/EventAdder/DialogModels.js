import styled from 'styled-components';
import React,{useState,useRef,useEffect,useCallback} from 'react';
import { IoMdClose } from 'react-icons/io';


const AnimatedForm = styled.div`
position:absolute;
display:grid;
height:3rem;


.input{
    margin:10px;
    width:400px;
    max-width:400px;
    min-width:400px;
    height:200px;
    min-height:200px;
    max-height:200px;
    position:absolute;
    word-wrap: break-word;
    border-radius:8px;
    border:1px solid #474a4d;
    box-shadow: none;
    box-sizing:border-box;
    padding:1.25rem;
    background:none;
    color:#fff;
}
`

const Background = styled.div`
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.8);
    left:0;
    top:0;
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:100000000;

`

const ModalWrapper = styled.div`
    padding:1rem;
    position:relative;
    width:500px;
    height:300px;
    margin-bottom:5rem;
    box-shadow:0 5px 16px rgba(0,0,0,0.2);
    background:#242526;
    color:#fff;
    z-index:10000000000;
    border-radius:10px;

    h2{
        margin:0.5rem;
    }
`

const ModalContent = styled.div`
    position:relative;
    display:grid;
    gap:1rem;
    color:#fff;
    justify-content:center;
    align-items:center;

    & textarea{
        word-wrap: break-word;
        border-radius:8px;
        border:1px solid #474a4d;
        width:400px;
        max-width:400px;
        min-width:400px;
        height:100px;
        min-height:100px;
        max-height:100px;
        background:none;
        padding:1rem;
        color:#fff;
    }

    & h2 {

    }
    
`

const CloseModelButton = styled(IoMdClose)`
    cursor:pointer;
    position:absolute;
    top:20px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index:10;
    `
const SubmitModelButton = styled.button`

    padding:1rem;
    background-color:#1560bd;
    height:3rem;
    width:10rem;
    border:none;
    border-radius:8px;
    color:#fff;

    &:hover{
        filter:brightness(1.3);
    }
`


    export function AddModel({showModel,setShowModel,newQuestion,setNewQuestion,onSubmit}){
        const modelRef = useRef();

        const onChange = (event) => {

            setNewQuestion(event.target.value);
        };
    
        const closeModel = (event) => {
            if(modelRef.current === event.target){
                setShowModel(false);
            }
        };
    
        const keyPress = useCallback(event => {
            if(event.key === 'Escape' && showModel){
                setShowModel(false);
            }
        },[setShowModel,showModel]);
    
        useEffect(() => {
            document.addEventListener('keydown',keyPress);
            return () => document.removeEventListener('keydown',keyPress);
        },[keyPress]);
    
        return(
            <>
    
            {
                showModel ? (
                    <Background ref={modelRef} onClick={closeModel}>
                        <ModalWrapper>
                            <ModalContent>   
                                <h2>Create Question</h2>
                                <textarea maxLength={"500"} id="eventName" className={"input"} onChange={onChange}/>
                                <SubmitModelButton onClick={() => onSubmit()}>Submit</SubmitModelButton>
                            </ModalContent>
                            <CloseModelButton
                            aria-label='Close model'
                            onClick={() => setShowModel(prev=>!prev)}/>
                        </ModalWrapper>
                    </Background>
                ) : null
            }
            </>
    
        );
    }
    
    export function EditModel({showModel,setShowModel,newQuestion,setNewQuestion,onEdit}){
        const modelRef = useRef();

        const onChange = (event) => {
            setNewQuestion(event.target.value);
        }
    
        const closeModel = (event) => {
            if(modelRef.current === event.target){
                setShowModel(false);
            }
        };
    
        const keyPress = useCallback(event => {
            if(event.key === 'Escape' && showModel){
                setShowModel(false);
            }
        },[setShowModel,showModel]);
    
        useEffect(() => {
            document.addEventListener('keydown',keyPress);
            return () => document.removeEventListener('keydown',keyPress);
        },[keyPress]);
    
        return(
            <>
    
            {
                showModel ? (
                    <Background ref={modelRef} onClick={closeModel}>
                        <ModalWrapper>
                            <h2>Edit Question</h2>
                            <AnimatedForm>
                                <input type={"text"} id="eventName" className={"input"} value={newQuestion} onChange={onChange} rows="5" cols="51"/>
                            </AnimatedForm>
                            <ModalContent>
                                
                                <SubmitModelButton onClick={onEdit}>Edit</SubmitModelButton>
                            </ModalContent>
                            <CloseModelButton
                            aria-label='Close model'
                            onClick={() => setShowModel(prev=>!prev)}/>
                        </ModalWrapper>
                    </Background>
                ) : null
            }
            </>
    
        );
    }


    const LocationModalWrapper = styled.div`
        padding:2rem;
        position:relative;
        width:fit-content;
        height:fit-content;
        box-shadow:0 5px 16px rgba(0,0,0,0.2);
        background:#242526;
        color:#fff;
        z-index:10000000000;
        border-radius:10px;

        h2{
            margin:0.5rem;
        }
    `

    const HeaderName = styled.div`
        text-align:center;
        border-bottom:1px solid #474a4d;
    `
    
    export const LocationModel = (props) => {

        const {showModel,setShowModel} = {...props};
        const modelRef = useRef();

        const closeModel = (event) => {
            if(modelRef.current === event.target){
                setShowModel(false);
            }
        };
    
        const keyPress = useCallback(event => {
            if(event.key === 'Escape' && showModel){
                setShowModel(false);
            }
        },[setShowModel,showModel]);
    
        useEffect(() => {
            document.addEventListener('keydown',keyPress);
            return () => document.removeEventListener('keydown',keyPress);
        },[keyPress]);
    
        return(
            <>
    
            {
                showModel ? (
                    <Background ref={modelRef} onClick={closeModel}>
                        <LocationModalWrapper>
                            <HeaderName><h2>Location</h2></HeaderName>
                            {props.children}
                            <CloseModelButton
                            aria-label='Close model'
                            onClick={() => setShowModel(prev=>!prev)}/>
                        </LocationModalWrapper>
                    </Background>
                ) : null
            }
            </>
        );
    }