import React, { Fragment }from 'react'
import FixedBottomNavigation from '../BottomNavigation/BottomNavigation';
import MediaCard from '../MediaCard/MediaCard';

const Home = () => {
    return (
        <Fragment>
            <MediaCard></MediaCard>
            <FixedBottomNavigation></FixedBottomNavigation>
        </Fragment>
    )
}
export default Home;