
import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { GoogleMap, useJsApiLoader,InfoWindow,StandaloneSearchBox ,Marker } from '@react-google-maps/api';
import './EventAdder.css';
import GooglePlacesAutocomplete,{geocodeByPlaceId,getLatLng} from 'react-google-places-autocomplete';
import styled from 'styled-components';
import {BsLink45Deg} from 'react-icons/bs';
import { LocationModel } from './DialogModels';
import {ImLocation} from 'react-icons/im';
import useForm from './useForm';




const SidebarHeaderLinks = styled.div`
    margin-top:10px;
    margin-left:10px;
    color:grey;
    display:flex;
    gap:10px;
`

const AnimatedForm = styled.div`
position:relative;
display:grid;
height:3rem;
color:black;


.input{
    border-radius:8px;
    border:1px solid #474a4d;
    box-shadow: none;
    box-sizing:border-box;
    padding:1.5rem;
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

const AutcompleteLocation = styled.div`
    display:grid;
    grid-template-columns:85% 15%;
    gap:5px;
`

const LinkInput = styled.div`
    display:flex;
    gap:5px;
    
`

const UrlIcon = styled(BsLink45Deg)`
    border-radius:50%;
    background-none;
    width:20px;
    height:20px;
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


const LocationForm = styled.div`
    position:relative;
    display:grid;
    height:3rem;
`

const LocationIcon = styled(ImLocation)`
    color:#fff;
    padding:0.5rem;
    width:40px;
    height:40px;
    top:0.5rem;
    border-radius:50%;


    &:hover{
        border:1px solid #474a4d;
        background:#686868;
        filter:brightness(1.3);
    }
`

const Buttons = styled.div`
    margin-top:2rem;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:1rem;
`

const CancelButton = styled.button`
    border:none;
    color:#fff;
    padding:1rem;
    border-radius:8px;
    height:2rem;
    background-color:#686868;
    transition:800ms;
    display:flex;
    align-items:center;
    cursor:pointer;

    &:hover{
        filter:brightness(1.2);

    }
`

const SaveButton = styled.button`
    border:none;
    color:#fff;
    border-radius:8px;
    padding:1rem;
    height:2rem;
    background-color:#1560bd;
    transition:800ms;
    cursor:pointer;
    display:flex;
    align-items:center;
    
    &:hover{
        filter:brightness(1.2);

    }
`

const mapContainerStyle = {
    'height':'300px',
    'width':'500px',
}


const center = {
    lat:39.933365,
    lng:32.859741
}

