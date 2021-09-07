import React from 'react';


const userLoginInitialValues = {
    username:"",
    password:""
}



export default function useUserLoginForm(UseValidationLogin){
    const [userLoginRequest,setUserLoginRequest] = React.useState(userLoginInitialValues);
    const [errors,setErrors] = React.useState({});
    const [isSubmitting,setIsSubmitting] = React.useState(false);

    const handleChange = (event) => {
        const {value,name} = event.target;

        setUserLoginRequest({...userLoginRequest,[name]:value});
    }

    React.useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            setIsSubmitting(false);
        }
    },[userLoginRequest]);

    const handleSubmit = () => {
        // setErrors(UseValidationLogin(userLoginRequest));
        setIsSubmitting(true);
    }

    return {handleChange,errors,handleSubmit,userLoginRequest}
}