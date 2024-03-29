import styled from "styled-components";

const SpinnerStyled = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	&:after {
		content: " ";
		display: block;
		width: 32px;
		height: 32px;
		margin: 8px;
		border-radius: 50%;
		border: 3px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export { SpinnerStyled };
