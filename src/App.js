import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Routes
import * as ROUTES from './routes/routes';

// Redux
import { connect } from 'react-redux';
import {
	onAuthStateChangedStart,
	removeAuthListenerStart,
	fetchAllUsersStart,
} from './redux/users/users.actions';
import { fetchUnitsStart } from './redux/units/units.actions';
import {
	fetchCategoriesCollectionStart,
	removeCategoriesCollectionListener,
} from './redux/categories/categories.actions';
import {
	removeCategoriesOrderBy,
	removeCategoriesSearchField,
} from './redux/handlers/categories-table/categories-table.actions';
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
		removeItemsOrderBy,
		removeItemsSearchField,
		removeCategoriesOrderBy,
		removeCategoriesSearchField,
		removeMenusOrderBy,
		removeMenusSearchField,
		removeCategoriesCollectionListener,
	} = props;

	useEffect(() => {
		removeItemsSearchField();
		removeItemsOrderBy();
		removeCategoriesOrderBy();
		removeCategoriesSearchField();
		removeMenusOrderBy();
		removeMenusSearchField();
		onAuthStateChangedStart();
		fetchUnitsStart();
		fetchAllUsersStart();
		fetchCategoriesCollectionStart();
		return () => {
			// Cleanup
			// TODO: Add more actions to remove listeners
			removeAuthListenerStart();
			removeCategoriesCollectionListener();
		};
	}, [
		onAuthStateChangedStart,
		removeAuthListenerStart,
		fetchUnitsStart,
		fetchAllUsersStart,
		fetchCategoriesCollectionStart,
		removeItemsOrderBy,
		removeItemsSearchField,
		removeCategoriesOrderBy,
		removeCategoriesSearchField,
		removeMenusOrderBy,
		removeMenusSearchField,
		removeCategoriesCollectionListener,
	]);

	return (
		<StylesProvider injectFirst>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Switch>
					<React.Fragment>
						<MainContainer>
							<SideMenu>
								<Route exact path={ROUTES.DASHBOARD} />
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
							</SideMenu>
						</MainContainer>
					</React.Fragment>
				</Switch>
			</ThemeProvider>
		</StylesProvider>
	);
};

App.propTypes = {
	onAuthStateChangedStart: PropTypes.func.isRequired,
	removeAuthListenerStart: PropTypes.func.isRequired,
	fetchUnitsStart: PropTypes.func.isRequired,
	fetchAllUsersStart: PropTypes.func.isRequired,
	fetchCategoriesCollectionStart: PropTypes.func.isRequired,
	removeItemsOrderBy: PropTypes.func.isRequired,
	removeItemsSearchField: PropTypes.func.isRequired,
	removeCategoriesOrderBy: PropTypes.func.isRequired,
	removeCategoriesSearchField: PropTypes.func.isRequired,
	removeMenusOrderBy: PropTypes.func.isRequired,
	removeMenusSearchField: PropTypes.func.isRequired,
	removeCategoriesCollectionListener: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	onAuthStateChangedStart: () => dispatch(onAuthStateChangedStart()),
	removeAuthListenerStart: () => dispatch(removeAuthListenerStart()),
	fetchUnitsStart: () => dispatch(fetchUnitsStart()),
	fetchAllUsersStart: () => dispatch(fetchAllUsersStart()),
	fetchCategoriesCollectionStart: () =>
		dispatch(fetchCategoriesCollectionStart()),
	removeItemsOrderBy: () => dispatch(removeItemsOrderBy()),
	removeItemsSearchField: () => dispatch(removeItemsSearchField()),
	removeCategoriesOrderBy: () => dispatch(removeCategoriesOrderBy()),
	removeCategoriesSearchField: () => dispatch(removeCategoriesSearchField()),
	removeCategoriesCollectionListener: () =>
		dispatch(removeCategoriesCollectionListener()),
	removeMenusOrderBy: () => dispatch(removeMenusOrderBy()),
	removeMenusSearchField: () => dispatch(removeMenusSearchField()),
});

export default connect(null, mapDispatchToProps)(App);
