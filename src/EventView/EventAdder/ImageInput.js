import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useForm from './useForm';


const NavLink = styled(Link)`

`


const SidebarHeaderLinks = styled.div`
    margin-top:10px;
    margin-left:10px;
    color:grey;
    display:flex;
    gap:10px;
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



const InputForm = styled.div`
margin-top:1rem;
position:relative;
display:grid;
height:3rem;
justify-content:center;


.input{
    text-align:center;

    border-radius:8px;
    border:1px solid #474a4d;
    box-shadow: none;

    box-sizing:border-box;
    padding:0.8rem;
    background:none;
    color:#fff;
}
`


export default function ImageInput({newEventQuery,handleWithKeyAndValue}) {

    const [eventImage,setEventImage] = useState(null);

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    


    const imageUploadHandler = async (event) => {

        setEventImage(await toBase64(event.target.files[0]));


    }

    useEffect(() => {
        handleWithKeyAndValue("base64Image",eventImage);

    },[eventImage]);


    return(
        <>
            <SidebarHeaderLinks>
                        <NavLink to={'/events'}><h6>Event</h6></NavLink>
                        <h6>-</h6>
                        <NavLink to={'#'}><h6>Create Event</h6></NavLink>
                </SidebarHeaderLinks>
                <SidebarMenuName>Event Description</SidebarMenuName>
                <SidebarMenu>Enter your events description to let people know more about your event</SidebarMenu>
                <InputForm>
                    <input type="file" className={"input"} onChange={imageUploadHandler}></input>
                </InputForm>
        </>
    );
}