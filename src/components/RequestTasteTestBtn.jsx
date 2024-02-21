import React, { useState } from "react";
import styled from "styled-components";
import BigArrow from "./micro-components/BigArrow";

const Wrapper = styled.a`
	display: flex;
	flex-direction: row;
	gap: 8px;
	color: red;
	text-decoration: none;
	font-size: 19px;
	/* margin-top: 32px; */

	&:hover {
		text-decoration: underline;
		color: red;
		cursor: pointer;
	}

	.arrow_wrapper {
		display: flex;
		transition: all 0.1s ease;
	}

	.move {
		transform: translateX(3px);
	}
`;
function RequestTasteTestBtn() {
	const [hover, setHover] = useState(false);

	return (
		<Wrapper
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<span>Request a Taste Test</span>
			<div className={"arrow_wrapper" + `${hover ? " move" : ""}`}>
				<BigArrow />
			</div>
		</Wrapper>
	);
}

export default RequestTasteTestBtn;
