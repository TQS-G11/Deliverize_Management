import {useEffect, useState} from "react";
import {Avatar, CircularProgress} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import URI from "../constants/URI";

const RidersDataGrid = () => {
    const prototypeRidersInfo = [
        {
            "username": "babydweet",
            "name": "Dwight Fairfield",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Dwight-1.png",
            "rating": 4.0,
            "nDeliveries": 1984,
            "id": 1
        },
        {
            "username": "meghead",
            "name": "Meg Thomas",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Meg-1.png",
            "rating": 1.8,
            "nDeliveries": 1337,
            "id": 2
        },
        {
            "username": "Blendette",
            "name": "Claudette Morel",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Claudette-1.png",
            "rating": 2.3,
            "nDeliveries": 39,
            "id": 3
        },
        {
            "username": "IronWillFC",
            "name": "Jake Park",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Jake-Park-1.png",
            "rating": 3.7,
            "nDeliveries": 324,
            "id": 4
        },
        {
            "username": "toxic_nea",
            "name": "Nea Karlsson",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Nea-1.png",
            "rating": 3.3,
            "nDeliveries": 96,
            "id": 5
        },
        {
            "username": "DS_Andy",
            "name": "Laurie Strode",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Laurie-1.png",
            "rating": 3.0,
            "nDeliveries": 112,
            "id": 6
        },
        {
            "username": "BigBrainAceMain",
            "name": "Ace Visconti",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Ace-1.png",
            "rating": 4.9,
            "nDeliveries": 506,
            "id": 7
        },
        {
            "username": "unbreakabill",
            "name": "William Overbeck",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/William-1.png",
            "rating": 4.3,
            "nDeliveries": 907,
            "id": 8
        },
        {
            "username": "fengmoon",
            "name": "Feng Min",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Feng-Min-1.png",
            "rating": 4.1,
            "nDeliveries": 322,
            "id": 9
        },
        {
            "username": "MrKing",
            "name": "David King",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/David-King-1.png",
            "rating": 4.4,
            "nDeliveries": 13,
            "id": 10
        },
        {
            "username": "NotSTEVE",
            "name": "Steve Harrington",
            "pfp": "https://digistatement.com/wp-content/uploads/2021/10/Steve-1.png",
            "rating": 4.8,
            "nDeliveries": 989,
            "id": 11
        },
        {
            "username": "girlfoe",
            "name": "Isabel Rosário",
            "pfp": "https://64.media.tumblr.com/ef3934819ea2c15eb96f91323123f1fa/4fd5986d05fffded-3c/s540x810/d19df1ef64a5e56658c20523347aa0f0f6351174.jpg",
            "rating": 0.1,
            "nDeliveries": 666,
            "id": 12
        },
    ];

    const navigate = useNavigate();

    const columns = [
        {
            field: "pfp", headerName: "",
            renderCell: (params) => {
                console.log(params);
                return <Avatar src={params.row.pfp}/>
            }
        },
        {field: "username", headerName: "Username", flex: 1},
        {field: "name", headerName: "Name", flex: 1},
        {field: "rating", headerName: "Rating", type: "number", flex: 1, valueGetter: ({value}) => value.toFixed(1)},
        {field: "nDeliveries", headerName: "# Deliveries Made", type: "number", flex: 1},
        {field: "id", headerName: "ID", flex: 1},
    ];

    const [pageSize, setPageSize] = useState(10);
    const [ridersInfo, setRidersInfo] = useState([]);

    useEffect(() => {
        setRidersInfo(prototypeRidersInfo);
    }, []);

    const handleOnCellClick = (params) => {
        console.log(`Clicked on rider with ID: ${params.id}`);
        navigate(`${URI.RIDERS}/${params.id}`);
    }

    return (
        <>
            {
                ridersInfo.length === 0 ?
                    (
                        <CircularProgress/>
                    ) : (
                        <DataGrid
                            rows={ridersInfo}
                            columns={columns}
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[5, 10, 15]}
                            pagination
                            autoHeight
                            disableSelectionOnClick
                            onCellClick={handleOnCellClick}
                        />
                    )
            }
        </>
    );
}

export default RidersDataGrid;