import React, { useEffect, useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import Input from './Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Form = () => {
	const [isSignedUp, setIsSignedUp] = useState(false);
	// const [isLoggedIn, setIsLoggedIn] = useState(false)

	// useEffect(() => {
	//     if(window.localStorage.getItem('token')){
	//         setIsLoggedIn(true)
	//     } else {
	//         setIsLoggedIn(false)
	//     }
	// }, [])

	const handleSubmit = () => {

	}

	const switchMode = () => {
		setIsSignedUp((previsSignedUp) => !previsSignedUp);
	}

	const handleChange = () => { };
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">{!isSignedUp ? 'Sign up' : 'Sign in'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{!isSignedUp ? (
							<Container>
								<Input
									name='firstName'
									label='First Name'
									handleChange={handleChange}
								/>
								<Input
									name='lastName'
									label='Last Name'
									handleChange={handleChange}
								/>
								<Input
									name='email'
									label='Email'
									handleChange={handleChange}
								/>
								<Input
									name='password'
									label='Password'
									handleChange={handleChange}
								/>
								<Input
									name='confirmPassword'
									label='Confirm Password'
									handleChange={handleChange}
								/>
							</Container>
						) : (
							<Container>
								<Input
									name='email'
									label='Email'
									handleChange={handleChange}
								/>
								<Input
									name='password'
									label='Password'
									Log
									In
									handleChange={handleChange}
								/>
							</Container>
						)}
						<Button type='submit' fullwidth variant='contained' color='primary' className={classes.submit}>
							{!isSignedUp ? 'Sign Up' : 'Sign In'}
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Button onClick={switchMode}>
									{!isSignedUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);

	// if (isSignedUp === false) {
	// 	return (
	// 		//Show signupform
	// 		<div>
	// 			<Container>
	// 				<TextField
	// 					name='firstName'
	// 					label='First Name'
	// 					handleChange={handleChange}
	// 					variant='outlined'
	// 					autoFocus
	// 					fullwidth
	// 				/>
	// 				<TextField
	// 					name='lastName'
	// 					label='Last Name'
	// 					handleChange={handleChange}
	// 					variant='outlined'
	// 					autoFocus
	// 					fullwidth
	// 				/>
	// 				<TextField
	// 					name='email'
	// 					label='Email'
	// 					handleChange={handleChange}
	// 					variant='outlined'
	// 					autoFocus
	// 					fullwidth
	// 				/>
	// 				<TextField
	// 					name='password'
	// 					label='Password'
	// 					handleChange={handleChange}
	// 					variant='outlined'
	// 					autoFocus
	// 					fullwidth
	// 				/>
	// 				<TextField
	// 					name='confirmPassword'
	// 					label='Confirm Password'
	// 					handleChange={handleChange}
	// 					variant='outlined'
	// 					autoFocus
	// 					fullwidth
	// 				/>
	// 			</Container>
	// 			<Container>
	// 				<Button
	// 					type='submit'
	// 					fullwidth
	// 					variant='contained'
	// 					color='primary'>
	//                         Sign Up
	//                     </Button>
	// 			</Container>
	// 			<Container>
	// 				<h4>
	// 					Already a user? <span>Log In</span>!
	// 				</h4>
	// 			</Container>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		// Show loginform
	// 		<div>
	// 			<Container>
	// 				<TextField
	// 					name='email'
	// 					label='Email'
	// 					handleChange={handleChange}
	// 					variant='outlined'
	// 					autoFocus
	// 					fullwidth
	// 				/>
	// 				<TextField
	// 					name='password'
	// 					label='Password'
	// 					Log
	// 					In
	// 					handleChange={handleChange}
	// 					variant='outlined'
	// 					autoFocus
	// 					fullwidth
	// 				/>
	// 			</Container>
	// 			<Container>
	// 				<Button
	// 					type='submit'
	// 					fullwidth
	// 					variant='contained'
	// 					color='primary'></Button>
	// 			</Container>
	// 			<Container>
	// 				<h4>
	// 					Don't have an account? <span>Sign Up</span> here!
	// 				</h4>
	// 			</Container>
	// 		</div>
	// );
	// }
};

export default Form;
