import React from 'react';
import NumberFormat from 'react-number-format';

// Convert an array to an object
export const convertArrayToObject = (array, key) => {
	const initialValue = {};

	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		};
	}, initialValue);
};

// Converts a string to a number with 2 decimals
export const convertToFloat = input => {
	const formattedNumber = parseFloat(parseFloat(input).toFixed(2));

	if (isNaN(formattedNumber)) {
		return 0;
	}

	return formattedNumber;
};

// Changes the property 'createdById' from user id to displayName
export const updateDataWithUsersName = (userCollection, collection) => {
	if (!userCollection || !collection)
		console.error('Please provide all the inputs');

	const hasUpdatedById = collection.hasOwnProperty('updatedById');
	if (hasUpdatedById) {
		const idUser = user => {
			return user.id === collection.updatedById;
		};
		const user = userCollection.find(idUser);
		const updatedByDoc = {
			...collection,
			createdBy: user.displayName,
			updatedBy: user.displayName,
		};

		return updatedByDoc;
	}

	if (!hasUpdatedById) {
		const idUser = user => {
			return user.id === collection.createdById;
		};
		const user = userCollection.find(idUser);
		const createdByDoc = {
			...collection,
			createdBy: user.displayName,
		};

		return createdByDoc;
	}
};

// Formats the data from an input to a price.
export const PriceFormatter = props => {
	const { inputRef, onChange, ...other } = props;

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={values => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			isNumericString
			prefix={`€ `}
		/>
	);
};

// Formats the data from an input to a number.
export const NumberFormatter = props => {
	const { inputRef, onChange, ...other } = props;

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={values => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			isNumericString
		/>
	);
};
