import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// Redux
import {
	selectDisplayName,
	selectEmail,
	selectPassword,
	selectConfirmPassword,
} from '../../../redux/users/users.selectors';
import { setUserCredential } from '../../../redux/users/users.actions';

// Components
import { Box } from './sign-up.styles';

// Mui Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUp = ({
	selectDisplayName,
	selectEmail,
	selectPassword,
	selectConfirmPassword,
	setUserCredential,
}) => {
	const history = useHistory();

	const handleChange = event => {
		const { name, value } = event.target;
		setUserCredential(name, value);
	};

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
				/>
				<TextField
					id='email'
					name='email'
					label='Email'
					value={selectEmail}
					type='email'
					onChange={handleChange}
					className='input'
				/>
				<TextField
					id='password'
					name='password'
					label='Password'
					value={selectPassword}
					type='password'
					onChange={handleChange}
					className='input'
				/>
				<TextField
					id='confirmPassword'
					name='confirmPassword'
					label='Confirm Password'
					value={selectConfirmPassword}
					type='password'
					onChange={handleChange}
					className='input'
				/>
				<Button
					variant='contained'
					color='primary'
					size='small'
					className='button'
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
};

const mapStateToProps = createStructuredSelector({
	selectDisplayName: selectDisplayName,
	selectEmail: selectEmail,
	selectPassword: selectPassword,
	selectConfirmPassword: selectConfirmPassword,
});
const mapDispatchToProps = dispatch => ({
	setUserCredential: (inputName, value) =>
		dispatch(setUserCredential(inputName, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
