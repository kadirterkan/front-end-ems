import axios from "axios";
import {toast} from "react-toastify";


export default class EventApi {

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


    getAllEvents(){
        return axios.get("/web-api/event-controller/events/event-list").then((value) => {
            return value.data;
        })
        .catch((reason) => {
            this.handleBadResponse(reason);
        });
    }
}