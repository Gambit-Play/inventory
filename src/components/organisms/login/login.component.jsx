import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// Routes
import * as ROUTES from '../../../routes/routes';

// Redux
import {
	selectEmail,
	selectPassword,
	selectCurrentUser,
	selectErrorEmail,
	selectErrorPassword,
} from '../../../redux/users/users.selectors';
import {
	setUserCredential,
	clearUserCredentials,
	clearInputErrors,
	emailSignInStart,
} from '../../../redux/users/users.actions';

// Components
import { Box, GoogleIcon, Text } from '../sign-up/sign-up.styles';

// Mui Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = ({
	selectEmail,
	selectPassword,
	setUserCredential,
	selectCurrentUser,
	errorEmail,
	errorPassword,
	clearUserCredentials,
	clearInputErrors,
	emailSignInStart,
}) => {
	const history = useHistory();

	useEffect(() => {
		clearUserCredentials();
		clearInputErrors();
		return () => {
			clearUserCredentials();
			clearInputErrors();
			history.goBack();
		};
	}, [clearUserCredentials, clearInputErrors, history]);

	const handleChange = event => {
		const { name, value } = event.target;
		setUserCredential(name, value);
	};

	return (
		<form>
			<Box>
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
				<Button
					variant='contained'
					color='primary'
					size='small'
					className='button'
					onClick={emailSignInStart}
				>
					Login
				</Button>
				<Text fontColor='#47525dcc' fontSize={4} className='button'>
					Or login with Google:
				</Text>
				<Button
					variant='outlined'
					color='primary'
					size='small'
					className='button'
					// onClick={handleSignUp}
					startIcon={<GoogleIcon />}
				>
					Login
				</Button>
			</Box>
		</form>
	);
};

Login.propTypes = {
	selectEmail: PropTypes.string.isRequired,
	selectPassword: PropTypes.string.isRequired,
	setUserCredential: PropTypes.func.isRequired,
	selectCurrentUser: PropTypes.any,
	errorEmail: PropTypes.string.isRequired,
	errorPassword: PropTypes.string.isRequired,
	clearUserCredentials: PropTypes.func.isRequired,
	clearInputErrors: PropTypes.func.isRequired,
	emailSignInStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	selectEmail: selectEmail,
	selectPassword: selectPassword,
	selectCurrentUser: selectCurrentUser,
	errorEmail: selectErrorEmail,
	errorPassword: selectErrorPassword,
});

const mapDispatchToProps = dispatch => ({
	setUserCredential: (inputName, value) =>
		dispatch(setUserCredential(inputName, value)),
	clearUserCredentials: () => dispatch(clearUserCredentials()),
	clearInputErrors: () => dispatch(clearInputErrors()),
	emailSignInStart: () => dispatch(emailSignInStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
