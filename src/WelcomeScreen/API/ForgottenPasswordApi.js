import {toast} from "react-toastify";
import axios from "axios";


export class ForgottenPasswordApi {
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

    async getUserInfo(emailValue){

        return axios.post(`/web-api/user-controller/forgotten-password/email`,{thisguysemail:emailValue,something:"justsomevalue"})
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async sendMailRequest(emailvalue){

        return axios.post("/web-api/user-controller/forgotten-password/token-request/email",{thisguysemail:emailvalue,something:"justsomevalue"})
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async postVerificationCode(emailValue,token){

        return axios.post(`/web-api/user-controller/forgotten-password/token/${token}`,{thisguysemail:emailValue,something:"justsomevalue"})
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }

    async postNewPassword(emailValue,newPassword){

        return axios.post(`/web-api/user-controller/forgotten-password/password/${newPassword}`,{thisguysemail:emailValue,something:"justsomevalue"})
            .then((value) => {
                return value.data;
            })
            .catch((reason) => {
                this.responseFromServerToast(reason);
            });
    }
}