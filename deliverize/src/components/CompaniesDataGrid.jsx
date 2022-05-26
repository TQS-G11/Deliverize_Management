import {DataGrid} from "@mui/x-data-grid";
import {Avatar, Button, Typography} from "@mui/material";
import {useState} from "react";
import URI from "../constants/URI";
import {useNavigate} from "react-router-dom";

const CompaniesDataGrid = ({companies}) => {
    const navigate = useNavigate();

    const [pageSize, setPageSize] = useState(10);

    const statuses = ["Active", "Awaiting Approval", "Blacklisted"];

    const handleOnCellClick = (params) => navigate(`${URI.COMPANIES}/${params.id}`);

    const companyActionButton = (row) => {
        switch (row.status) {
            case statuses[0]:
                return <Button variant="contained" fullWidth={true} color="error">Blacklist</Button>;
            case statuses[1]:
                return <Button variant="contained" fullWidth={true} color="success">Approve</Button>;
            case statuses[2]:
                return <Button variant="contained" fullWidth={true}>Enable</Button>;
            default:
                return <Typography>Invalid status: {row.status}</Typography>;
        }
    }

    const navigateToCompany = (companyId) => navigate(`${URI.COMPANIES}/${companyId}`);

    const columns = [
        {
            field: "img", headerName: "",
            renderCell: (params) => <Avatar src={params.row.img} onClick={() => navigateToCompany(params.row.id)}/>
        },
        {
            field: "name", headerName: "Name", flex: 1,
            renderCell: (params) => <Typography
                onClick={() => navigateToCompany(params.row.id)}>{params.row.name}</Typography>
        },
        {field: "description", headerName: "Description", flex: 1},
        {field: "nDeliveries", headerName: "# Deliveries", type: "number", flex: 1},
        {field: "id", headerName: "ID", flex: 1},
        {field: "status", headerName: "Status", type: "singleSelect", valueOptions: statuses, flex: 1},
        {
            field: null, headerName: "Action", flex: 1, sortable: false, filterable: false,
            renderCell: (params) => companyActionButton(params.row)
        },
    ];

    return (
        <DataGrid
            rows={companies}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 15]}
            pagination
            autoHeight
            disableSelectionOnClick
        />
    );
}

export default CompaniesDataGrid;