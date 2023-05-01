import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../components/user/login'
import Storage from '../helpers/localStorageHelper'
import AuthService from '../services/authService'

export default function LoginPage() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    function submitCredentials(user) {
        AuthService.Login(user)
            .then(response => {
                debugger
                if (response.status === 200) {
                    Storage.SetLocalStorage('token', response.data.token);
                    setAuthenticated(true);
                }
            })
            .catch(error => {
                debugger
                console.log(error);
            })
    }

    if (isAuthenticated) {
        return (<Navigate to="/" />);
    }

    return (<Login submitCredentials={submitCredentials} />)
}
