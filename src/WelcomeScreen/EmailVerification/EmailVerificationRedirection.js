import EmailApi from "../API/EmailApi";
import React from 'react';
import {Redirect} from "react-router-dom";

export default function EmailVerificationRedirection(props){

    const emailApi = new EmailApi();

    const [url,setUrl] = React.useState("");
    const [load,setLoad] = React.useState(false);

    React.useEffect(() => {
        responseFromServer();
    },[]);

    React.useEffect(() => {
        console.log(url);
        if(url.length!== 0) setLoad(true);
    },[url]);

    const responseFromServer = async () => {
        const response = await emailApi.verifyEmail(props.match.params.token);

        console.log(response);

        if(response !== undefined){
            if(response.messageType === "SUCCESS"){
                setUrl("/registration-confirm/successful-registration/");
            }else {
                setUrl("/registration-confirm/bad-registration/");
            }
        }else {
            setUrl("/registration-confirm/bad-registration/");
        }

    }

    return(
        <div>
            {load && <Redirect to={url} exact/>}
        </div>
    );
}