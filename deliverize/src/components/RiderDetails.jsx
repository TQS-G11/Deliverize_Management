import {Avatar, CircularProgress, Grid, Paper, Rating, Typography} from "@mui/material";

const RiderDetails = ({details}) => {
    return (
        <Paper sx={{p: 2}}>
            <Grid container spacing={2}>
                {details["id"] ?
                    (
                        <>
                            <Grid container item justifyContent="center" xs={12}>
                                <Avatar src={details["pfp"]} sx={{height: 100, width: 100}}/>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography variant="h4">{details["name"]}</Typography>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Rating precision={0.1}
                                        value={details["rating"]}
                                        disabled={true}
                                />
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography variant="h6">Username: {details["username"]}</Typography>
                            </Grid>
                            <Grid container item justifyContent="center" xs={12}>
                                <Typography variant="h6">{details["nDeliveries"]} deliveries made</Typography>
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

export default RiderDetails;