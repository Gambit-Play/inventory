import React from 'react';

// Mui Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUp = () => {
	return (
		<form>
			<TextField id='email' label='Email' type='email' />
			<TextField id='password' label='Password' type='password' />
			<Button variant='contained' color='primary' size='small'>
				Login
			</Button>
		</form>
	);
};

export default SignUp;
