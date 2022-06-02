import {useEffect, useState} from "react";
import {
    Alert,
    Avatar,
    Button,
    CardContent, Fade,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import URI from "../constants/URI";
import {login, signup} from "../api/PublicApi";
import {useNavigate} from "react-router-dom";

const RegisterCompanyForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
    const [nameErrorMsg, setNameErrorMsg] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onSignup(username, password, name);
    };

    const resetErrors = (resetUsernameError, resetPasswordError, resetNameError) => {
        if (resetUsernameError)
            setUsernameErrorMsg("");
        if (resetPasswordError)
            setPasswordErrorMsg("");
        if (resetNameError)
            setNameErrorMsg("");
    };

    const onSignup = (username, password, name, role = "COMPANY") => {
        console.log(`username: ${username}, password: ${password}`);
        signup(username, password, name, role)
            .then(() => {
                login(username, password)
                    .then((response) => {
                        let token = response.data.token.token;
                        window.localStorage.setItem("token", token);
                        window.localStorage.setItem("username", username);
                        window.localStorage.setItem("name", name);
                        navigate(URI.HOME);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} sx={{m: 2, maxWidth: 500}}>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <Grid container justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item container xs={12} justifyContent="center">
                                <Avatar sx={{width: 50, height: 50}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="h5">
                                    Register Company
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    placeholder="Enter Username"
                                    value={username}
                                    error={Boolean(usernameErrorMsg)}
                                    helperText={usernameErrorMsg}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        resetErrors(true, false, false);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Company name"
                                    placeholder="Enter company name"
                                    value={name}
                                    error={Boolean(nameErrorMsg)}
                                    helperText={nameErrorMsg}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        resetErrors(false, false, true)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Password"
                                    error={Boolean(passwordErrorMsg)}
                                    helperText={passwordErrorMsg}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        resetErrors(false, true, false)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="secondary"
                                    type="submit"
                                >
                                    Register company
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Paper>
        </Grid>
    );
};
export default RegisterCompanyForm;