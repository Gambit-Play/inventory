import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// Routes
import * as ROUTES from './routes/routes';

// Redux
import { connect } from 'react-redux';
import {
	onAuthStateChangedStart,
	removeAuthListenerStart,
	fetchAllUsersStart,
} from './redux/users/users.actions';
import { selectCurrentUser } from './redux/users/users.selectors';
import { fetchUnitsStart } from './redux/units/units.actions';
import {
	fetchCategoriesCollectionStart,
	removeCategoriesCollectionListener,
} from './redux/categories/categories.actions';
import {
	fetchOrdersCollectionStart,
	removeOrdersCollectionListener,
} from './redux/orders/orders.actions';
import {
	fetchTablesCollectionStart,
	removeTablesCollectionListener,
} from './redux/tables/tables.actions';
import {
	removeCategoriesOrderBy,
	removeCategoriesSearchField,
} from './redux/handlers/categories-table/categories-table.actions';
import {
	removeTablesOrderBy,
	removeTablesSearchField,
} from './redux/handlers/tables-table/tables-table.actions';
import {
	removeMenusOrderBy,
	removeMenusSearchField,
} from './redux/handlers/menus-table/menus-table.actions';
import {
	removeItemsOrderBy,
	removeItemsSearchField,
} from './redux/handlers/items-table/items-table.actions';

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
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './global-mui.theme';
import './App.scss';

const App = props => {
	const {
		onAuthStateChangedStart,
		removeAuthListenerStart,
		fetchUnitsStart,
		fetchAllUsersStart,
		fetchCategoriesCollectionStart,
		fetchTablesCollectionStart,
		fetchOrdersCollectionStart,
		removeItemsOrderBy,
		removeItemsSearchField,
		removeCategoriesOrderBy,
		removeCategoriesSearchField,
		removeMenusOrderBy,
		removeMenusSearchField,
		removeCategoriesCollectionListener,
		removeTablesCollectionListener,
		removeTablesOrderBy,
		removeTablesSearchField,
		removeOrdersCollectionListener,
		currentUser,
	} = props;

	useEffect(() => {
		fetchAllUsersStart();
		removeItemsSearchField();
		removeItemsOrderBy();
		removeCategoriesOrderBy();
		removeCategoriesSearchField();
		removeMenusOrderBy();
		removeMenusSearchField();
		removeTablesOrderBy();
		removeTablesSearchField();
		onAuthStateChangedStart();
		fetchUnitsStart();
		fetchCategoriesCollectionStart();
		fetchTablesCollectionStart();
		fetchOrdersCollectionStart();
		return () => {
			// Cleanup
			// TODO: Add more actions to remove listeners
			// removeAuthListenerStart();
			// removeCategoriesCollectionListener();
			// removeTablesCollectionListener();
		};
	}, [
		onAuthStateChangedStart,
		// removeAuthListenerStart,
		fetchUnitsStart,
		fetchAllUsersStart,
		fetchCategoriesCollectionStart,
		fetchTablesCollectionStart,
		fetchOrdersCollectionStart,
		removeItemsOrderBy,
		removeItemsSearchField,
		removeCategoriesOrderBy,
		removeCategoriesSearchField,
		removeMenusOrderBy,
		removeMenusSearchField,
		// removeCategoriesCollectionListener,
		// removeTablesCollectionListener,
		removeTablesOrderBy,
		removeTablesSearchField,
		removeOrdersCollectionListener,
	]);

	return (
		<StylesProvider injectFirst>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Switch>
					<React.Fragment>
						{currentUser === null ? (
							<Route
								exact
								path={ROUTES.DASHBOARD}
								component={LoginScreen}
							/>
						) : (
							<MainContainer>
								<SideMenu>
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
					</React.Fragment>
				</Switch>
			</ThemeProvider>
		</StylesProvider>
	);
};

App.propTypes = {
	onAuthStateChangedStart: PropTypes.func.isRequired,
	removeAuthListenerStart: PropTypes.func.isRequired,
	removeCategoriesCollectionListener: PropTypes.func.isRequired,
	removeTablesCollectionListener: PropTypes.func.isRequired,
	fetchUnitsStart: PropTypes.func.isRequired,
	fetchAllUsersStart: PropTypes.func.isRequired,
	fetchCategoriesCollectionStart: PropTypes.func.isRequired,
	fetchTablesCollectionStart: PropTypes.func.isRequired,
	fetchOrdersCollectionStart: PropTypes.func.isRequired,
	removeItemsOrderBy: PropTypes.func.isRequired,
	removeItemsSearchField: PropTypes.func.isRequired,
	removeCategoriesOrderBy: PropTypes.func.isRequired,
	removeCategoriesSearchField: PropTypes.func.isRequired,
	removeMenusOrderBy: PropTypes.func.isRequired,
	removeMenusSearchField: PropTypes.func.isRequired,
	removeTablesOrderBy: PropTypes.func.isRequired,
	removeTablesSearchField: PropTypes.func.isRequired,
	removeOrdersCollectionListener: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	onAuthStateChangedStart: () => dispatch(onAuthStateChangedStart()),
	removeAuthListenerStart: () => dispatch(removeAuthListenerStart()),
	removeTablesCollectionListener: () =>
		dispatch(removeTablesCollectionListener()),
	fetchUnitsStart: () => dispatch(fetchUnitsStart()),
	fetchAllUsersStart: () => dispatch(fetchAllUsersStart()),
	fetchCategoriesCollectionStart: () =>
		dispatch(fetchCategoriesCollectionStart()),
	fetchTablesCollectionStart: () => dispatch(fetchTablesCollectionStart()),
	fetchOrdersCollectionStart: () => dispatch(fetchOrdersCollectionStart()),
	removeItemsOrderBy: () => dispatch(removeItemsOrderBy()),
	removeItemsSearchField: () => dispatch(removeItemsSearchField()),
	removeCategoriesOrderBy: () => dispatch(removeCategoriesOrderBy()),
	removeCategoriesSearchField: () => dispatch(removeCategoriesSearchField()),
	removeCategoriesCollectionListener: () =>
		dispatch(removeCategoriesCollectionListener()),
	removeMenusOrderBy: () => dispatch(removeMenusOrderBy()),
	removeMenusSearchField: () => dispatch(removeMenusSearchField()),
	removeTablesOrderBy: () => dispatch(removeTablesOrderBy()),
	removeTablesSearchField: () => dispatch(removeTablesSearchField()),
	removeOrdersCollectionListener: () =>
		dispatch(removeOrdersCollectionListener()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
