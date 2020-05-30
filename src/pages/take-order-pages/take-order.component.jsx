import React from 'react';
import PropTypes from 'prop-types';

// Components
import CenterContainer from '../../components/atoms/center-container/center-container.styles';

// Mui Components & Icons
import Button from '@material-ui/core/Button';

const TakeOrder = () => {
	return (
		<CenterContainer>
			<Button variant='contained' color='primary'>
				Take Away
			</Button>
			<Button variant='contained' color='primary'>
				Eat In
			</Button>
		</CenterContainer>
	);
};

TakeOrder.propTypes = {};

export default TakeOrder;
