import axios from "axios";
import {toast} from "react-toastify";

export class SystemApi{

    constructor() {
        toast.configure();
    }

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

    async getAuthentication(){
        return axios.get("/user-type-and-name")
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            })
    }

    async logOut(){
        return axios.get("/log-out");
    }
}