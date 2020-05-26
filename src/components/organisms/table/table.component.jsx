import React from 'react';
import PropTypes from 'prop-types';

// Components
import ItemsTable from '../items-table/items-table.component';
import MenusTable from '../menus-table/menus-table.component';
import CategoriesTable from '../categories-table/categories-table.component';
// import TablesTable from '../tables-table/tables-table.component';

const Table = ({ items, menus, categories, tables }) => {
	if (items) return <ItemsTable />;
	if (menus) return <MenusTable />;
	if (categories) return <CategoriesTable />;
	// if (tables) return <TablesTable />;
};

Table.propTypes = {
	items: PropTypes.bool,
	menus: PropTypes.bool,
	categories: PropTypes.bool,
	tables: PropTypes.bool,
};

export default Table;
