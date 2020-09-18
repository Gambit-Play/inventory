import React from 'react';

// Images
import takeOrdersButtons from '../../../../../documentation/images/take-orders-images/take-orders-buttons.png';
import takeOrdersTables from '../../../../../documentation/images/take-orders-images/take-orders-tables.png';
import takeOrdersForm from '../../../../../documentation/images/take-orders-images/take-orders-form.png';
import takeOrdersTypePayment from '../../../../../documentation/images/take-orders-images/take-orders-type-payments.png';
import takeOrdersPayed from '../../../../../documentation/images/take-orders-images/take-orders-payed.png';

// Components
import { Image, Title, BodyText } from '../tutorials-card.styles';

// Mui Components
import Divider from '@material-ui/core/Divider';

const TakeOrderTutorial = () => {
	return (
		<React.Fragment>
			<Title>Create a new order</Title>
			<Image src={takeOrdersButtons} alt='' full />
			<BodyText lineHeight>
				1. Click here if you want to create a new order.
				<br />
				2. Click on ‘TAKE AWAY’ if the order is a take-away.
				<br />
				3. Click on ‘EAT IN’ if the customer wants to eat in.
			</BodyText>
			<Image src={takeOrdersTables} alt='' />
			<BodyText>
				4. Click on a table if you have clicked on the ‘Eat In’ button
			</BodyText>
			<Divider className='divider' />
			<Title>Take an order</Title>
			<Image src={takeOrdersForm} alt='' full />
			<BodyText lineHeight>
				1. Filter the menus by category.
				<br />
				2. Menu items.
				<br />
				3. Order ticket.
				<br />
				4. Delete a menu item.
				<br />
				5. Pay button.
			</BodyText>
			<Image src={takeOrdersTypePayment} alt='' />
			<BodyText lineHeight>
				6. When the client prefers to pay with cash.
				<br />
				7. When the client prefers to pay with a card.
			</BodyText>
			<Image src={takeOrdersPayed} alt='' />
			<BodyText>
				8. A order ticket will be created after you click ‘PAYED’.
			</BodyText>
			<Divider className='divider' />
		</React.Fragment>
	);
};

export default TakeOrderTutorial;
