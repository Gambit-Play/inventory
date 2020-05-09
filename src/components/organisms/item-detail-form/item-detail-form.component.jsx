import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Utils
import {
	NumberFormatter,
	PriceFormatter,
	convertToFloat,
} from '../../../utils/global.utils';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectItem } from '../../../redux/handlers/item-detail/item-detail.selectors';
import {
	removeItem,
	setItemStart,
} from '../../../redux/handlers/item-detail/item-detail.actions';

// Component
import ItemDetailButton from './item-detail-button/item-detail-button.component';

// Mui Components & Icons
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';

// Styles
import useStyles from './item-detail.styles';

const ItemDetailForm = props => {
	const classes = useStyles();
	const { item, removeItem, setItemStart, history } = props;

	useEffect(() => {
		return () => {
			removeItem();
		};
	}, [removeItem]);

	const handleChange = event => {
		const { name, value } = event.target;
		setItemStart(name, value);
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
						<Button
							variant='contained'
							color='secondary'
							size='small'
							className={classes.deleteButton}
							startIcon={<DeleteIcon />}
						>
							Delete
						</Button>
					</Box>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<TextField
								id='name'
								name='name'
								label='Name'
								value={item.name}
								fullWidth
								color='primary'
								// helperText={errorName}
								// error={errorName ? true : false}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id='price'
								name='price'
								label='Price'
								value={item.price}
								fullWidth
								color='primary'
								// helperText={errorPrice}
								// error={errorPrice ? true : false}
								onChange={handleChange}
								InputProps={{
									inputComponent: PriceFormatter,
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id='quantity'
								name='quantity'
								label='Quantity'
								value={item.quantity}
								fullWidth
								color='primary'
								// helperText={errorQuantity}
								// error={errorQuantity ? true : false}
								onChange={handleChange}
								InputProps={{
									inputComponent: NumberFormatter,
								}}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id='unit'
								name='unit'
								label='Unit'
								value={item.unit}
								fullWidth
								color='primary'
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Box display='flex' paddingTop={5}>
						<ItemDetailButton />
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

ItemDetailForm.propTypes = {
	item: PropTypes.object.isRequired,
	removeItem: PropTypes.func.isRequired,
	setItemStart: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) =>
	createStructuredSelector({
		item: selectItem,
	});

const mapStateToDispatch = dispatch => ({
	removeItem: () => dispatch(removeItem()),
	setItemStart: (inputName, value) =>
		dispatch(setItemStart(inputName, value)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapStateToDispatch)
)(ItemDetailForm);
