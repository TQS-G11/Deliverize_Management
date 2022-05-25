import {Box} from "@mui/material";
import RidersDataGrid from "../components/RidersDataGrid";
import PROTOTYPE from "../constants/PROTOTYPE";
import {useState, useEffect} from "react";

const RidersManagementPage = () => {
    const [ridersInfo, setRidersInfo] = useState([]);

    useEffect(() => {
        setRidersInfo(PROTOTYPE.RIDERS_INFO);
    }, []);

    return (
        <Box sx={{m: 2}}>
            <RidersDataGrid ridersInfo={ridersInfo}/>
        </Box>
    );
}

export default RidersManagementPage;