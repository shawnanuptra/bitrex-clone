import React, { useRef, useEffect } from "react";
import Arrow from "./Arrow";
import styled from "styled-components";
import { useHeaderContext } from "../Contexts";

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

	/* close/open modal */
	.close {
		display: block;
	}
	.open {
		display: block;
	}
`;

function NavItem({ text, links, index }) {
	const { headerState, updateHeaderState } = useHeaderContext();

	console.log(headerState);

	const dropdownRef = useRef(null);
	const wrapperRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			// Check if the click is outside the Wrapper and the Dropdown
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(e.target) &&
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target)
			) {
				// Close the dropdown by updating the header state
				updateHeaderState(index, false);
			}
		};

		// Add event listener when the component mounts
		document.addEventListener("click", handleOutsideClick);

		// Cleanup the event listener when the component unmounts
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [index, updateHeaderState]);
	return (
		<Wrapper
			ref={wrapperRef}
			onClick={() => {
				// toggle modal
				updateHeaderState(index, !headerState[index]);
			}}
		>
			<a href='#' key={index}>
				{text}
				<Arrow />
			</a>

			{/* DROPDOWN */}
			{headerState[index] && (
				<div className='dropdown' ref={dropdownRef}>
					{
						// Dynamically produce links
						Object.entries(links).map(([title, link]) => (
							<a key={title} href={link}>
								{title}
							</a>
						))
					}
				</div>
			)}
		</Wrapper>
	);
}

export default NavItem;
