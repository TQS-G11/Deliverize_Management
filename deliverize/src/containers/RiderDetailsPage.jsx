import {useParams} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import RiderDetails from "../components/RiderDetails";
import RiderDeliveriesDataGrid from "../components/RiderDeliveriesDataGrid";

const RiderDetailsPage = () => {
    const {id} = useParams();

    return (
        <Grid container justifyContent="center">
            <Grid item container justifyContent="center" xs={12}>
                <Box sx={{m: 2}} maxWidth={500}>
                    <RiderDetails riderId={id}/>
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