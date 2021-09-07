import React from "react";
import './EmailVerification.css';

export default function EmailVerification(){


    return(
        <div className={"email-verification-page"}>
            <div className={"email-verification-box"}>
                <div className={"choose-a-new-password-title"}>
                    <h3>Your Email has been verified</h3>
                </div>
                <div className={"choose-a-new-password-info"}>
                    <h1>You are now redirected to the front page</h1>
                </div>
            </div>
        </div>
    );
}