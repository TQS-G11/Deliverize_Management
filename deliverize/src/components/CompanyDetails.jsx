import {Avatar, CircularProgress, Grid, Paper, Rating, Typography} from "@mui/material";

const CompanyDetails = ({details}) => {
    return (
        <Paper sx={{p: 2}}>
            <Grid container spacing={2}>
                {details["id"] ?
                    (
                        <>
                            <Grid container item justifyContent="center" xs={12}>
                                <Avatar src={details["img"]} sx={{height: 100, width: 100}}/>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography variant="h4">{details["name"]}</Typography>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography>ID: {details["id"]}</Typography>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography variant="h6">Status: {details["companyStatus"]}</Typography>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography variant="h6">Deliveries: {details["nDeliveries"]}</Typography>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography align="justify">{details["companyDescription"]}</Typography>
                            </Grid>
                        </>
                    ) : (
                        <Grid container item justifyContent="center" xs={12}>
                            <CircularProgress/>
                        </Grid>
                    )
                }
            </Grid>
        </Paper>
    );
}

export default CompanyDetails;