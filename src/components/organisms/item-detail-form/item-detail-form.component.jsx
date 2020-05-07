import React from 'react';

// Utils
import { NumberFormatter, PriceFormatter } from '../../../utils/global-utils';

// Mui Components & Icons
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import BlockIcon from '@material-ui/icons/Block';

// Styles
import useStyles from './item-detail.styles';

const ItemDetailForm = () => {
	const classes = useStyles();

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
								// value={itemDetails.name}
								fullWidth
								color='primary'
								// helperText={errorName}
								// error={errorName ? true : false}
								// onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id='price'
								name='price'
								label='Price'
								// value={itemDetails.price}
								fullWidth
								color='primary'
								// helperText={errorPrice}
								// error={errorPrice ? true : false}
								// onChange={handleChange}
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
								// value={itemDetails.quantity}
								fullWidth
								color='primary'
								// helperText={errorQuantity}
								// error={errorQuantity ? true : false}
								// onChange={handleChange}
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
								// value={itemDetails.unit}
								fullWidth
								color='primary'
								// onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Box display='flex' paddingTop={5}>
						<Button
							variant='contained'
							color='primary'
							size='small'
							startIcon={<SaveIcon />}
							// onClick={handleSubmit}
						>
							Save
						</Button>
						<Button
							variant='contained'
							color='primary'
							size='small'
							startIcon={<SaveIcon />}
							// onClick={itemUpdate}
						>
							Update
						</Button>
						<Button
							variant='contained'
							className={classes.cancelButton}
							size='small'
							startIcon={<BlockIcon />}
							// onClick={handleCancel}
						>
							Cancel
						</Button>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default ItemDetailForm;
