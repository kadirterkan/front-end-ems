import React from 'react';
import './ForgottenPasswordGetEmail.css';
import SpecialNavBarForLogin from "./SpecialNavBarForLogin";
import {ForgottenPasswordApi} from "../API/ForgottenPasswordApi";
import {Redirect} from "react-router-dom";
import {set} from "react-hook-form";



export default function ForgottenPasswordsGetEmail(props){

    const forgottenPassword = new ForgottenPasswordApi();

    const [email,setEmail] = React.useState("");
    const [nextStep,setNextStep] = React.useState(false);
    const [error,setError] = React.useState("");
    const [data,setData] = React.useState(null);

    const onChange = event => {
        const {value} = event.target;

        setEmail(value);
    }

    React.useEffect(() => {
        if(data !== null && Object.keys(data).length !== 0){
            setNextStep(true);
        }
    },[data])

    const onClick = async () => {
        if(email.length !== 0){
            const response = await forgottenPassword.getUserInfo(email);

            setData(response);

            if(response !== null){
                setNextStep(true);
            }else {
                setError("USER NOT FOUND");
            }
        }
    }

    return(
        <>
            <div className={"forgotten-password-get-email"}>
                <div className={"forgotten-password-get-email-box"}>
                    <div className={"forgotten-password-title"}>
                        <h3>Find Your Account</h3>
                    </div>
                    <div className={"forgotten-password-input"}>
                        <p>Please enter your email address to search for your account.</p>
                        <input type={"email"} className={"forgotten-password-input-email"} placeholder={"Email"} onChange={onChange}/>
                    </div>
                    <div className={"forgotten-password-buttons"}>
                        <button className={"forgotten-password-back-button"}>Cancel</button>
                        <button className={"forgotten-password-next-button"} onClick={onClick}>Search</button>
                    </div>
                </div>
            </div>
            {nextStep &&
                <Redirect
                    to={{
                        pathname: "/forgot-my-password/is-this-you",
                        response:data,
                        email:email
                    }}
                />
            }
        </>

    );
}