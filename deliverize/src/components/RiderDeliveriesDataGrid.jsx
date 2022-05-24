import {Avatar, CircularProgress} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";

const RiderDeliveriesDataGrid = ({riderId}) => {
    const prototypeRiderDeliveries = [
        {
            "id": 1,
            "company": "Zap",
            "companyImg": "https://upload.wikimedia.org/wikipedia/pt/4/4f/Weezer_-_Blue_Album.jpg",
            "orderDateTime": "2022-05-24T12:25:54Z",
            "deliveryDateTime": "2022-05-24T12:38:13Z",
            "buyer": "Walter White"
        }
    ];

    const columns = [
        {
            field: "companyImg", headerName: "", sortable: false, filterable: false,
            renderCell: (params) => <Avatar src={params.row.companyImg}/>,
        },
        {field: "company", headerName: "Company", flex: 1},
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

    const [pageSize, setPageSize] = useState(10);
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        setDeliveries(prototypeRiderDeliveries);
    }, []);

    return (
        <>
            {
                prototypeRiderDeliveries.length === 0 ?
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

export default RiderDeliveriesDataGrid;