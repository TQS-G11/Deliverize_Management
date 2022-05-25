import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {useEffect} from "react";
import {Avatar, Grid, ListItemAvatar} from "@mui/material";

const CompanyList = ({companies, buttonIcon, buttonOnClick}) => {
    const prototypeCompanies = [
        {
            "name": "Zap",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "img": "https://upload.wikimedia.org/wikipedia/pt/4/4f/Weezer_-_Blue_Album.jpg"
        },
        {
            "name": "Xap",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "img": "https://i.scdn.co/image/ab6761610000e5ebae537808bd15be9f7031e99b"
        },
        {
            "name": "Cap",
            "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "img": "https://i.scdn.co/image/ab6761610000e5eb39f37a34b404169fdca52dc8"
        },
        {
            "name": "Vap",
            "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "img": "https://i.scdn.co/image/ab6761610000e5eb64d74f5985cb66b2f7b60e93"
        },
        {
            "name": "Bap",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            "img": "https://i.scdn.co/image/ab6761610000e5eb089bb3257ef5b3fab2a3c90d"
        }
    ];

    // const [companies, setCompanies] = React.useState([]);
    //
    // useEffect(() => {
    //     setCompanies(prototypeCompanies);
    // }, []);

    // const removeCompany = (name) => {
    //     console.log(`Removing company: ${name}`);
    //     setCompanies(companies.filter(company => company.name !== name));
    // }

    return (
        <Grid container>
            <Grid item>
                <List>
                    {companies.map(company =>
                        <ListItem
                            key={company.name}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => console.log("foo")}>
                                    <RemoveCircleIcon/>
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar src={company.img} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={company.name}
                                secondary={company.description}
                            />
                        </ListItem>
                    )}
                </List>
            </Grid>
        </Grid>
    );
}

export default CompanyList;