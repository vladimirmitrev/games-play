import { useContext, useEffect } from "react";

import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import AuthContext from "../../contexts/authContext";

const Logout = () => {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);
    useEffect(() => {
        authService.logout()
            .then(() => logoutHandler())
            .catch(() => {
                logoutHandler();
                navigate(Path.Home)
            })
    }, [])
    return null;
}

export default Logout;