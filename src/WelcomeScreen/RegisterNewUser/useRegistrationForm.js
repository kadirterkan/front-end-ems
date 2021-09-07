import React from 'react';

const initialStateForMod = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    department:""
}

const initialStateForUser = {
    firstName:"",
    lastName:"",
    tcKimlikNumber:"",
    email:"",
    password:"",
    department:""
}

export function useRegistrationFormForMod(){
    const [newModRegistration,setNewModRegistration] = React.useState(initialStateForMod);
    const [modErrors,setModErrors] = React.useState({});
    const [isSubmitting,setIsSubmitting] = React.useState(false);

    const handleChangeMods = (event) => {
        const {value,name} = event.target;

        setNewModRegistration({
            ...newModRegistration,[name]:value
        });
    }

    const handleModSubmit = () => {
        // setModErrors(CheckModForm(newModRegistration));
        setIsSubmitting(true);
    }

    React.useEffect(() => {
        if(Object.keys(modErrors).length === 0 && isSubmitting){
            isSubmitting(true);
        }
    },[newModRegistration]);

    return {handleChangeMods,handleModSubmit,modErrors,newModRegistration};
}

export function useRegistrationFormForUsers(){
    const [newUserRegistration,setNewUserRegistration] = React.useState(initialStateForUser);
    const [userErrors,setUserErrors] = React.useState({});
    const [isSubmitting,setIsSubmitting] = React.useState(false);

    const handleChangeUser = (event) => {
        const {value,name} = event.target;

        setNewUserRegistration({
            ...newUserRegistration,[name]:value
        });
    }

    const handleSubmitUser = () => {
        // setUserErrors(CheckForUser(newUserRegistration));
        setIsSubmitting(true);
    }

    React.useEffect(() => {
        if(Object.keys(userErrors).length === 0 && isSubmitting){
            isSubmitting(true);
        }
    },[newUserRegistration]);

    return {handleChangeUser,handleSubmitUser,userErrors,newUserRegistration};
}