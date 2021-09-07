import React from 'react';
import useUserLoginForm from "./useUserLoginForm";
import {useValidationLogin} from "./useValidationLogin";
import './LoginComponents.css';
import {AiOutlineUserSwitch} from "react-icons/all";
import {IconContext} from "react-icons";
import LoginApi from "../API/LoginApi";
import {NavLink, Redirect, useHistory} from "react-router-dom";
import {toast} from "react-toastify";

export function UserLogin(props){

    const loginApi = new LoginApi();

    const history = useHistory();


    const {handleSubmit,handleChange,errors,userLoginRequest} = useUserLoginForm(useValidationLogin);

    const [loggedIn,setLoggedIn] = React.useState(false);

    const handleUserLogin = async () => {

        toast.configure()

        const response = await loginApi.userLogin(userLoginRequest);

        console.log(response);

        if (response!==undefined) {
            if (response.messageType === "SUCCESS") {

                toast.success(response.message);

                history.push("/events/main-page");
                setLoggedIn(true);
            }else{
                toast.error(response.message);
            }
        }
    }

    return (
        <>
            <div className={"user-login-screen"}>
            <div className={"user-login-screen-upper-side"}>
                <div className={"user-login-desc"}>
                    <h3 className={"user-login-login-type"}>User Login</h3>
                    <button className={"user-login-switch-user"} onClick={props.onClickSwitchToMod}>
                        <IconContext.Provider value={{className:"user-login-switch-user-icon"}}>
                            <AiOutlineUserSwitch/>
                        </IconContext.Provider>
                        <h3>Switch To Mod</h3>
                    </button>
                </div>
                <div className={"user-login-form"}>
                    <input type={"text"} className={"user-login-input"} placeholder={"Username"} name={"username"} value={userLoginRequest.username} onChange={handleChange}/>
                    <input type={"password"} className={"user-login-input"} name={"password"} placeholder={"Password"} value={userLoginRequest.password} onChange={handleChange}/>
                    <button className={"user-login-login-button"} onClick={handleUserLogin}>Log In</button>
                </div>
                <div className={"user-login-forgot-password-pos"}>
                    <NavLink className={"user-login-forgot-password"} to={"/forgot-my-password"}>Forgotten Password?</NavLink>
                </div>
            </div>
            <div className={"user-login-screen-down-side"}>
                <button className={"user-login-create-new-account"} onClick={props.openModal}>Create New Account</button>
            </div>
        </div>
        {loggedIn && <Redirect to={"/events/main-page"}/>}
        </>
    );
}

export function ModLogin(props){

    const history = useHistory();

    const loginApi = new LoginApi();

    const {handleSubmit,handleChange,errors,userLoginRequest} = useUserLoginForm(useValidationLogin);
    const [loggedIn,setLoggedIn] = React.useState(false);

    const handleModLogin = async () => {
        const response = await loginApi.modLogin(userLoginRequest);

        console.log(response);

        if (response!==undefined) {
            if (response.messageType === "SUCCESS") {
                toast.success(response.message);
                history.push("/mod-view/main-page");

            }else{
                toast.error(response.message);
            }
        }
    }

    return (
        <>
            <div className={"user-login-screen"}>
                <div className={"user-login-screen-upper-side"}>
                    <div className={"user-login-desc"}>
                        <h3 className={"user-login-login-type"}>Mod Login</h3>
                        <button className={"user-login-switch-user"} onClick={props.onClickSwitchToUser}>
                            <IconContext.Provider value={{className:"user-login-switch-user-icon"}}>
                                <AiOutlineUserSwitch/>
                            </IconContext.Provider>
                            <h3>Switch To User</h3>
                        </button>
                    </div>
                    <div className={"user-login-form"}>
                        <input type={"text"} className={"user-login-input"} placeholder={"Username"} name={"username"} value={userLoginRequest.username} onChange={handleChange} />
                        <input type={"password"} className={"user-login-input"} name={"password"} placeholder={"Password"} value={userLoginRequest.password} onChange={handleChange} />
                        <input type={"submit"} className={"user-login-login-button"} onClick={handleModLogin} value={"Log In"}/>
                    </div>
                    <div className={"user-login-forgot-password-pos"}>
                        <NavLink className={"user-login-forgot-password"} to={"/forgot-my-password"}>Forgotten Password?</NavLink>
                    </div>
                </div>
                <div className={"user-login-screen-down-side"}>
                    <button className={"user-login-create-new-account"} onClick={props.openModal}>Create New Account</button>
                </div>
            </div>
            {loggedIn && <Redirect to={"/mod-view/main-page"}/>}
        </>
    );
}