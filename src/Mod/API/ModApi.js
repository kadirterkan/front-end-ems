import axios from "axios";
import toast from "react-toastify";


export class ModApi {

    responseFromServerToast(reason) {
        if (reason.response.status === 400) {
            toast.error("YOU HAVE MADE A BAD REQUEST");
        } else if (reason.response.status === 403) {
            toast.error("YOU DON'T HAVE PERMISSION FOR THIS");
        } else if (reason.response.status === 500) {
            toast.error("SERVER DOESN'T RESPONSE");
        } else {
            toast.error("SOMETHING HAPPENED");
        }
    }

    async eventJoinDayCount(eventId){
        let littleRequest= {eventId:eventId};
        return axios.post("/web-api/event-controller/event-days",littleRequest)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async eventAdder(eventModel) {
        return axios.post("/web-api/event-controller/add-event",eventModel)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async getJoinedEvent() {
        return axios.get("/web-api/event-controller/joined-events")
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async getCreatedEvents() {
        return axios.get("/web-api/event-controller/created-events")
            .then((value) => {
                value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async deleteEvent() {
        return axios.post("/web-api/event-controller/delete-event")
            .then((value) => {
                value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async getEvent(eventName) {
        let littleRequest = {eventName:eventName};
        return axios.post("/web-api/event-controller/get-event",littleRequest)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async getUsersJoined(eventId) {
        let littleRequest = {eventId:eventId};
        return axios.post("/web-api/event-controller/get-event",littleRequest)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }
}