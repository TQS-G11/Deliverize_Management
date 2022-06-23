import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import {Typography} from "@mui/material";
import URI from "../constants/URI";
import {useNavigate} from "react-router-dom";

const CompanyDeliveriesDataGrid = ({deliveries}) => {
    const navigate = useNavigate();

    const navigateToRider = (riderId) => navigate(`${URI.RIDERS}/${riderId}`);

    const [pageSize, setPageSize] = useState(10);

    const columns = [
        {
            field: "rider", headerName: "Rider", flex: 1,
            valueGetter: (params) => params.row.rider?.name,
            renderCell: (params) => params.row.rider ?
                <Typography
                    onClick={() => navigateToRider(params.row.rider.id)}>{params.row.rider.name}
                </Typography>
                :
                <></>
        },
        {
            field: "requestedAt",
            headerName: "Ordered",
            type: "dateTime",
            flex: 1,
            valueGetter: ({value}) => value && new Date(value)
        },
        {
            field: "deliveredAt",
            headerName: "Delivered",
            type: "dateTime",
            flex: 1,
            valueGetter: ({value}) => value && new Date(value)
        },
        {field: "buyer", headerName: "Buyer", type: "number", flex: 1},
        {field: "id", headerName: "ID", flex: .5},
    ];

    return (
        <DataGrid
            rows={deliveries}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 15]}
            pagination
            autoHeight
            disableSelectionOnClick
        />
    );
};

export default CompanyDeliveriesDataGrid;