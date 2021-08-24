import styled from 'styled-components';
import {GiEarthAfricaEurope} from 'react-icons/gi';
import {Types} from './AddEventData';



const AddEventTypeBoxModel = styled.div`
    color:#fff;
    background-color: #242526;

    border-radius:8px;
    border:1px solid #474a4d;
    transition:800ms;

    &:hover{
        background: #686868;
        cursor:pointer;
    }
`

const Icon = styled.a`
    position:relative;
    --button-size:50px;
    width:var(--button-size);
    height:var(--button-size);
    background-color:#484a4d;
    color:#fff;
    padding:5px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:filter 300ms;


    & svg{
        fill:#dadce1;
        width:30px;
        height:30px;
    }

`

const Paragraf = styled.p`
    padding:1rem;
    
`

const Type = styled.p`
    padding:1rem;
`

const Details = styled.div`
    margin-top:2rem;
    padding:1rem;
    display:grid;
    justify-items:center;
    align-items:center;
`

const AddEventType = styled.div`
    display:grid;
    gap:1rem;
`

const HeaderFix = styled.div`
    display:grid;
    justify-content:center;
    align-items:center;
`

const HeaderName = styled.h2`
    color:#fff;
    margin-left:1rem;`

const EventTypes = styled.div`
    display:flex;
    gap:15px;
    `

export default function AddEventTypes(props) {

    const {setEventType} = {...props};

    const eventHandler = (eventType) => {
        setEventType(eventType);
    }

    function AddEventTypeBox({item,func}){
        return(
        <AddEventTypeBoxModel onClick={() => func(item.type)}>
            <Details>
                <Icon>{item.icon}</Icon>
                <Type><b>{item.title}</b></Type>
                <Paragraf>{item.description}</Paragraf>
            </Details>
        </AddEventTypeBoxModel>
        );
    }



    return (
        <HeaderFix>
            <AddEventType>

                <HeaderName>Create Event</HeaderName>
                <EventTypes>
                    {Types.map((value,index) => (
                        <AddEventTypeBox func={eventHandler} key={index} item={value}/>
                    ))}
                </EventTypes>
            </AddEventType>
        </HeaderFix>
    )
}