import {useParams} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import RiderDetails from "../components/RiderDetails";
import RiderDeliveriesDataGrid from "../components/RiderDeliveriesDataGrid";
import PROTOTYPE from "../constants/PROTOTYPE";
import {useEffect, useState} from "react";

const RiderDetailsPage = () => {
    const {id} = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        setDetails(PROTOTYPE.RIDER_DETAILS);
    }, []);

    return (
        <Grid container justifyContent="center">
            <Grid item container justifyContent="center" xs={12}>
                <Box sx={{m: 2}} maxWidth={500}>
                    <RiderDetails details={details}/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{m: 2}}>
                    <RiderDeliveriesDataGrid riderId={id}/>
                </Box>
            </Grid>
        </Grid>
    );


}

export default RiderDetailsPage;