import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";

const CompanyDeliveriesDataGrid = ({deliveries}) => {
    const [pageSize, setPageSize] = useState(10);

    const columns = [
        {field: "driver", headerName: "Driver", flex: 1},
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