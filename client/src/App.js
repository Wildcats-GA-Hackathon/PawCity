import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';

const App = () => {
	return (
		<BrowserRouter>
			<Container maxWidth='lg'>
				<NavBar />
				<Switch>
					<Route exact path='/auth' component={Form} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
