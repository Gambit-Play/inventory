import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectCategory } from '../../../redux/handlers/category-detail/category-detail.selectors';
import {
	removeCategory,
	setCategoryStart,
	deleteCategoryStart,
} from '../../../redux/handlers/category-detail/category-detail.actions';

// Component
import CategoryDetailButton from './category-detail-button/category-detail-button.component';

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
import useStyles from './category-detail-form.styles';

const CategoryDetailForm = props => {
	const classes = useStyles();
	const {
		category,
		removeCategory,
		setCategoryStart,
		deleteCategoryStart,
		history,
	} = props;

	useEffect(() => {
		return () => {
			removeCategory();
		};
	}, [removeCategory]);

	const handleChange = event => {
		const { name, value } = event.target;
		setCategoryStart(name, value);
	};

	const handleDelete = () => {
		deleteCategoryStart();
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
						{!category.isNew && (
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
								value={category.name}
								fullWidth
								color='primary'
								helperText={category.errorName}
								error={category.errorName ? true : false}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Box display='flex' paddingTop={5}>
						<CategoryDetailButton />
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

CategoryDetailForm.propTypes = {
	category: PropTypes.object.isRequired,
	removeCategory: PropTypes.func.isRequired,
	setCategoryStart: PropTypes.func.isRequired,
	deleteCategoryStart: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
	category: selectCategory,
});

const mapDispatchToProps = dispatch => ({
	removeCategory: () => dispatch(removeCategory()),
	setCategoryStart: (inputName, value) =>
		dispatch(setCategoryStart(inputName, value)),
	deleteCategoryStart: () => dispatch(deleteCategoryStart()),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(CategoryDetailForm);
