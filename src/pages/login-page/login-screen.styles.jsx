import styled from 'styled-components';

// Assets
import image from '../../assets/images/people-food.jpg';

const LoginImage = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.75),
			rgba(0, 0, 0, 0.75)
		),
		url(${image});
	background-position: 0px 0px, 50% 50%;
	background-size: auto, cover;
`;

export default LoginImage;
