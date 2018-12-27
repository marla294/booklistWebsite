import React from "react";
import styled from "styled-components";

const SignInWrapper = styled.div`
	justify-self: center;

	width: 100%;
	padding: ${props => props.theme.S04};

	display: grid;
	grid-gap: 1em;

	border: 0.3rem solid ${props => props.theme.orange};

	@media only screen and (min-width: 768px) {
		width: 768px;
	}
`;

export default function SignIn(props) {
	return (
		<SignInWrapper>
			<p>Sign in component</p>
		</SignInWrapper>
	);
}
