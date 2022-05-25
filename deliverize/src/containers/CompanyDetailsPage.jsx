import {useParams} from "react-router-dom";
import PROTOTYPE from "../constants/PROTOTYPE";
import {Box, Grid, Typography} from "@mui/material";
import CompanyDetails from "../components/CompanyDetails";
import {useEffect, useState} from "react";
import CompanyDeliveriesDataGrid from "../components/CompanyDeliveriesDataGrid";

const CompanyDetailsPage = () => {
    const {id} = useParams();

    const [details, setDetails] = useState({});
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        setDetails(PROTOTYPE.COMPANY_DETAILS);
        setDeliveries(PROTOTYPE.COMPANY_DELIVERIES);
    }, []);

    return (
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
    );
}

export default CompanyDetailsPage;