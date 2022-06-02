import {CircularProgress} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";

const DeliveriesDataGrid = ({deliveries}) => {
    const [pageSize, setPageSize] = useState(10);

    const columns = [
        {field: "buyer", headerName: "Buyer", type: "number", flex: 1},
        {field: "rider", headerName: "Rider", flex: 1},
        {field: "deliveryStatus", headerName: "Status", flex: 1},
        {
            field: "requestedAt",
            headerName: "Ordered",
            type: "dateTime",
            flex: 1,
            valueGetter: ({value}) => value && new Date(value)
        },
        {
            field: "acceptedAt",
            headerName: "Accepted",
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
        {field: "origin", headerName: "Origin", flex: 1},
        {field: "destination", headerName: "Destination", flex: 1},
        {field: "id", headerName: "ID", flex: 1},
        {field: "price", headerName: "Price", flex: 1},
    ];

    return (
        <>
            {
                deliveries.length === 0 ?
                    (
                        <CircularProgress/>
                    ) : (
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
                    )
            }
        </>
    );
};

export default DeliveriesDataGrid;