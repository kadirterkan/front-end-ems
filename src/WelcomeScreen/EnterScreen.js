import React from 'react';
import {UserLogin,ModLogin} from './LoginComponents/LoginComponents';
import {DiReact, SiReactos, SiSpring} from "react-icons/all";
import './EnterScreen.css';
import {IconContext} from "react-icons";
import RegisterNewUserModal from "./RegisterNewUser/RegisterNewUserModal";
import {useHistory} from "react-router-dom";

export default function EnterScreen(props) {

    const history = useHistory();

    React.useEffect(() => {
        if(props.userType !== "GUEST" && props.userType !== undefined && props.userType !==null){
            console.log(props.userType);
            HandleLoggedIn();
        }
    },[props.userType]);

    const HandleLoggedIn = async () => {
        if(props.userType==="USER"){
            history.push("/mod-view/main-page");
        }else if(props.userType==="MOD"){
            history.push("/events/main-page");
        }
    }

    const [userType,setUserType] = React.useState("USER");
    const [isRegisterModalOpen,setIsRegisterModalOpen] = React.useState(false);

    const onClickSwitchToMod = () => setUserType("MOD");

    const openModal = () => setIsRegisterModalOpen(!isRegisterModalOpen);

    const onClickSwitchToUser = () => setUserType("USER");

    return(
        <div>
            <div className={"enter-screen-page"}>
                <div className={"enter-screen-page-website-info"}>
                    <div className={"website-info-card"}>
                        <div className={"website-icon-animated"}>
                            <IconContext.Provider value={{className:"website-info-icon spine pulse"}}>
                                <SiReactos/>
                            </IconContext.Provider>
                        </div>
                        <div className={"website-info-typewriter"}>
                            <h1>Welcome!</h1>
                        </div>
                        <h3 className={"website-info-details"}>This is an Event Management System</h3>
                        <h4 className={"website-info-details"}>It is made with <a href="https://reactjs.org/"><DiReact color={"#61DBFB"}/> ReactJS</a> and <a href="https://spring.io/projects/spring-boot"><SiSpring color={"green"}/> Spring Boot</a></h4>
                    </div>
                </div>
                <div className={"enter-screen-page-input"}>
                    <div className={"enter-screen-user-card"} style={userType === "USER" ? null : {'transform':'rotateY(180deg)'}}>
                        <div className={"enter-screen-user-login"}>
                            <UserLogin openModal={openModal} onClickSwitchToMod={onClickSwitchToMod}/>
                        </div>
                        <div className={"enter-screen-mod-login"}>
                            <ModLogin openModal={openModal} onClickSwitchToUser={onClickSwitchToUser}/>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterNewUserModal isRegisterModalOpen={isRegisterModalOpen} openModal={openModal}/>
        </div>
    );
}