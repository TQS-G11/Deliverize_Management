import {Avatar, CircularProgress} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";

const CompanyDeliveriesDataGrid = ({deliveries}) => {
    const [pageSize, setPageSize] = useState(10);

    const columns = [
        {
            field: "driverImg", headerName: "", sortable: false, filterable: false,
            renderCell: (params) => <Avatar src={params.row.driverImg}/>,
        },
        {field: "driver", headerName: "Driver", flex: 1},
        {field: "orderDateTime", headerName: "Ordered", type: "dateTime", flex: 1, valueGetter: ({value}) => value && new Date(value)},
        {
            field: "deliveryDateTime",
            headerName: "Delivered",
            type: "dateTime",
            flex: 1,
            valueGetter: ({value}) => value && new Date(value)
        },
        {field: "buyer", headerName: "Buyer", type: "number", flex: 1},
        {field: "id", headerName: "ID", flex: 1},
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

export default CompanyDeliveriesDataGrid;