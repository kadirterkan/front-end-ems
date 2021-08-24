import EventBoxTemplate from "./EventBoxTemplate.js/EventBoxTemplate";

import styled from 'styled-components';

const BoxList = styled.div`
    display:grid;
    grid-template-columns:33% 33% 33%;
    gap:1rem;
`



export default function EventBox() {
    return(
        <BoxList>
            <EventBoxTemplate/>
            <EventBoxTemplate/>

            <EventBoxTemplate/>

            <EventBoxTemplate/>

        </BoxList>
    );
}