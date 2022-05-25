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

    const columns = [
        {
            field: "img", headerName: "",
            renderCell: (params) => <Avatar src={params.row.img}/>
        },
        {field: "name", headerName: "Name", flex: 1},
        {field: "description", headerName: "Description", flex: 1},
        {field: "nDeliveries", headerName: "# Deliveries", type: "number", flex: 1},
        {field: "id", headerName: "ID", flex: 1},
        {field: "status", headerName: "Status", type: "singleSelect", valueOptions: statuses, flex: 1},
        {
            field: "", headerName: "Action", flex: 1,
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
            onCellClick={handleOnCellClick}
        />
    );
}

export default CompaniesDataGrid;