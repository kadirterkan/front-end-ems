import React from 'react';
import useUserLoginForm from "../LoginComponents/useUserLoginForm";
import {SiReactos} from "react-icons/all";
import {IconContext} from "react-icons";
import './SpecialNavBarForLogin.css';
import {NavLink, useLocation} from "react-router-dom";
import LoginApi from "../API/LoginApi";

export default function SpecialNavBarForLogin () {

    const loginApi = new LoginApi();

    const location = useLocation();

    const {handleChange,errors,handleSubmit,userLoginRequest} = useUserLoginForm();

    const handleUserLogin = async () => {
        const response = await loginApi.userLogin(userLoginRequest);
    }

    const handleModLogin = async () => {
        const response = await loginApi.modLogin(userLoginRequest);
    }

    return(
        <>
        <iframe name="hiddenFrame" style={{'height':'0','width':'0','display':'none'}}/>
        <div className={"special-nav-bar-for-login"}>
            <NavLink to={"/"} className={"special-nav-bar-for-login-left"}>
                <IconContext.Provider value={{className:"special-nav-bar-left-icon"}}>
                    <SiReactos/>
                </IconContext.Provider>
            </NavLink>
            <div className={"special-nav-bar-for-login-right"}>
                <form className={"special-nav-bar-for-login-inputs"} target="hiddenFrame">
                    <input type={"email"} className={"standard-input"} name={"username"} onChange={handleChange} placeholder={"Email"} required/>
                    <input type={"password"} className={"standard-input"} name={"password"} onChange={handleChange} placeholder={"Password"} required/>
                    <input type={"submit"} className={"standard-login-button"} onClick={handleUserLogin} value={"Login as a Standard User"}/>
                    <input type={"submit"} className={"standard-login-button"} onClick={handleModLogin} value={"Login as a Mod"}/>
                </form>
            </div>
        </div>
    </>
    );
}