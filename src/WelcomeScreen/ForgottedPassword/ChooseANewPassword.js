import React from "react";
import './ChooseANewPassword.css';
import {ForgottenPasswordApi} from "../API/ForgottenPasswordApi";
import {Redirect} from "react-router-dom";

export default function ChooseANewPassword(props){

    const forgottenPasswordApi = new ForgottenPasswordApi();

    const [password,setPassword] = React.useState("");
    const [nextStep,setNextStep] = React.useState(false);

    const onChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = async () => {
        if(password.length !== 0){
            const response = await forgottenPasswordApi.postNewPassword(props.location.email,password);

            console.log(response);

            if(response !== null) {
                if(response.messageType === "SUCCESS"){
                    setNextStep(true);
                }else{

                }
            }
        }
    }

    return(
        <>
            <div className={"choose-a-new-password-page"}>
                <div className={"choose-a-new-password-get-email-box"}>
                    <div className={"choose-a-new-password-title"}>
                        <h3>Choose a new password</h3>
                    </div>
                    <div className={"choose-a-new-password-info"}>
                        <p>Create a new password</p>
                        <input  type={"password"} className={"standard-input"} onChange={onChange} placeholder={"New password"}/>
                    </div>
                    <div className={"choose-a-new-password-buttons"}>
                        <button className={"choose-a-new-password-next-button"} onClick={onSubmit}>Continue</button>
                    </div>
                </div>
            </div>
            {nextStep &&
                <Redirect
                to={{
                    pathname: "/",
                }}
            />}
        </>
    );
}