import {toast} from "react-toastify";
import axios from "axios";

export class ModViewApi{

    constructor() {
        toast.configure();
    }


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

    async getAllCreatedEvents(){
        return axios.get(`/web-api/event-controller/events/get-all-created`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async getAllHostingEvents(){
        return axios.get(`/web-api/event-controller/get-created-events-not-ended`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async getAllHostedEvents(){
        return axios.get(`/web-api/event-controller/get-created-events-ended`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async getEventDayStatistics(){
        return axios.get(`/web-api/event-controller/get-day-statistics`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

}