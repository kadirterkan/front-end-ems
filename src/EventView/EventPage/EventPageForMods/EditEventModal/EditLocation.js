import React from 'react';
import GooglePlacesAutocomplete, {geocodeByPlaceId, getLatLng} from "react-google-places-autocomplete";
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from "@react-google-maps/api";
import styled from "styled-components";
import {ImLocation} from "react-icons/im";
import {HiOutlineSwitchHorizontal} from "react-icons/hi";
import {LocationModel} from "../../../EventAdder/DialogModels";
import './EditLocation.css';

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

const places = ["places"];

const mapContainerStyle = {
    'height':'300px',
    'width':'500px',
}

const center = {
    lat:39.933365,
    lng:32.859741
}

const Physical = ({editEventQuery,isSubmitting,onPhysicalLocationEnter,openModel}) => {
    const {isLoaded,loadError} = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBPuot6Zn3eJYu-nZ0R-hT6S5IwB5RUvsA",
        libraries:places
    });

    if(loadError) return <span style={{'color':'#fff'}}>"Error loading maps"</span>;
    if(!isLoaded) return <span style={{'color':'#fff'}}>"Loading maps"</span>;

    return(
        <>
            <div className={"edit-location-auto-complete"}>
                <div className={"edit-location-auto-complete-location"}>
                    <GooglePlacesAutocomplete
                        apiOptions={{region:'tr'}}
                        selectProps={{
                            placeholder:(editEventQuery.eventCoordinates != null ? editEventQuery.eventCoordinates.eventLocationName : "Please enter your place"),
                            onChange:onPhysicalLocationEnter
                        }}
                        inputClassName={"input"}/>
                    <div/>
                    <LocationIcon style={isSubmitting && editEventQuery.eventCoordinates.eventLocationName ==="" ? {'color':'red'} : null} onClick={() => openModel()}/>
                </div>
            </div>
        </>
    )
}

const LocationPopUp = ({setShowModel,openModel,showModel,eventCoordinates,saveModel}) => {

    const [marker,setMarker] = React.useState(null);
    const [temporaryValue,setTemporaryValue] = React.useState(eventCoordinates);

    const onChange = async (mapValue) => {
        await geocodeByPlaceId(mapValue.value.place_id)
            .then(results => getLatLng(results[0]))
            .then(({lat,lng}) => {
                setTemporaryValue({lat:lat,lng:lng,eventLocationName:mapValue.label});
                setMarker({lat:lat,lng:lng});
            });
    };

    const onMapClick = React.useCallback((event) => {
        setMarker({lat:event.latLng.lat(),lng:event.latLng.lng()});

        setTemporaryValue({lat:event.latLng.lat(),lng:event.latLng.lng(),eventLocationName:temporaryValue.eventLocationName});
    },[]);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    },[]);

    const onLocationNameEnter = (event) => setTemporaryValue({...temporaryValue,eventLocationName:event.target.value});

    return(
        <LocationModel showModel={showModel} setShowModel={setShowModel}>
            <div className={"map"}>
                <div className={"animated-form"}>
                    <GooglePlacesAutocomplete
                        apiOptions={{region:'tr'}}
                        selectProps={{
                            placeholder:(eventCoordinates != null ? eventCoordinates.eventLocationName : "Please enter your place"),
                            onChange:onChange
                        }}
                        inputClassName={"input"}
                    />
                </div>
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
            <div className={"animated-form"} style={{'margin-top':'1rem'}}>
                <input type="text" id="locationName" name={"locationName"} className={"input"} value={temporaryValue.eventLocationName} onChange={onLocationNameEnter} placeholder=" "/>
                <label htmlFor={"locationName"} className={"string"}>Location Name</label>
            </div>
            <div className={"modal-buttons"}>
                <button className={"cancel-location-button"} onClick={openModel}>Cancel</button>
                <button className={"submit-location-button"} onClick={() => saveModel(temporaryValue)}>Save</button>
            </div>
        </LocationModel>);
}


export default function EditLocation({switchType,errors,isSubmitting,changeType,handleWithKeyAndValue,editEventQuery}){

    const [showModel,setShowModel] = React.useState(false);

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

    const handleChange = (event) => {
        handleWithKeyAndValue("eventUrl",event.target.value);
    }

    const saveLocation = (temporaryValue) => {
        handleWithKeyAndValue("eventCoordinates",temporaryValue);
        openModel();
    }

    return(
        <>
            {editEventQuery.eventType !== "ONLINE" ?
            <>
                <div className={"edit-location-input-values"}>
                    <div>
                        <h3 className={"edit-location-sidebar-menu-name"}>Event Physical Location</h3>
                        <span className={"edit-location-sidebar-menu-desc"}>Enter your events location from the map</span>
                    </div>
                    <div className={"edit-location-location-types"}>
                        <Physical editEventQuery={editEventQuery} isSubmitting={isSubmitting} onPhysicalLocationEnter={onPhysicalLocationEnter} openModel={openModel}/>
                    </div>
                    {/*<div>*/}
                    {/*    <button className={"edit-location-event-type-switcher"} onClick={switchType}><HiOutlineSwitchHorizontal color={"#fff"}/> Switch to Online</button>*/}
                    {/*</div>*/}
                </div>
                <LocationPopUp openModel={openModel} eventCoordinates={{lat:editEventQuery.lat,lng:editEventQuery.lng,eventLocationName:editEventQuery.eventLocationName}} saveModel={(temporaryValue) => saveLocation(temporaryValue)} setShowModel={setShowModel} showModel={showModel}/>
            </> :
            <>
                <div className={"edit-location-input-values"}>
                    <div>
                        <h3 className={"edit-location-sidebar-menu-name"}>Event Link</h3>
                        <span className={"edit-location-sidebar-menu-desc"}>Enter your events url</span>
                    </div>
                    <div className={"edit-location-animated-form"}>
                        <input style={isSubmitting && errors.eventUrl ? {'border': '1px solid red'} : null} type="text"
                               id="eventUrl" name={"eventUrl"} className={"edit-location-input"} value={editEventQuery.eventUrl}
                               onChange={handleChange} autoComplete="off" placeholder=" "/>
                        <label style={isSubmitting && errors.eventUrl ? {'color': 'red'} : null} htmlFor={"eventUrl"}
                               className={"edit-location-string"}>Event Link</label>
                    </div>
                    {/*<div>*/}
                    {/*    <button className={"edit-location-event-type-switcher"} onClick={switchType}><HiOutlineSwitchHorizontal color={"#fff"}/> Switch to Physical</button>*/}
                    {/*</div>*/}
                </div>
            </>}
        </>

    );

}