import React, {useState} from 'react';

export default function useForm (oldValues,validate,pageNumber) {




    const [editEventQuery,setEditEventQuery] = React.useState(null);
    const [errors,setErrors] = React.useState({});


    const [isLoading,setIsLoading] = React.useState(false);
    const [isSubmitted,setIsSubmitted] = React.useState(true);

    const handleChange = event => {
        setIsLoading(true);
        const {name,value} = event.target;
        let input;
        if(name ==="startTime" ||name === "endTime"){
            input = new Date(value);
        }else if(name === "quota"){
            input = Number(value);
        }else{
            input = value;
        }
        setEditEventQuery({
            ...editEventQuery,
            [name]:input});
        setIsLoading(false);
    }

    const handleWithKeyAndValue = (key,value) => {
        setIsLoading(true);
        setEditEventQuery({
            ...editEventQuery,
            [key]:value
        });
        setIsLoading(false);
    }

    React.useEffect(
        () => {
            if(validate!=null && editEventQuery !== null && editEventQuery !== undefined){
                setErrors(validate(editEventQuery));
            }
        },
        [editEventQuery,pageNumber]
    );

    React.useEffect(() => {
        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
        }else{
            setIsSubmitted(false);
        }
    },[errors]);

    const handleSubmit = () => {
        if(validate!=null){
            setErrors(validate(editEventQuery));
        }
    }

    // const switchType = () => {
    //     setIsLoading(true);
    //     if(editEventQuery.eventType === "ONLINE"){
    //         setEditEventQuery({
    //             eventName:editEventQuery.eventName,
    //             quota:editEventQuery.quota,
    //             startTime:editEventQuery.startTime,
    //             endTime:editEventQuery.endTime,
    //             eventPrivacy:editEventQuery.eventPrivacy,
    //             eventCategory:editEventQuery.eventCategory,
    //             eventDescription:editEventQuery.eventDescription,
    //             eventQuestions:editEventQuery.eventQuestions,
    //             createdBy:editEventQuery.createdBy,
    //             base64Image:editEventQuery.base64Image,
    //             goingSize:25,
    //             eventCoordinates:{lat:0,lng:0,eventLocationName:""},
    //             eventType:"PHYSICAL"
    //         });
    //     }else{
    //         setEditEventQuery({
    //             eventName:editEventQuery.eventName,
    //             quota:editEventQuery.quota,
    //             startTime:editEventQuery.startTime,
    //             endTime:editEventQuery.endTime,
    //             eventPrivacy:editEventQuery.eventPrivacy,
    //             eventCategory:editEventQuery.eventCategory,
    //             eventDescription:editEventQuery.eventDescription,
    //             eventQuestions:editEventQuery.eventQuestions,
    //             createdBy:editEventQuery.createdBy,
    //             base64Image:editEventQuery.base64Image,
    //             goingSize:25,
    //             eventUrl:"",
    //             eventType:"ONLINE"
    //         });
    //     }
    //     setIsLoading(false);
    // }


    return {handleChange,handleWithKeyAndValue,handleSubmit,editEventQuery,errors,isSubmitted,setEditEventQuery};
}