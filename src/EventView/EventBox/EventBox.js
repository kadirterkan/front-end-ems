import EventBoxTemplate from "./EventBoxTemplate.js/EventBoxTemplate";

import styled from 'styled-components';
import {Route} from "react-router-dom";
import EventPage from "../EventPage/EventPage";
import React from "react";

const BoxList = styled.div`
    display:grid;
    grid-template-columns:33% 33% 33%;
    gap:1rem;
`



export default function EventBox(props) {
    console.log(props.eventsList);

    return(
        <BoxList>

            {props.eventsList.map((value,index) => (
                <EventBoxTemplate userType={props.userType} key={index} eventBoxResponse={value} />
            ))}

        </BoxList>
    );
}