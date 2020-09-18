import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { selectType } from '../../redux/handlers/tutorials/tutorials.selectors';
import { setTutorialsType } from '../../redux/handlers/tutorials/tutorials.actions';

// Components
import TutorialButtons from '../../components/organisms/tutorials/tutorials-buttons/tutorials-buttons.component';
import TutorialCard from '../../components/organisms/tutorials/tutorials-card/tutorials-card.component';
import { FlexRow } from '../../components/atoms/flex/flex-row.component';

const TutorialScreen = ({ type, setTutorialsType }) => {
	return (
		<FlexRow>
			<TutorialButtons
				currentType={type}
				setCurrentType={setTutorialsType}
			/>
			<TutorialCard currentType={type} />
		</FlexRow>
	);
};

TutorialScreen.propTypes = {
	type: PropTypes.string.isRequired,
	setTutorialsType: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	type: selectType,
});

const mapDispatchToProps = dispatch => ({
	setTutorialsType: type => dispatch(setTutorialsType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TutorialScreen);
