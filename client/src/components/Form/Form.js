import React, { useEffect, useState } from 'react';
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
	TextField,
} from '@material-ui/core';
import { grid } from '@mui/system';

const Form = () => {
	const [isSignedUp, setSignedUp] = useState(true);
	// const [isLoggedIn, setIsLoggedIn] = useState(false)

	// useEffect(() => {
	//     if(window.localStorage.getItem('token')){
	//         setIsLoggedIn(true)
	//     } else {
	//         setIsLoggedIn(false)
	//     }
	// }, [])

	const handleChange = () => {};

	return (
		<Container component='main' maxWidth='xs'>
			<Grid container spacing={2}>
				{!isSignedUp ? (
					<Container>
						<TextField
							name='firstName'
							label='First Name'
							handleChange={handleChange}
							variant='outlined'
							autoFocus
							fullwidth
						/>
						<TextField
							name='lastName'
							label='Last Name'
							handleChange={handleChange}
							variant='outlined'
							autoFocus
							fullwidth
						/>
						<TextField
							name='email'
							label='Email'
							handleChange={handleChange}
							variant='outlined'
							autoFocus
							fullwidth
						/>
						<TextField
							name='password'
							label='Password'
							handleChange={handleChange}
							variant='outlined'
							autoFocus
							fullwidth
						/>
						<TextField
							name='confirmPassword'
							label='Confirm Password'
							handleChange={handleChange}
							variant='outlined'
							autoFocus
							fullwidth
						/>
					</Container>
				) : (
					<Container>
						<TextField
							name='email'
							label='Email'
							handleChange={handleChange}
							variant='outlined'
							autoFocus
							fullwidth
						/>
						<TextField
							name='password'
							label='Password'
							Log
							In
							handleChange={handleChange}
							variant='outlined'
							autoFocus
							fullwidth
						/>
					</Container>
				)}
			</Grid>
			<Button type='submit' fullwidth variant='contained' color='primary'>
				{!isSignedUp ? 'Sign Up' : 'Log In'}
			</Button>
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
