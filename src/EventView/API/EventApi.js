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


    async getAllEvents(){
        return await axios.get("/web-api/event-controller/events/event-list-users").then((value) => {
            console.log(value.data);
            return value.data;
        })
        .catch((reason) => {
            this.handleBadResponse(reason);
        });
    }

    async createEvent(newEventRequest){
        console.log(newEventRequest);

        if(newEventRequest.eventType === "ONLINE"){
            return await axios.post("/web-api/event-controller/addevent-online",newEventRequest)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            })
        }else{
            return await axios.post("/web-api/event-controller/addevent-physical",newEventRequest)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            })
        }
    }

    async getCreatedEvents(){
        return await axios.get("/web-api/event-controller/event-list/for-mods")
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async getJoinedEvents(){
        return await axios.get("/web-api/event-controller/get-joined-events")
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async getGoingEvents(){
        return await axios.get("/web-api/event-controller/get-going-events")
            .then((value) => {
                console.log("THIS IS API" + value.data);
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }
}