export default function Location({isSubmitting,errors,handleWithKeyAndValue,handleChange,newEventQuery}){

    const [value,setValue] = useState(center);
    const [showModel,setShowModel] = useState(false);

    const openModel = () => setShowModel(!showModel);

    const onPhysicalLocationEnter = async (mapValue) => {

        let eventCoordinates = {lat:0,lng:0,eventLocationName:""};

        await geocodeByPlaceId(mapValue.value.place_id)
            .then(results => getLatLng(results[0]))
            .then(({lat,lng}) => {
                eventCoordinates.lat=lat;
                eventCoordinates.lng=lng;
            });

        eventCoordinates.eventLocationName=mapValue.label;

        handleWithKeyAndValue("eventCoordinates",eventCoordinates);

    }

    const places = ["places"];

    
    
    const Physical = () => {

        const { isLoaded, loadError } = useJsApiLoader({
            googleMapsApiKey: "AIzaSyBPuot6Zn3eJYu-nZ0R-hT6S5IwB5RUvsA",
            libraries:places
          })
        
        if(loadError) return "Error loading maps";
        if(!isLoaded) return "Loading Maps";

        return(
            <>
            <AnimatedForm>
                <AutcompleteLocation>
                    <GooglePlacesAutocomplete
                            apiOptions={{region:'tr'}}
                            selectProps={{
                                placeholder:(newEventQuery.eventCoordinates != null ? newEventQuery.eventCoordinates.eventLocationName : "Please enter your place"),
                                onChange:onPhysicalLocationEnter
                            }}
                            inputClassName={"input"}
                            />
                    <LocationIcon style={isSubmitting && newEventQuery.eventCoordinates.eventLocationName ==="" ? {'color':'red'} : null} onClick={() => openModel()}/>
                </AutcompleteLocation>
            </AnimatedForm>
            </>
        );
}
    const LocationPopup = () => {


        const [marker,setMarker] = useState(null);
        const [temporaryValue,setTemporaryValue] = useState({...newEventQuery.eventCoordinates});

        const saveModel = () => {
            handleWithKeyAndValue("eventCoordinates",temporaryValue);

            setShowModel(false);
        }

        const onTemporyalValueEnter = (mapValue) => {
    
            geocodeByPlaceId(mapValue.value.place_id)
                .then(results => getLatLng(results[0]))
                .then(({lat,lng}) => {
                    setTemporaryValue({lat:lat,lng:lng,eventLocationName:mapValue.label});
                    setMarker({lat:lat,lng:lng});
                });



        }

        const onMapClick = React.useCallback((event) => {

            setMarker({lat:event.latLng.lat(),lng:event.latLng.lng()});

            setTemporaryValue({lat:event.latLng.lat(),lng:event.latLng.lng(),eventLocationName:temporaryValue.eventLocationName});
        },[]);

        const mapRef = React.useRef();
        const onMapLoad = React.useCallback((map) => {
            mapRef.current = map;
        },[]);

        const onLocationNameEnter = (event) => {
            let newModel = {...temporaryValue,eventLocationName:event.target.value};
        
            setTemporaryValue(newModel);
        }

        return(
        <LocationModel showModel={showModel} setShowModel={setShowModel}>
            <div className={"map"}>
                <AnimatedForm>
                    <GooglePlacesAutocomplete
                            apiOptions={{region:'tr'}}
                            selectProps={{
                                placeholder:(newEventQuery.eventCoordinates != null ? newEventQuery.eventCoordinates.eventLocationName : "Please enter your place"),
                                onChange:onTemporyalValueEnter
                            }}
                            inputClassName={"input"}
                            />
                </AnimatedForm>
                <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={temporaryValue}
                onClick={onMapClick}
                onLoad={onMapLoad}
                >
                    {marker!= null ? <Marker
                        position={{lat:marker.lat,lng:marker.lng}}
                        onClick={() => (<InfoWindow 
                        position={{lat:marker.lat,lng:marker.lng}}
                        >
                <div>
                    <h2></h2>
                </div>
                </InfoWindow>)
                        
                    }
                    /> : null}
                        </GoogleMap>
            </div>
            <h5>Location {temporaryValue.lat}  {temporaryValue.lng}</h5>
            <AnimatedForm style={{'margin-top':'1rem'}}>
                <input type="text" id="locationName" name={"locationName"} className={"input"} value={temporaryValue.eventLocationName} onChange={onLocationNameEnter} placeholder=" "/>
                <label htmlFor={"locationName"} className={"string"}>Location Name</label>
            </AnimatedForm>
            <Buttons>
                <CancelButton onClick={openModel}>Cancel</CancelButton>
                <SaveButton onClick={saveModel}>Save</SaveButton>
            </Buttons>
        </LocationModel>);
    }





    return(
        <>
            <SidebarHeaderLinks>
                <NavLink to={'/events'}><h6>Event</h6></NavLink>
                <h6>-</h6>
                <NavLink to={'#'}><h6>Create Event</h6></NavLink>
            </SidebarHeaderLinks>
                {newEventQuery.eventType === "PHYSICAL" ? 
                <> 
                    <SidebarMenuName>Event Physical Location</SidebarMenuName>
                    <SidebarMenu>Enter your events location from the map</SidebarMenu>
                    <div className={"locationTypes"}>
                        <Physical/> 
                    </div>
                </> :
                <>
                    <SidebarMenuName>Event Link</SidebarMenuName>
                    <SidebarMenu>Enter your events url</SidebarMenu>
                    <div className={"locationTypes"}>
                        <div>
                            <AnimatedForm>
                                <input style={isSubmitting && errors.eventUrl ? {'border':'1px solid red'} : null} type="text" id="eventUrl" name={"eventUrl"} className={"input"} value={newEventQuery.eventUrl} onChange={handleChange} autoComplete="off" placeholder=" "/>
                                <label style={isSubmitting && errors.eventUrl ? {'color':'red'} : null} htmlFor={"eventUrl"} className={"string"}>Event Link</label>
                            </AnimatedForm>
                        </div>
                    </div>
                </>
                }
            {newEventQuery.eventType === "physical" && <LocationPopup/>}
        </>
    );
}