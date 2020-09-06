import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// Routes
import * as ROUTES from './routes/routes';

// Redux
import { connect } from 'react-redux';
import { fetchMainCollectionsStart } from './redux/users/users.actions';
import { selectCurrentUser } from './redux/users/users.selectors';

// Components
import MainContainer from './components/atoms/main-container/main-container.styles';
import SideMenu from './components/organisms/side-menu/side-menu.component';
import ItemsList from './pages/items-pages/items-list/items-list.component';
import ItemDetail from './pages/items-pages/item-detail/item-detail.component';
import MenusList from './pages/menus-pages/menus-list/menus-list.component';
import MenuDetail from './pages/menus-pages/menu-detail/menu-detail.component';
import CategoriesList from './pages/categories-pages/categories-list/categories-list.component';
import CategoryDetail from './pages/categories-pages/category-detail/category-detail.component';
import TablesList from './pages/tables-pages/tables-list/tables-list.component';
import TableDetail from './pages/tables-pages/table-detail/table-detail.component';
import TakeOrder from './pages/take-order-pages/take-order.component';
import Orders from './pages/orders-pages/orders.component';
import LoginScreen from './pages/login-page/login-screen.component';

// Styles
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themes/mui.theme';
import styledComponentsTheme from './themes/styled-components.theme';
import './App.scss';

const App = props => {
	const { currentUser, fetchMainCollectionsStart } = props;

	const history = useHistory();
	const isLoggedOut = currentUser === null;

	useEffect(() => {
		if (!isLoggedOut) fetchMainCollectionsStart();
		if (isLoggedOut) history.push(ROUTES.DASHBOARD);

		return () => {
			// Cleanup
			// TODO: Add more actions to remove listeners
			// removeAuthListenerStart();
			// removeCategoriesCollectionListener();
			// removeTablesCollectionListener();
		};
	}, [isLoggedOut, fetchMainCollectionsStart, history]);

	return (
		<StylesProvider injectFirst>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Switch>
					<StyledThemeProvider theme={styledComponentsTheme}>
						{isLoggedOut ? (
							<Route
								exact
								path={ROUTES.DASHBOARD}
								component={LoginScreen}
							/>
						) : (
							<MainContainer>
								<SideMenu>
									{
										// <Route
										// exact
										// path={ROUTES.DASHBOARD}
										// component={/*-----Component-----*/} // FIXME: Add a tutorial for the Dashboard route
										// />
									}
									<Route
										exact
										path={ROUTES.ITEMS_LIST}
										component={ItemsList}
									/>
									<Route
										path={`${ROUTES.ITEMS_LIST}/:itemId`}
										component={ItemDetail}
									/>
									<Route
										exact
										path={ROUTES.MENUS_LIST}
										component={MenusList}
									/>
									<Route
										path={`${ROUTES.MENUS_LIST}/:menuId`}
										component={MenuDetail}
									/>
									<Route
										exact
										path={ROUTES.CATEGORIES_LIST}
										component={CategoriesList}
									/>
									<Route
										path={`${ROUTES.CATEGORIES_LIST}/:categoryId`}
										component={CategoryDetail}
									/>
									<Route
										exact
										path={ROUTES.TABLES_LIST}
										component={TablesList}
									/>
									<Route
										path={`${ROUTES.TABLES_LIST}/:tableId`}
										component={TableDetail}
									/>
									<Route
										path={ROUTES.TAKE_ORDER}
										component={TakeOrder}
									/>
									<Route
										path={ROUTES.ORDERS}
										component={Orders}
									/>
								</SideMenu>
							</MainContainer>
						)}
					</StyledThemeProvider>
				</Switch>
			</ThemeProvider>
		</StylesProvider>
	);
};

App.propTypes = {
	fetchMainCollectionsStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	fetchMainCollectionsStart: () => dispatch(fetchMainCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
