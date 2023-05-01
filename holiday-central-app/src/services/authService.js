import useAuthHeader from "../hooks/useAuthHeader";
import http from "./common/httpCommon";

function Login(user) {
    return http.post("user/login", user);
}

export default { Login }