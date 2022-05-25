import {useEffect, useState} from "react";
import {Avatar, CircularProgress} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import URI from "../constants/URI";

const RidersDataGrid = ({ridersInfo}) => {
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

    const handleOnCellClick = (params) => navigate(`${URI.RIDERS}/${params.id}`);

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