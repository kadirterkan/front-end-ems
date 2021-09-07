import axios from "axios";
import {toast} from "react-toastify";

export class EventPageApi {

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

    async getEvent(eventId){
        return axios.get(`/web-api/event-controller/events/event-page-mods/${eventId}`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async getUserEventPage(eventId){
        return axios.get(`/web-api/event-controller/events/event-page-users/${eventId}`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async joinEventWithoutAnswers(eventId){
        return axios.get(`/web-api/event-controller/join-event-without-answers/${eventId}`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async joinEventWithAnswers(eventId,answers){
        return axios.post(`/web-api/event-controller/join-event-with-answers/${eventId}`,{answers:answers})
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async interestedEvent(eventId){
        return axios.get(`/web-api/event-controller/interested-event/${eventId}`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async cancelEvent(eventId){
        return axios.get(`/web-api/event-controller/delete-event/${eventId}`)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async getQuestions(eventId){
        return axios.get(`/web-api/event-controller/get-event-questions/${eventId}`)
            .then((value) => {
                console.log(value.data.length);
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async askQuestion(eventId,question){
        return axios.post(`/web-api/event-controller/ask-question/${eventId}/`,{userQuestion:question})
            .then((value) => {
                console.log(value.data.length);
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

    async leaveEvent(eventId){
        return axios.get(`/web-api/event-controller/leave-event/${eventId}`)
            .then((value) => {
                console.log(value.data.length);
                return value.data;
            })
            .catch((reason) => {
                this.handleBadResponse(reason);
            });
    }

}