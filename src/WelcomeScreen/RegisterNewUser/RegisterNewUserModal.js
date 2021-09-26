import React from 'react';
import {ImCross, RiAdminFill, RiUserFill} from "react-icons/all";
import './RegisterNewUserModal.css';
import {IconContext} from "react-icons";
import {useRegistrationFormForMod,useRegistrationFormForUsers} from "./useRegistrationForm";
import {RegisterApi} from "../API/RegisterApi";


export default function RegisterNewUserModal({isRegisterModalOpen, openModal}) {

    const registerApi = new RegisterApi();

    const {handleChangeUser,handleModSubmit,modErrors,newUserRegistration} = useRegistrationFormForUsers();

    const {handleChangeMods,handleSubmitUser,userErrors,newModRegistration} = useRegistrationFormForMod();

    const handleUserRegister = async () => {
        const response = await registerApi.RegisterUser(newUserRegistration);

        console.log(response);

    }

    const handleModRegister = async () => {
        const response = await registerApi.RegisterMod(newModRegistration);

        console.log(response);
    }

    const modelRef = React.useRef();

    const closeModel = (event) => {
        if(modelRef.current === event.target){
            openModal();
        }
    };

    const keyPress = React.useCallback(event => {
        if(event.key === 'Escape' && isRegisterModalOpen){
            openModal();
        }
    },[isRegisterModalOpen]);

    React.useEffect(() => {
        document.addEventListener('keydown',keyPress);
        return () => document.removeEventListener('keydown',keyPress);
    },[keyPress]);


    const [userType,setUserType] = React.useState("USER");

    const switchToUser = () => setUserType("USER");

    const switchToMod = () => setUserType("MOD");

    return(
        <>
            {

                isRegisterModalOpen ?
                    <div className={"register-new-user-modal-background"} ref={modelRef} onClick={closeModel}>
                        <div className={"register-new-user-dialog"}>
                            <IconContext.Provider value={{className:"cross-close-button"}}>
                                <ImCross onClick={openModal}/>
                            </IconContext.Provider>
                            <div className={"register-new-user-dialog-title"}>
                                <h1>Sign Up</h1>
                                <p>You can switch between user types</p>
                            </div>
                            <div className={"user-registration-switcher-box"}>
                                <IconContext.Provider value={{className:"user-registration-switcher-box-icons"}}>
                                    <div className={"user-registration-switcher-animation"} style={userType === "USER" ? null : {'left':'50%'}}/>
                                    <button className={"user-registration-switcher-button"} onClick={switchToUser } style={userType === "USER" ? {'color':'white'} : null}><RiUserFill color={userType === "USER" ? "white" : null}/> User</button>
                                    <button className={"user-registration-switcher-button"} onClick={switchToMod} style={userType === "MOD"  ? {'color':'white'} : null}><RiAdminFill color={userType === "MOD" ? "white" : null}/> Moderator</button>
                                </IconContext.Provider>
                            </div>
                            <div className={"register-new-user-forms"} style={userType === "USER" ? null : {'left':'-515px'}}>
                                <form className={"register-new-user-form"} noValidate={true}>
                                    <h3 className={"register-new-user-user-type"}>Register as an User</h3>
                                    <div className={"name-surname-field"}>
                                        <input name={"firstName"} type={"text"} className={"name-surname-input"} placeholder={"First name"} onChange={handleChangeUser} value={newUserRegistration.firstName} required/>
                                        <input name={"lastName"} type={"text"} className={"name-surname-input"} placeholder={"Surname"} onChange={handleChangeUser} value={newUserRegistration.lastName}  required/>
                                    </div>
                                    <input name={"tcKimlikNumber"} type={"text"} className={"standard-input"} placeholder={"TC Number"} onChange={handleChangeUser} value={newUserRegistration.tcKimlikNumber} minLength={11} maxLength={11} required/>
                                    <input name={"email"} type={"email"} className={"standard-input"} placeholder={"Email"} onChange={handleChangeUser} value={newUserRegistration.email} required/>
                                    <input name={"password"} type={"password"} className={"standard-input"} placeholder={"New password"} onChange={handleChangeUser} value={newUserRegistration.password} required/>
                                    <select name={"department"} className={"department-selector"} onChange={handleChangeUser} value={newUserRegistration.department} required>
                                        <option disabled value={""}>Choose your department</option>
                                        <option value="IT">IT</option>
                                        <option value="HR">Human Resources</option>
                                        <option value="PRODUCTION">Production</option>
                                        <option value="RND">Research {"&"} Development</option>
                                        <option value="PURCHASING">Purchasing</option>
                                        <option value="MARKETING">Marketing</option>
                                        <option value="FINANCES">Finances</option>
                                        <option value="ADMIN">Administrator</option>
                                        <option value="SERVICE">Service</option>
                                        <option value="ALL">Company</option>
                                    </select>
                                    <div className={"standard-submit-button-placement"}>
                                        <input type={"submit"} className={"standard-submit-button"} onClick={handleUserRegister} value={"Sign Up"}
                                               formNoValidate/>
                                    </div>
                                </form>
                                <form className={"register-new-mod-form"} noValidate={true}>
                                    <h3 className={"register-new-user-user-type"}>Register as a Moderator</h3>
                                    <div className={"name-surname-field"}>
                                        <input name={"firstName"} type={"text"} className={"name-surname-input"} placeholder={"First name"} onChange={handleChangeMods} value={newModRegistration.firstName} required/>
                                        <input name={"lastName"} type={"text"} className={"name-surname-input"} placeholder={"Surname"} onChange={handleChangeMods} value={newModRegistration.lastName} required/>
                                    </div>
                                    <input name={"email"} type={"email"} className={"standard-input"} placeholder={"Email address"} onChange={handleChangeMods} value={newModRegistration.email} required/>
                                    <input name={"password"} type={"password"} className={"standard-input"} placeholder={"New password"} onChange={handleChangeMods} value={newModRegistration.password} required/>
                                    <select name={"department"} className={"department-selector"} onChange={handleChangeMods} value={newModRegistration.department} required>
                                        <option disabled value={""}>Choose your department</option>
                                        <option value="IT">IT</option>
                                        <option value="HR">Human Resources</option>
                                        <option value="PRODUCTION">Production</option>
                                        <option value="RND">Research {"&"} Development</option>
                                        <option value="PURCHASING">Purchasing</option>
                                        <option value="MARKETING">Marketing</option>
                                        <option value="FINANCES">Finances</option>
                                        <option value="ADMIN">Administrator</option>
                                        <option value="SERVICE">Service</option>
                                        <option value="ALL">Company</option>
                                    </select>
                                    <div className={"empty-space"}/>
                                    <div className={"standard-submit-button-placement"}>
                                        <input type={"submit"} className={"standard-submit-button"} onClick={handleModRegister} value={"Sign Up"} formNoValidate/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                        : null
    }
        </>
    );
}