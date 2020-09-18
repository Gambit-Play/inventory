import React from 'react';

// Images
import ordersButton from '../../../../../documentation/images/orders-images/orders-buttons.png';
import ordersTickets from '../../../../../documentation/images/orders-images/orders-tickets.png';
import ordersTable from '../../../../../documentation/images/orders-images/orders-table.png';

// Components
import { Image, Title, BodyText } from '../tutorials-card.styles';

// Mui Components
import Divider from '@material-ui/core/Divider';

const OrdersTutorial = () => {
	return (
		<React.Fragment>
			<Title>Orders list</Title>
			<Image src={ordersButton} alt='' full />
			<BodyText lineHeight>
				1. Click here if you want to see the orders.
				<br />
				2. Click on ‘NEW ORDERS’ to see the current orders.
				<br />
				3. Click on ‘ALL ORDERS’ to see all orders that have been made.
			</BodyText>
			<Divider className='divider' />
			<Title>Current orders</Title>
			<Image src={ordersTickets} alt='' full />
			<BodyText lineHeight>
				1. Current order ticket.
				<br />
				2. The status of the order.
				<br />
				3. What has been ordered.
			</BodyText>
			<Divider className='divider' />
			<Title>All orders</Title>
			<Image src={ordersTable} alt='' full />
			<BodyText>
				Here is where you can find all orders that have been made.
			</BodyText>
			<Divider className='divider' />
		</React.Fragment>
	);
};

export default OrdersTutorial;
