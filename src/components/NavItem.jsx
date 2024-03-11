import React, { useRef, useEffect, useState } from "react";
import Arrow from "./micro-components/Arrow";
import styled from "styled-components";
import { size } from "../utility/constants";
import MobileArrow from "./micro-components/MobileArrow";

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
		top: 2.5rem;
		z-index: 300;
		background-color: #fbe4e4;
		border-radius: 1rem;
		overflow: visible;
		width: auto;
		transition: 0.1s ease;
		opacity: 0;
	}

	.open {
		opacity: 1;
	}

	.dropdown > a {
		margin: 1.25rem 1.25rem 0;
		white-space: nowrap;
	}

	.dropdown > a:last-child {
		margin: 1.25rem;
	}

	.rotatable {
		transition: transform 0.3s ease;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	.rotate {
		transform: rotate(180deg);
	}

	.desktop-arrow {
		display: flex;
	}

	.mobile-arrow {
		display: none;
	}

	@media ${size.headerMobile} {
		.dropdown {
			position: absolute;
			top: 2.5rem;
			z-index: 300;
			border-radius: 1rem;
			overflow: visible;
			background-color: transparent;
			width: auto;
			transition: 0.1s ease;
			opacity: 0;
		}

		.close {
			position: absolute;
			display: none;
		}
		.open {
			opacity: 1;
			display: block;
			position: static;
		}

		a {
			font-size: 24px;
			font-weight: bold;
			color: white;
		}

		.desktop-arrow {
			display: none;
		}

		.mobile-arrow {
			display: flex;
		}

		.main-link {
			margin: 0.2rem 0;
		}
	}
`;

function NavItem({ text, links, index }) {
	const dropdownRef = useRef(null);
	const wrapperRef = useRef(null);

	const [navState, setNavState] = useState(false);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			// Check if the click is outside the Wrapper and the Dropdown
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(e.target) &&
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target)
			) {
				// Close the dropdown
				setNavState(false);
			}
		};

		// Add event listener when the component mounts
		document.addEventListener("click", handleOutsideClick);

		// Cleanup the event listener when the component unmounts
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [navState]);
	return (
		<Wrapper
			ref={wrapperRef}
			onClick={() => {
				// toggle modal
				setNavState(!navState);
			}}
		>
			<a href='#' key={index} className='main-link'>
				{text}
				<div className={`rotatable ${navState ? "rotate" : ""}`}>
					<div className='desktop-arrow'>
						<Arrow />
					</div>
					<div className='mobile-arrow'>
						<MobileArrow />
					</div>
				</div>
			</a>

			{/* DROPDOWN */}
			<div
				className={`dropdown ${navState ? "open" : "close"}`}
				ref={dropdownRef}
			>
				{
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
