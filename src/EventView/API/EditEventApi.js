import {toast} from "react-toastify";
import axios from "axios";

export default class EditEventApi{
    handleBadResponse(reason){
        if(reason.response.status === 400){
            toast.error("BAD REQUEST");
        }else if(reason.response.status === 403){
            toast.error("NO PERMISSION");
        }else if(reason.response.status === 500){
            toast.error("NO RESPONSE FROM SERVER");
        }else{
            toast.error("SOME UNKNOWN ERROR OCCURRED");
        }
    }

    async editEvent(editEventRequest){
        let forServer = {...editEventRequest,id:editEventRequest.eventId};
        if(editEventRequest.eventType === "ONLINE"){
            return await axios.post("/web-api/event-controller/editevent-online",forServer)
                .then((value) => {
                    console.log(value.data);
                    return value.data;
                })
                .catch((reason) => {
                    this.handleBadResponse(reason);
                })
        }else{
            return await axios.post("/web-api/event-controller/editevent-physical",forServer)
                .then((value) => {
                    return value.data;
                })
                .catch((reason) => {
                    this.handleBadResponse(reason);
                })
        }
    }}