import React from 'react';
import {AiOutlineCheckCircle} from "react-icons/ai";
import './EditUpperSide.css';

export class ProfileBox extends React.Component{
    render() {
        return (
            <div className={"edit-upper-profile-box"}>
                <img className={"edit-upper-profile-image"} src={this.props.base64Image}/>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export class DisabledButtons extends React.Component{
    render() {
        return (
            <div className={"edit-disabled-buttons"}>
                {/*<button className={"edit-disabled-button"} disabled={true}><AiOutlineStar color={"#fff"}/><h3>Interested</h3></button>*/}
                <button className={"edit-disabled-button"} disabled={true}><AiOutlineCheckCircle color={"#fff"}/><h3>Going</h3></button>
            </div>
        );
    }
}
