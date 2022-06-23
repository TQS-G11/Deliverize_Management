import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import URI from "../constants/URI";

const RiderDeliveriesDataGrid = ({deliveries}) => {
    const navigate = useNavigate();

    const navigateToCompany = (companyId) => navigate(`${URI.COMPANIES}/${companyId}`);

    const columns = [
        {
            field: "company", headerName: "Company", flex: 1,
            valueGetter: (params) => params.row.company.name,
            renderCell: (params) => <Typography
                onClick={() => navigateToCompany(params.row.company.id)}>{params.row.company.name}</Typography>
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