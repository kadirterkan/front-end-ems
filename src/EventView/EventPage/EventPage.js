import styled from "styled-components";
import { useState,useEffect } from "react";

const Page = styled.div`
    display:grid;
`

const UpperSide = styled.div`
    display:grid;
    height:1000px;
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

const EventName = styled.h3`
    max-width:56rem;
    word-wrap: break-word;
    margin-top:0.7rem;
    color:#fff;
    margin-left:1rem;
`

const TypeJoin = styled.div`
    margin-top:0.7rem;
    margin-left:1rem;
    justify-content:space-between;
    gap:2rem;
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


const Buttons = styled.div`
    display:flex;
    justify-content:space-between;
`

