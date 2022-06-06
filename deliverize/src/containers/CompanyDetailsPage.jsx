import {useParams} from "react-router-dom";
import PROTOTYPE from "../constants/PROTOTYPE";
import {Alert, Box, Grid, Typography} from "@mui/material";
import CompanyDetails from "../components/CompanyDetails";
import {useEffect, useState} from "react";
import CompanyDeliveriesDataGrid from "../components/CompanyDeliveriesDataGrid";
import {getDeliveries, getUserDetails} from "../api/Api";

const CompanyDetailsPage = () => {
    const {id} = useParams();

    const [details, setDetails] = useState({});
    const [deliveries, setDeliveries] = useState([]);
    const [errors, setErrors] = useState([]);

    const fetchDeliveriesThenDetails = () => {
        getDeliveries({companyId: id})
            .then((response) => {
                let nDeliveries = response.data.orders.length;
                setDeliveries(response.data.orders);
                getUserDetails(id)
                    .then(response => {
                        setDetails({...response.data, nDeliveries: nDeliveries});
                    })
                    .catch(error => {
                        console.log(error);
                        setErrors(error.response.data.errors);
                    })
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
        ;
    }

    useEffect(() => {
        fetchDeliveriesThenDetails();
    }, []);

    return (
        <>
            {errors.length === 0 ?
                (
                    <Grid container justifyContent="center">
                        <Grid item container justifyContent="center" xs={12}>
                            <Box sx={{m: 2}} maxWidth={900}>
                                <CompanyDetails details={details}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center">Deliveries</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{m: 2}}>
                                <CompanyDeliveriesDataGrid deliveries={deliveries}/>
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <Box sx={{m: 2}}>
                        <Grid container spacing={1}>
                            {errors.map(error =>
                                <Grid item>
                                    <Alert severity="error">{error}</Alert>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                )
            }
        </>
    );
}

export default CompanyDetailsPage;