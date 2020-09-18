import React from 'react';
import PropTypes from 'prop-types';

// Data
import { buttonData } from './tutorials-buttons.data';

// Components
import {
	TutorialButton,
	TutorialButtonBase,
	LeftColumn,
} from './tutorials-buttons.styles';

const TutorialButtons = ({ currentType, setCurrentType }) => {
	return (
		<LeftColumn>
			<div className='sticky'>
				{buttonData.map((item, index) => (
					<React.Fragment key={index}>
						<TutorialButtonBase
							onClick={event => setCurrentType(item.type)}
						>
							<TutorialButton
								isActive={currentType === item.type}
							>
								{item.title}
							</TutorialButton>
						</TutorialButtonBase>
					</React.Fragment>
				))}
			</div>
			{
				// categories.map(category => (
				// <TutorialButtonBase key={category.id}>
				// 	<Paper
				// 		key={category.id}
				// 		onClick={event => selectCategory(category.id)}
				// 	>
				// 		{category.name}
				// 	</Paper>
				// </TutorialButtonBase>
				// ))
			}
		</LeftColumn>
	);
};

TutorialButtons.propTypes = {
	currentType: PropTypes.string.isRequired,
	setCurrentType: PropTypes.func.isRequired,
};
export default TutorialButtons;
