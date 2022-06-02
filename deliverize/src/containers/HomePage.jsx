import {useEffect, useState} from "react";
import {getDeliveries} from "../api/Api";
import {Alert, Grid, Paper} from "@mui/material";
import DeliveriesDataGrid from "../components/DeliveriesDataGrid";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
    const [deliveries, setDeliveries] = useState([]);

    const fetchDeliveries = () => {
        getDeliveries({})
            .then((response) => {
                setDeliveries(response.data.orders);
            }).catch((error) => {
            console.log(error);
        })
        ;
    };

    useEffect(() => {
        if (window.localStorage.getItem("token"))
            fetchDeliveries();
    }, []);

    return (
        <>
            {window.localStorage.getItem("token") === null ?
                (
                    <Grid container justifyContent="center">
                        <Alert severity="warning" variant="filled" sx={{mt: 2, maxWidth: 500}}>
                            Log in as a manager to access deliveries.
                        </Alert>
                        <LoginForm/>
                    </Grid>
                ) : (
                    <Paper sx={{m: 2}}>
                        <Grid container justifyContent="center">
                            <DeliveriesDataGrid deliveries={deliveries}/>
                        </Grid>
                    </Paper>
                )
            }
        </>
    );
};

export default HomePage;