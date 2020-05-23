import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Firebase // TODO: Remove
import { createCollectionAndDocument } from './firebase/firebase.utils';
import * as COLLECTION_IDS from './firebase/collections.ids';

// Data // TODO: Remove
import { ItemsData, MenusData, CategoriesData } from './data/database.schema';

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
import { fetchCategoriesStart } from './redux/categories/categories.actions';
import {
	removeOrderBy,
	removeSearchField,
} from './redux/handlers/items-table/items-table.actions';

// Components
import MainContainer from './components/atoms/main-container/main-container.styles';
import SideMenu from './components/organisms/side-menu/side-menu.component';
import ItemsList from './pages/items-pages/items-list/items-list.component';
import ItemDetail from './pages/items-pages/item-detail/item-detail.component';
import MenusList from './pages/menus-pages/menus-list/menus-list.component';
import MenuDetail from './pages/menus-pages/menu-detail/menu-detail.component';
import CategoriesList from './pages/categories-pages/categories-list/categories-list.component';

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
		fetchCategoriesStart,
		removeOrderBy,
		removeSearchField,
	} = props;

	useEffect(() => {
		removeSearchField();
		removeOrderBy();
		onAuthStateChangedStart();
		fetchUnitsStart();
		fetchAllUsersStart();
		fetchCategoriesStart();
		return () => {
			// Cleanup
			// TODO: Add more actions to remove listeners
			removeAuthListenerStart();
		};
	}, [
		onAuthStateChangedStart,
		removeAuthListenerStart,
		fetchUnitsStart,
		fetchAllUsersStart,
		fetchCategoriesStart,
		removeOrderBy,
		removeSearchField,
	]);

	// TODO: Remove
	// createCollectionAndDocument(COLLECTION_IDS.CATEGORIES, CategoriesData);

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
	fetchCategoriesStart: PropTypes.func.isRequired,
	removeOrderBy: PropTypes.func.isRequired,
	removeSearchField: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	onAuthStateChangedStart: () => dispatch(onAuthStateChangedStart()),
	removeAuthListenerStart: () => dispatch(removeAuthListenerStart()),
	fetchUnitsStart: () => dispatch(fetchUnitsStart()),
	fetchAllUsersStart: () => dispatch(fetchAllUsersStart()),
	fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
	removeOrderBy: () => dispatch(removeOrderBy()),
	removeSearchField: () => dispatch(removeSearchField()),
});

export default connect(null, mapDispatchToProps)(App);
