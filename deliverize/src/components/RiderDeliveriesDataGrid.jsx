import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";

const RiderDeliveriesDataGrid = ({deliveries}) => {
    const columns = [
        {field: "company", headerName: "Company", flex: 1},
        {
            field: "orderedAt",
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

    const [pageSize, setPageSize] = useState(10);

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

export default RiderDeliveriesDataGrid;