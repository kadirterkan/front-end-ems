import {useState,useEffect} from 'react';


const useForm = (pageNumber,newEventQuery,setNewEventQuery,setTrue,setFalse,validate,setIsLoading) => {
    const [errors,setErrors] = useState({});

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
        setNewEventQuery({
            ...newEventQuery,
            [name]:input});
        setIsLoading(false);
    };
    

    const handleWithKeyAndValue = (key,value) => {
        setIsLoading(true);
        setNewEventQuery({
            ...newEventQuery,
            [key]:value
        });
        setIsLoading(false);
    }

    const handleType = (value) => {
        setIsLoading(true);
        if(value==="PHYSICAL"){
            setNewEventQuery({
                eventName:newEventQuery.eventName,
                quota:newEventQuery.quota,
                startTime:newEventQuery.startTime,
                endTime:newEventQuery.endTime,
                eventPrivacy:newEventQuery.eventPrivacy,
                eventCategory:newEventQuery.eventCategory,
                eventDescription:newEventQuery.eventDescription,
                questions:newEventQuery.questions,
                base64Image:newEventQuery.base64Image,
                eventCoordinates:{lat:0,lng:0,eventLocationName:""},
                eventType:"PHYSICAL"
            });
        }else{
            setNewEventQuery({
                eventName:newEventQuery.eventName,
                quota:newEventQuery.quota,
                startTime:newEventQuery.startTime,
                endTime:newEventQuery.endTime,
                eventPrivacy:newEventQuery.eventPrivacy,
                eventCategory:newEventQuery.eventCategory,
                eventDescription:newEventQuery.eventDescription,
                questions:newEventQuery.questions,
                base64Image:newEventQuery.base64Image,
                eventUrl:"",
                eventType:"ONLINE"
            });
        }
        setIsLoading(false);
    }

    useEffect(
        () => {
            if(validate!=null){
                setErrors(validate(newEventQuery));
            }            
          },
          [newEventQuery,pageNumber]
    );

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            setTrue();
        }else{
            setFalse();
        }
    },[errors]);

    const handleSubmit = () => {
        if(validate!=null){
            setErrors(validate(newEventQuery));
        }
    }


    return {handleChange,newEventQuery,handleSubmit,setErrors,errors,handleWithKeyAndValue,handleType};
};

export default useForm;