import {CircularProgress} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";

const DeliveriesDataGrid = ({deliveries}) => {
    const [pageSize, setPageSize] = useState(10);

    const columns = [
        {
            field: "company", headerName: "Company", flex: 1,
            valueGetter: (params) => params.row.company.name
        },
        {field: "buyer", headerName: "Buyer", flex: 1},
        {
            field: "rider", headerName: "Rider", flex: 1,
            valueGetter: (params) => params.row.rider?.name
        },
        {field: "deliveryStatus", headerName: "Status", flex: 1},
        {
            field: "requestedAt",
            headerName: "Ordered",
            type: "dateTime",
            flex: 2,
            valueGetter: ({value}) => value && new Date(value)
        },
        {
            field: "acceptedAt",
            headerName: "Accepted",
            type: "dateTime",
            flex: 2,
            valueGetter: ({value}) => value && new Date(value)
        },
        {
            field: "deliveredAt",
            headerName: "Delivered",
            type: "dateTime",
            flex: 2,
            valueGetter: ({value}) => value && new Date(value)
        },
        {field: "origin", headerName: "Origin", flex: 1},
        {field: "destination", headerName: "Destination", flex: 1},
        {field: "id", headerName: "ID", flex: .5},
        {
            field: "price", headerName: "Price", flex: .5,
            valueGetter: (params) => `${params.row.price}€`
        },
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

export default DeliveriesDataGrid;