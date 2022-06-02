import {Grid, Paper} from "@mui/material";
import CompaniesDataGrid from "../components/CompaniesDataGrid";
import {useEffect, useState} from "react";
import PROTOTYPE from "../constants/PROTOTYPE";
import {findUsersByRole} from "../api/Api";

const CompaniesPage = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        findUsersByRole()
            .then()
        setCompanies(PROTOTYPE.COMPANIES);
    }, []);

    return (
        <Paper sx={{m: 2}}>
            <Grid container justifyContent="center">
                <CompaniesDataGrid companies={companies}/>
            </Grid>
        </Paper>
    );
}

export default CompaniesPage;