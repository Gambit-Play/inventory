import React from 'react';
import PropTypes from 'prop-types';

// Components
import ItemsTable from '../items-table/items-table.component';
import MenusTable from '../menus-table/menus-table.component';
// import CategoriesTable from '../categories-table/categories-table.component';

const Table = ({ items, menus, categories }) => {
	if (items) return <ItemsTable />;
	if (menus) return <MenusTable />;
	// if (categories) return <CategoriesTable />;
};

Table.propTypes = {
	items: PropTypes.bool,
	menus: PropTypes.bool,
	categories: PropTypes.bool,
};

export default Table;
