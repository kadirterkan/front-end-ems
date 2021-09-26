import React from "react";
import './VerificationCode.css'
import {ForgottenPasswordApi} from "../API/ForgottenPasswordApi";
import {Redirect} from "react-router-dom";

export default function VerificationCode(props){

    const forgottenPasswordApi = new ForgottenPasswordApi();

    const [token,setToken] = React.useState("");
    const [nextStep,setNextStep] = React.useState(false);

    const handleCode = async () => {
        console.log(token.length);
        if (token.length === 6) {
            const response = await forgottenPasswordApi.postVerificationCode(props.location.email, token);

            if(response!==null){
                if(response.messageType === "SUCCESS"){
                    setNextStep(true);
                }
            }
        }
    }

    const onChange = (event) => {
        setToken(event.target.value);
    }

    return(
        <>
            <div className={"verification-code-page"}>
                <div className={"verification-code-get-email-box"}>
                    <div className={"verification-code-title"}>
                        <h3>Enter Security Code</h3>
                    </div>
                    <div className={"verification-code-info"}>
                        <p>Please check your emails for a message with your code</p>
                        <div className={"verification-code-inputs"}>
                            <input type={"text"} className={"standard-input"} maxLength={6} onChange={onChange} placeholder={"Enter code"}/>
                            <div className={"verification-code-inputs-email"}>
                                <span>We sent your code to:</span>
                                <span>{props.location.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"verification-code-buttons"}>
                        <button className={"verification-code-next-button"} onClick={handleCode}>Continue</button>
                    </div>
                </div>
            </div>
            {nextStep &&
                <Redirect
                to={{
                    pathname: "/forgot-my-password/choose-a-new-password",
                    email: props.location.email
                }}
            />}
        </>
    );
}