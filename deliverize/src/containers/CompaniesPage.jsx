import {Alert, Grid, Paper} from "@mui/material";
import CompaniesDataGrid from "../components/CompaniesDataGrid";
import {useEffect, useState} from "react";
import {findUsersByRole} from "../api/Api";
import LoginForm from "../components/LoginForm";

const CompaniesPage = () => {
    const [companies, setCompanies] = useState([]);

    const fetchCompanies = () => {
        findUsersByRole("COMPANY")
            .then((response) => {
                setCompanies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (window.localStorage.getItem("token"))
            fetchCompanies();
    }, []);

    return (
        <>
            {window.localStorage.getItem("token") === null ?
                (
                    <Grid container justifyContent="center">
                        <Alert severity="warning" variant="filled" sx={{mt: 2, maxWidth: 500}}>
                            Log in as a manager to access companies.
                        </Alert>
                        <LoginForm/>
                    </Grid>
                ) : (
                    <Paper sx={{m: 2}}>
                        <Grid container justifyContent="center">
                            <CompaniesDataGrid companies={companies} fetchCompanies={fetchCompanies}/>
                        </Grid>
                    </Paper>
                )
            }
        </>
    );
}

export default CompaniesPage;