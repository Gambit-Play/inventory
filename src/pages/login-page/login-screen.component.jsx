import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectIsNewUser } from '../../redux/users/users.selectors';

// Components
import { LoginImage, Box } from './login-screen.styles';
import SignUp from '../../components/organisms/sign-up/sign-up.component';
import SignIn from '../../components/organisms/sign-in/sign-in.component';

const LoginScreen = ({ isNewUser }) => {
	return (
		<LoginImage>
			<Box>{isNewUser ? <SignUp /> : <SignIn />}</Box>
		</LoginImage>
	);
};

LoginScreen.propTypes = {
	isNewUser: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
	isNewUser: selectIsNewUser,
});

export default connect(mapStateToProps)(LoginScreen);
