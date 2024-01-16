import React from "react";
import Arrow from "./Arrow";
import styled from "styled-components";

const Wrapper = styled.div`
	margin-right: 1rem;
	position: relative;
	a {
		text-decoration: none;
		display: flex;
		place-items: center;
		gap: 10px;

		color: black;
	}

	a:hover {
		text-decoration: underline;
	}

	.dropdown {
		position: absolute;
		z-index: 300;
		background-color: #fbe4e4;
		border-radius: 1rem;
		overflow: visible;
		width: auto;
	}

	.dropdown > a {
		margin: 1.25rem 1.25rem 0;
		white-space: nowrap;
	}

	.dropdown > a:last-child {
		margin: 1.25rem;
	}
`;

function NavItem({ text, links }) {
	console.log(links);
	return (
		<Wrapper>
			<a href=''>
				{text}
				<Arrow />
			</a>

			<div className='dropdown'>
				{
					// TODO: add functionality for toggling drop down menu
					// Dynamically produce links
					Object.entries(links).map(([title, link]) => (
						<a key={title} href={link}>
							{title}
						</a>
					))
				}
			</div>
		</Wrapper>
	);
}

export default NavItem;
