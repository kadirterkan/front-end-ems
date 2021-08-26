import {useState,useEffect} from 'react';


const useForm = (pageNumber,newEventQuery,setNewEventQuery,setTrue,setFalse,validate) => {
    const [errors,setErrors] = useState({});

    const handleChange = event => {
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
    };

    

    const handleWithKeyAndValue = (key,value) => {
        setNewEventQuery({
            ...newEventQuery,
            [key]:value
        });
    }

    const handleType = (value) => {
        if(value==="physical"){
            setNewEventQuery({
                ...newEventQuery,
                eventCoordinates:{lat:0,lng:0,eventLocationName:""},
                eventType:"physical"
            });
        }else{
            setNewEventQuery({
                ...newEventQuery,
                eventUrl:"",
                eventType:"online"
            });
        }
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
        if(validate[pageNumber-1]!=null){
            setErrors(validate[pageNumber-1](newEventQuery));
        }
    }


    return {handleChange,newEventQuery,handleSubmit,setErrors,errors,handleWithKeyAndValue,handleType};
};

export default useForm;