import {Route, Switch} from "react-router-dom";
import EmailVerificationRedirection from "../WelcomeScreen/EmailVerification/EmailVerificationRedirection";

export default function ServerResponsePages () {
    return(
        <div>
            <Switch>
                {/*<Route path={"/unauthorized"} exact/>*/}
                {/*<Route path={"/404"} exact/>*/}
                {/*<Route path={"/500"} exact/>*/}
            </Switch>
        </div>
    )
}