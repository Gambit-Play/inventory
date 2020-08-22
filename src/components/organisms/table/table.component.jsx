import React from 'react';
import PropTypes from 'prop-types';

// Components
import ItemsTable from '../items-table/items-table.component';
import MenusTable from '../menus-table/menus-table.component';
import CategoriesTable from '../categories-table/categories-table.component';
import TablesTable from '../tables-table/tables-table.component';
import OrdersTable from '../orders-table/orders-table.component';

const Table = ({ items, menus, categories, tables, orders }) => {
	if (items) return <ItemsTable />;
	if (menus) return <MenusTable />;
	if (categories) return <CategoriesTable />;
	if (tables) return <TablesTable />;
	if (orders) return <OrdersTable />;
};

Table.propTypes = {
	items: PropTypes.bool,
	menus: PropTypes.bool,
	categories: PropTypes.bool,
	tables: PropTypes.bool,
	orders: PropTypes.bool,
};

export default Table;
