import axios from "axios";
import {toast} from "react-toastify";


export class RegisterApi {

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

    async RegisterUser(newUserRegistration) {
        console.log(newUserRegistration);
        return axios.post("/user-registration",newUserRegistration)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            })
    }

    async RegisterMod(newModRegistration) {
        console.log(newModRegistration);
        return axios.post("/moderator-registration",newModRegistration)
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            })
    }
}