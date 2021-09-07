import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`

`

const SidebarHeaderLinks = styled.div`
    margin-top:10px;
    margin-left:10px;
    color:grey;
    display:flex;
    gap:10px;
`



const AnimatedForm = styled.div`
margin-top:1rem;
position:relative;
display:grid;
height:3rem;
margin-left:1rem;


.input{
    position:absolute;
    min-width:300px;
    min-height:100px;
    max-width:300px;
    max-height:400px;
    border-radius:8px;
    border:1px solid #474a4d;
    box-shadow: none;
    box-sizing:border-box;
    padding:1.25rem;
    background:none;
    color:#fff;
}


`

const SidebarMenuName = styled.h3`
    color:#fff;
    margin-left:1rem;
    margin-top:0.25rem;
`
const SidebarMenu = styled.span`
    color:#fff;
    margin-left:1rem;
    margin-top:0.25rem;
`


export default function Description({newEventQuery,handleChange}) {


    return(
        <>
            <SidebarHeaderLinks>
                    <NavLink to={'/events'}><h6>Event</h6></NavLink>
                    <h6>-</h6>
                    <NavLink to={'#'}><h6>Create Event</h6></NavLink>
            </SidebarHeaderLinks>
            <SidebarMenuName>Event Description</SidebarMenuName>
            <SidebarMenu>Enter your events description to let people know more about your event</SidebarMenu>
            <AnimatedForm>
                <textarea id="eventDescription" name={"eventDescription"} className={"input"} value={newEventQuery.eventDescription} onChange={handleChange}/>
            </AnimatedForm>
        </>
    );
}