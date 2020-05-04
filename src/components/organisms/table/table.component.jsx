import React from 'react';
import PropTypes from 'prop-types';

// Components
import ItemsTable from '../items-table/items-table.component';

const Table = ({ items, menus }) => {
	if (items) return <ItemsTable />;
	// if (menus) return <MenusTable />;
};

Table.propTypes = {
	items: PropTypes.bool,
	menus: PropTypes.bool,
};

export default Table;
