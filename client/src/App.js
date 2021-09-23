import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';
import Home from './components/Home/Home'
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';



const App = () => {
	return (		
		<BrowserRouter>
			<Container maxWidth='lg'>
				<NavBar />
				<Switch>
					<Route exact path='/auth' component={Form} />
					<Route path="/home">
						<Home />
					</Route>
				</Switch>
			</Container>
			</BrowserRouter>
	);
};

export default App;
