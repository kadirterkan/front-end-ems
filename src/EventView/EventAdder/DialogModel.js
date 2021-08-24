import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const Background = styled.div`
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.8);
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:100000000;

`

const ModalWrapper = styled.div`
    width:800px;
    height:500px;
    box-shadow:0 5px 16px rgba(0,0,0,0.2);
    background:#fff;
    color:#000;
    display:grid;
    grid-template-columns:1fr 1fr;
    position:relative;
    z-index:10000000000;
    border-radius:10px;
`

const ModalContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height:1.8;
    color:#141414;

    p{
        margin-bottom:1rem;
    }

    button {
        padding:10px 24px;
        background:#141414;
        color:#fff;
        border:none;
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




export default function DialogModel({showModel,setShowModel}){
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
                    <ModalWrapper>
                        <ModalContent>
                            <h1>ARE YOU READY?</h1>
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
