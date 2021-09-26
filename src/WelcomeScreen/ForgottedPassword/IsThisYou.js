import React from "react";
import './IsThisYou.css'
import {ForgottenPasswordApi} from "../API/ForgottenPasswordApi";
import {Redirect} from "react-router-dom";

export default function IsThisYou(props){

    const forgottenPasswordApi = new ForgottenPasswordApi();

    const [nextStep,setNextStep] = React.useState(false);
    const [url,setUrl] = React.useState("");

    React.useEffect(() => {
        if(url.length!==0){
            setNextStep(true);
        }
    },[url])


    const handleContinue = async () => {
        const response = await forgottenPasswordApi.sendMailRequest(props.location.email);

        console.log(response);

        if(response !== null && response !== undefined){
            if(response.messageType === "SUCCESS"){
                setUrl("/forgot-my-password/verification");
            } else {
                return(
                    <div/>
                );
            }
        }
    }

    const onNotYou = () => {
        return (
            <Redirect to={"/forgot-my-password"}/>
        )
    }

    return(
        <>
            <div className={"is-this-you-page"}>
                <div className={"is-this-you-get-email-box"}>
                    <div className={"is-this-you-title"}>
                        <h3>Reset Your Password</h3>
                    </div>
                    <div className={"is-this-you-info"}>
                        <img className={"is-this-you-img"} src={props.location.response.base64Image ? props.location.response.base64Image: null }/>
                        <span className={"is-this-you-profile-name"}>{props.location.response.roleEnum} {props.location.response.username}</span>
                        <span className={"is-this-you-email"}>{props.location.email}</span>
                    </div>
                    <div className={"is-this-you-buttons"}>
                        <button className={"is-this-you-back-button"} onClick={onNotYou}>Not You?</button>
                        <button className={"is-this-you-next-button"} onClick={handleContinue}>Continue</button>
                    </div>
                </div>
            </div>
            {nextStep &&
                <Redirect
                to={{
                    pathname: url,
                    email: props.location.email
                }}
                />
            }
        </>
    );
}