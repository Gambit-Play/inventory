import React from 'react';

// Components
import { LoginImage, Box } from './login-screen.styles';
import SignUp from '../../components/organisms/sign-up/sign-up.component';

const LoginScreen = () => {
	return (
		<LoginImage>
			<Box>
				<SignUp />
			</Box>
		</LoginImage>
	);
};

export default LoginScreen;
