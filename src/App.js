import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import {
	onAuthStateChangedStart,
	removeAuthListenerStart,
} from './redux/users/users.actions';

// Components
import MainContainer from './components/atoms/main-container/main-container.styles';
import SideMenu from './components/organisms/side-menu/side-menu.component';

// Styles
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './global-mui.theme';
import './App.scss';

const App = props => {
	const { onAuthStateChangedStart, removeAuthListenerStart } = props;

	useEffect(() => {
		onAuthStateChangedStart();
		return () => {
			// Cleanup
			removeAuthListenerStart();
		};
	}, [onAuthStateChangedStart, removeAuthListenerStart]);

	return (
		<StylesProvider injectFirst>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<MainContainer>
					<SideMenu></SideMenu>
				</MainContainer>
			</ThemeProvider>
		</StylesProvider>
	);
};

const mapDispatchToProps = dispatch => ({
	onAuthStateChangedStart: () => dispatch(onAuthStateChangedStart()),
	removeAuthListenerStart: () => dispatch(removeAuthListenerStart()),
});

export default connect(null, mapDispatchToProps)(App);
