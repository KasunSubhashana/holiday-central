import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import Button from '../controls/Button'
import TextField from '../controls/TextField'
import Typography from '../controls/Typography'

const initialState = {
    userEmail: '',
    userPassword: ''
}

export default function Login(props) {
    const { submitCredentials } = props;
    const [values, setValues] = useState({ initialState });

    const handleInputChange = event => {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    const submitUser = () => {
        var user = {
            username: values.userEmail,
            password: values.userPassword,
        }

        submitCredentials(user);
    }

    return (
        <Paper elevation={3} style={{ width: "330px" }}>
            <Grid container direction="column" justify="space-between" alignItems="center">
                <Grid>
                    <Typography
                        id="greeting-id"
                        variant="h5"
                        text="Welcome to Holiday Central"
                    />
                </Grid>
                <Grid>
                    <TextField
                        id="user-email"
                        name="userEmail"
                        style={{ width: "80%", margin: "5px" }}
                        label="Email"
                        value={values.userEmail}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="user-password"
                        name="userPassword"
                        style={{ width: "80%", margin: "5px" }}
                        label="Password"
                        type="password"
                        value={values.userPassword}
                        onChange={handleInputChange}
                    />
                    <Button
                        id="login-btn"
                        text="Login"
                        onClick={submitUser}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
