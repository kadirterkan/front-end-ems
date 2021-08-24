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

const SidebarMenuName = styled.h1`
    color:#fff;
    margin-left:1rem;
    margin-top:0.25rem;
`



const AnimatedForm = styled.div`
position:relative;
display:grid;
height:3rem;


.input{
    border-radius:8px;
    border:1px solid #474a4d;
    box-shadow: none;

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







export default function Description({description,onChange}) {

    return(
        <>
            <SidebarHeaderLinks>
                    <NavLink to={'/events'}><h6>Event</h6></NavLink>
                    <h6>-</h6>
                    <NavLink to={'#'}><h6>Create Event</h6></NavLink>
            </SidebarHeaderLinks>
            <SidebarMenuName>Event Description</SidebarMenuName>
            <SidebarMenuName>Enter your events description to let people know more about your event</SidebarMenuName>
            <AnimatedForm>
                <textarea id="eventName" className={"input"} value={description} onChange={onChange}/>
                <label htmlFor={"eventName"} className={"string"}>Event Description</label>
            </AnimatedForm>
        </>
    );
}