import {SystemApi} from "../API/SystemApi";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function LogOut(props){

    const history = useHistory();

    const systemApi = new SystemApi();

    useEffect(() => {
        systemApi.logOut();
        history.push("/");
    },[]);

    useEffect(() => {
        if(props.userType!=="GUEST"){
            props.setUserType("GUEST");
        }
    })

    return(
        <div/>
    );
}