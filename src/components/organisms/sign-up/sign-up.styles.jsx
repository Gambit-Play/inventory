import styled from 'styled-components';

export const Box = styled.div`
	display: flex;
	flex-direction: column;

	& .input {
		margin-bottom: ${props => props.theme.spacing(3)};
	}

	& .button {
		margin-top: ${props => props.theme.spacing(5)};
	}
`;
