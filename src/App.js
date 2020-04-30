import React from 'react';
import './App.css';

// Components
import MainContainer from './components/atoms/main-container/main-container.styles';
import SideMenu from './components/organisms/side-menu/side-menu.component';

const App = () => {
	return (
		<MainContainer>
			<SideMenu></SideMenu>
		</MainContainer>
	);
};

export default App;
