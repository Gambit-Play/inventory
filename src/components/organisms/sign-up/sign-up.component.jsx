import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// Routes
import * as ROUTES from '../../../routes/routes';

// Redux
import {
	selectDisplayName,
	selectEmail,
	selectPassword,
	selectConfirmPassword,
	selectCurrentUser,
	selectErrorConfirmPassword,
	selectErrorDisplayName,
	selectErrorEmail,
	selectErrorPassword,
} from '../../../redux/users/users.selectors';
import {
	setUserCredential,
	signUpStart,
	clearUserCredentials,
	clearInputErrors,
} from '../../../redux/users/users.actions';

// Components
import { Box, GoogleIcon, Text } from './sign-up.styles';

// Icons
// import { ReactComponent as GoogleIcon } from '../../../assets/svg/google-logo.svg';

// Mui Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUp = ({
	selectDisplayName,
	selectEmail,
	selectPassword,
	selectConfirmPassword,
	setUserCredential,
	selectCurrentUser,
	signUpStart,
	errorConfirmPassword,
	errorDisplayName,
	errorEmail,
	errorPassword,
	clearUserCredentials,
	clearInputErrors,
}) => {
	const history = useHistory();

	useEffect(() => {
		clearUserCredentials();
		clearInputErrors();
		return () => {
			clearUserCredentials();
			clearInputErrors();
		};
	}, [clearUserCredentials, clearInputErrors]);

	if (selectCurrentUser) return history.push(ROUTES.MENUS_LIST);

	const handleChange = event => {
		const { name, value } = event.target;
		setUserCredential(name, value);
	};

	const handleSignUp = () => signUpStart();

	return (
		<form>
			<Box>
				<TextField
					id='displayName'
					name='displayName'
					label='Display Name'
					value={selectDisplayName}
					type='text'
					onChange={handleChange}
					className='input'
					helperText={errorDisplayName}
					error={errorDisplayName ? true : false}
				/>
				<TextField
					id='email'
					name='email'
					label='Email'
					value={selectEmail}
					type='email'
					onChange={handleChange}
					className='input'
					helperText={errorEmail}
					error={errorEmail ? true : false}
				/>
				<TextField
					id='password'
					name='password'
					label='Password'
					value={selectPassword}
					type='password'
					onChange={handleChange}
					className='input'
					helperText={errorPassword}
					error={errorPassword ? true : false}
				/>
				<TextField
					id='confirmPassword'
					name='confirmPassword'
					label='Confirm Password'
					value={selectConfirmPassword}
					type='password'
					onChange={handleChange}
					className='input'
					helperText={errorConfirmPassword}
					error={errorConfirmPassword ? true : false}
				/>
				<Button
					variant='contained'
					color='primary'
					size='small'
					className='button'
					onClick={handleSignUp}
				>
					Sign Up
				</Button>
				<Text fontColor='#47525dcc' fontSize={4} className='button'>
					Or sign up with Google:
				</Text>
				<Button
					variant='outlined'
					color='primary'
					size='small'
					className='button'
					// onClick={handleSignUp}
					startIcon={<GoogleIcon />}
				>
					Sign Up
				</Button>
			</Box>
		</form>
	);
};

SignUp.propTypes = {
	selectDisplayName: PropTypes.string.isRequired,
	selectEmail: PropTypes.string.isRequired,
	selectPassword: PropTypes.string.isRequired,
	selectConfirmPassword: PropTypes.string.isRequired,
	setUserCredential: PropTypes.func.isRequired,
	selectCurrentUser: PropTypes.any,
	signUpStart: PropTypes.func.isRequired,
	errorConfirmPassword: PropTypes.string.isRequired,
	errorDisplayName: PropTypes.string.isRequired,
	errorEmail: PropTypes.string.isRequired,
	errorPassword: PropTypes.string.isRequired,
	clearUserCredentials: PropTypes.func.isRequired,
	clearInputErrors: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	selectDisplayName: selectDisplayName,
	selectEmail: selectEmail,
	selectPassword: selectPassword,
	selectConfirmPassword: selectConfirmPassword,
	selectCurrentUser: selectCurrentUser,
	errorConfirmPassword: selectErrorConfirmPassword,
	errorDisplayName: selectErrorDisplayName,
	errorEmail: selectErrorEmail,
	errorPassword: selectErrorPassword,
});

const mapDispatchToProps = dispatch => ({
	setUserCredential: (inputName, value) =>
		dispatch(setUserCredential(inputName, value)),
	signUpStart: () => dispatch(signUpStart()),
	clearUserCredentials: () => dispatch(clearUserCredentials()),
	clearInputErrors: () => dispatch(clearInputErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
