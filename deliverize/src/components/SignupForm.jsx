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

const SignupForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onSignup(username, password);
    };

    const resetErrors = (resetUsernameError, resetPasswordError) => {
        if (resetUsernameError)
            setUsernameErrorMsg("");
        if (resetPasswordError)
            setPasswordErrorMsg("");
    };

    const onSignup = (username, password) => {
        console.log(`username: ${username}, password: ${password}`);
        signup(username, password)
            .then((response) => {
                const {token} = response.data;
                window.localStorage.setItem("token", token);
                console.log(`stored token ${token}`);
                window.localStorage.setItem("username", username);
                login(username, password)
                    .then((response) => {
                        const {token} = response.data;
                        window.localStorage.setItem("token", token);
                        console.log(`stored token ${token}`);
                        window.localStorage.setItem("username", username);
                        navigate(URI.HOME);
                        window.location.reload();
                    })
                    .catch((error) => console.log(error));
                // navigate(URI.HOME);
                // window.location.reload();
            })
            .catch((error) => {
                let data = error.response["data"];
                setUsernameErrorMsg(data["username"] ?? "");
                setPasswordErrorMsg(data["password"] ?? "");
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
                                    Sign up
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
                                        resetErrors(true, false)
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
                                        resetErrors(false, true)
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
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center">
                                    <p>Already have an account?</p>
                                    <Link
                                        style={{cursor: "pointer"}}
                                        color="secondary"
                                        href={URI.LOGIN}
                                    >
                                        <strong>Log in!</strong>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Paper>
        </Grid>
    );
};
export default SignupForm;