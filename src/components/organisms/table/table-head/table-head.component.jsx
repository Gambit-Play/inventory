import React from 'react';
import PropTypes from 'prop-types';

// Mui Components
import MuiTableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Styles
import useStyles from '../table.styles';

const TableHead = ({
	data,
	order,
	orderBy,
	selected,
	setOrderStart,
	setSelectAllStart,
	headCells,
}) => {
	const classes = useStyles();

	const numSelected = selected.length;
	const dataCount = data.length;

	return (
		<MuiTableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						indeterminate={
							numSelected > 0 && numSelected < dataCount
						}
						checked={dataCount > 0 && numSelected === dataCount}
						onChange={event =>
							setSelectAllStart(event.target.checked)
						}
						inputProps={{ 'aria-label': 'select all' }}
					/>
				</TableCell>
				{headCells.map(headCell => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={event => setOrderStart(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc'
										? 'sorted descending'
										: 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</MuiTableHead>
	);
};

TableHead.propTypes = {
	data: PropTypes.array.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	selected: PropTypes.array.isRequired,
	setOrderStart: PropTypes.func.isRequired,
	setSelectAllStart: PropTypes.func.isRequired,
};

export default TableHead;
