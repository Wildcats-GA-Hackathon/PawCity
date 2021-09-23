import React, { Fragment }from 'react'
import FixedBottomNavigation from '../BottomNavigation/BottomNavigation';
import MediaCard from '../MediaCard/MediaCard';
import { Grid, Container } from '@material-ui/core';
import useStyles from './styles';
import Box from '@mui/material/Box';


const Home = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Container maxWidth="sm" className={classes.paper} container spacing={4}>
                
                    <MediaCard ></MediaCard>
                    <MediaCard></MediaCard>
                    <MediaCard></MediaCard>
                
            </Container>
            <FixedBottomNavigation></FixedBottomNavigation>
        </Fragment>
    )
}
export default Home;