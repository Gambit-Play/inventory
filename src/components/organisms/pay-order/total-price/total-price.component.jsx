import React from 'react';

const TotalPrice = ({ totalPrice }) => (
	<h1>{`Total: € ${parseFloat(totalPrice).toFixed(2)}`}</h1>
);

export default TotalPrice;
