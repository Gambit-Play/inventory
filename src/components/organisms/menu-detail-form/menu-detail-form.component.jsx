import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Utils
import { PriceFormatter, filterArrayFromId } from '../../../utils/global.utils';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectMenu } from '../../../redux/handlers/menu-detail/menu-detail.selectors';
import { selectCurrentItems } from '../../../redux/items/items.selectors';
import {
	removeMenu,
	setMenuStart,
	deleteMenuStart,
	setselectedItemsIdStart,
	setItemsIdStart,
} from '../../../redux/handlers/menu-detail/menu-detail.actions';

// Component
import MenuDetailButton from './menu-detail-button/menu-detail-button.component';
import MultiChoiceDropdown from '../../molecules/multi-choice-dropdown/multi-choice-dropdown.component';

// Mui Components & Icons
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import AddIcon from '@material-ui/icons/Add';

// Styles
import useStyles from './menu-detail-form.styles';

const MenuDetailForm = props => {
	const {
		menu,
		items,
		removeMenu,
		setMenuStart,
		deleteMenuStart,
		history,
		setselectedItemsIdStart,
		setItemsIdStart,
	} = props;
	const classes = useStyles();
	const data = menu.itemsId.length
		? filterArrayFromId(items, menu.itemsId)
		: items;

	useEffect(() => {
		return () => {
			removeMenu();
		};
	}, [removeMenu]);

	const handleChange = event => {
		const { name, value } = event.target;
		setMenuStart(name, value);
	};

	const handleDelete = () => {
		deleteMenuStart();
		history.goBack();
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs={8}>
				<Paper className={classes.root}>
					<Box display='flex' alignItems='start' paddingBottom={3}>
						<Typography
							component='h2'
							variant='h5'
							color='inherit'
							noWrap
						>
							Basic Info
						</Typography>
						{!menu.isNew && (
							<Button
								variant='contained'
								color='secondary'
								size='small'
								className={classes.deleteButton}
								startIcon={<DeleteIcon />}
								onClick={handleDelete}
							>
								Delete
							</Button>
						)}
					</Box>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<TextField
								id='name'
								name='name'
								label='Name'
								value={menu.name}
								fullWidth
								color='primary'
								helperText={menu.errorName}
								error={menu.errorName ? true : false}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id='price'
								name='price'
								label='Price'
								value={menu.price}
								fullWidth
								color='primary'
								onChange={handleChange}
								InputProps={{
									inputComponent: PriceFormatter,
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<MultiChoiceDropdown
								data={data}
								value={menu.selectedItemsId}
								setselectedData={setselectedItemsIdStart}
							/>
						</Grid>
						<Grid container item xs={6} alignContent='flex-end'>
							<Button
								disabled={menu.selectedItemsId.length === 0}
								variant='contained'
								color='primary'
								size='small'
								startIcon={<AddIcon />}
								onClick={setItemsIdStart}
							>
								Add
							</Button>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id='description'
								name='description'
								label='Description'
								value={menu.description}
								fullWidth
								color='primary'
								multiline
								rows='6'
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Box display='flex' paddingTop={5}>
						<MenuDetailButton />
						<Button
							variant='contained'
							className={classes.cancelButton}
							size='small'
							startIcon={<BlockIcon />}
							onClick={history.goBack}
						>
							Cancel
						</Button>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

MenuDetailForm.propTypes = {
	menu: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
	removeMenu: PropTypes.func.isRequired,
	setMenuStart: PropTypes.func.isRequired,
	deleteMenuStart: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	setselectedItemsIdStart: PropTypes.func.isRequired,
	setItemsIdStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	menu: selectMenu,
	items: selectCurrentItems,
});

const mapStateToDispatch = dispatch => ({
	removeMenu: () => dispatch(removeMenu()),
	setMenuStart: (inputName, value) =>
		dispatch(setMenuStart(inputName, value)),
	deleteMenuStart: () => dispatch(deleteMenuStart()),
	setselectedItemsIdStart: selectedId =>
		dispatch(setselectedItemsIdStart(selectedId)),
	setItemsIdStart: () => dispatch(setItemsIdStart()),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(MenuDetailForm);
