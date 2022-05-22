import {Box, Grid, Paper, Typography} from "@mui/material";
import CompanyList from "../constants/CompanyList";

const CompaniesPage = () => {
    return (
        <Grid container justifyContent="center">
            <Paper sx={{m: 2, maxWidth: 500}}>
                <Typography variant="h6" sx={{textAlign: "center"}}>Registered Companies</Typography>
                <CompanyList/>
            </Paper>
        </Grid>
    );
}

export default CompaniesPage;