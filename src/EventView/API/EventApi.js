import axios from "axios";
import toast from "toast";


export class EventApi {

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
        axios.get("/web-api/events/event-list").then((value) => {
            return value.data;
        })
        .catch((reason) => {
            this.handleBadResponse(reason);
        });
    }
}