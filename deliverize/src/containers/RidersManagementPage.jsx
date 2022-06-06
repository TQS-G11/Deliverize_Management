import {Box} from "@mui/material";
import RidersDataGrid from "../components/RidersDataGrid";
import {useState, useEffect} from "react";
import {findUsersByRole} from "../api/Api";

const RidersManagementPage = () => {
    const [ridersInfo, setRidersInfo] = useState([]);

    const fetchCompanies = () => {
        findUsersByRole("RIDER")
            .then((response) => {
                setRidersInfo(response.data);
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
        <Box sx={{m: 2}}>
            <RidersDataGrid ridersInfo={ridersInfo}/>
        </Box>
    );
}

export default RidersManagementPage;