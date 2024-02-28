import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/Logo.webp";
import enFlag from "../assets/en.webp";
import arrow from "../assets/arrow.svg";
import NavItem from "./NavItem";
import {
	OurPartners,
	ProductInformation,
	SafetyMission,
	WhatIsBitrex,
	size,
} from "../utility/constants";

const HeaderWrapper = styled.header`
	display: grid;
	grid-template-columns:
		minmax(0, 1fr) minmax(4rem, 8rem) minmax(5rem, 5rem) minmax(38.25rem, 80rem)
		minmax(5rem, 5rem) minmax(4rem, 8rem) minmax(0, 1fr);
	width: 100%;
	background-color: white;
	color: black;
	position: sticky;
	top: ${({ isSticky }) => (isSticky ? "0" : "-150px")};
	transition: top 0.5s;

	.header__inner {
		display: flex;
		grid-column: 3/6;
		flex-grow: 1;
		padding: 1rem 0;
		align-items: center;
		justify-content: space-between;
	}

	.header__logo {
		width: 6rem;
	}

	.nav__li {
		font-size: 19px;
		list-style-type: none;
		margin-right: 1rem;
	}

	.nav__ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-inline-start: 0;
		margin: 0 auto 0 2rem;
	}

	.nav__cta {
		background-color: #ed1c23;
		transition: 0.3s;
		&:hover {
			background-color: #d3191f;
			border-color: #d3191f;
		}
		color: white;
		border-radius: 2rem;
		font-size: 19px;
		font-weight: 600;
		padding: 1rem 1.15rem;
	}

	.nav__flag_container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		place-items: center;
		gap: 10px;
	}

	.group1 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.group2 {
		display: flex;
		flex-direction: row;
		gap: 15px;
	}

	.nav__hamburger {
		display: none;
	}

	// MOBILE VIEW
	@media ${size.headerMobile} {
		display: grid;
		grid-auto-flow: row;
		grid-auto-rows: auto;
		grid-template-columns: 0 2rem 2rem minmax(0, 1fr) 2rem 2rem 0;
		background-color: ${({ isHeaderActive }) =>
			isHeaderActive ? "#ed1c23" : "white"};

		.header__inner {
			display: flex;
			grid-column: 3/6;
			padding: 1rem 0;
			align-items: center;
			justify-content: space-between;
		}

		.header__logo {
			width: 6rem;
		}

		.nav__li {
			font-size: 19px;
			list-style-type: none;
			margin-right: 1rem;
		}

		.nav__ul {
			display: none;
		}

		.nav__cta {
			background-color: #ed1c23;
			transition: 0.3s;
			color: white;
			border-radius: 2rem;
			font-size: 19px;
			font-weight: 600;
			padding: 1rem 1.15rem;
			top: ${({ isSticky }) => (isSticky ? "0" : "-150px")};
			border: ${({ isHeaderActive }) =>
				isHeaderActive ? "0.125em solid white" : "0.125em solid transparent"};
		}

		.nav__flag_container {
			display: none;
		}

		.group1 {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.group2 {
			display: flex;
			flex-direction: row;
			gap: 15px;
			align-items: center;
		}

		// HAMBURGER

		.nav__hamburger_wrapper {
			cursor: pointer;
			height: 2rem;
			/* margin-left: 1rem; */
			position: relative;
			width: 1.5rem;
			/* border: 1px solid black; */
		}
		.nav__hamburger {
			// create the hamburger
			content: "";
			display: block;
			height: 1px;
			left: 0px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 100%;
			background-color: black;
			// create the other lines

			&::before {
				content: "";
				display: block;
				height: 1px;
				left: 0px;
				position: absolute;
				top: 0;
				transform: translateY(-800%);
				width: 100%;
				background-color: black;
				transition: 0.25s, background-color 0.25s, width 0.25s,
					-webkit-transform 0.25s;
			}

			&::after {
				content: "";
				display: block;
				height: 1px;
				left: 0px;
				position: absolute;
				top: 0;
				transform: translateY(800%);
				width: 100%;
				background-color: black;
				transition: 0.25s, background-color 0.25s, width 0.25s,
					-webkit-transform 0.25s;
			}
		}

		// for opening hamburger
		.open {
			// middle line is transparent
			background-color: transparent;

			// rotate the other lines
			&::before {
				transform: translateY(-50%) rotate(45deg);
				background-color: white;
			}

			&::after {
				transform: translateY(-50%) rotate(-45deg);
				background-color: white;
			}
		}
	}
`;
function Header() {
	const [isSticky, setIsSticky] = useState(true);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [lastScrollDown, setLastScrollDown] = useState(true); // remembers previous scroll is down

	// for styling changes in Mobile when Hamburger is clicked
	const [isHeaderActive, setIsHeaderActive] = useState(false);

	const handleHeaderClick = () => {
		if (isHeaderActive) {
			// turn header inactive, make X into burger
			document.getElementById("hamburger_icon").classList.remove("open");

			// change header background

			// change CTA Button styling
		} else {
			// turn header active, make burger into X
			document.getElementById("hamburger_icon").classList.add("open");
		}
		setIsHeaderActive(!isHeaderActive);
	};

	// to monitor scrolls
	useEffect(() => {
		const handleScrollEnd = () => {
			const currScroll = window.scrollY;
			if (currScroll > lastScrollTop) {
				// scroll down, dont show header
				if (lastScrollDown) {
					setIsSticky(false);
					console.log("set sticky false");
				} else {
					setLastScrollDown(true);
					console.log("set last scroll down truye");
				}
			} else {
				// scroll up, show header
				if (lastScrollDown) {
					setLastScrollDown(false);
					console.log("set last scr down false");
				} else {
					setIsSticky(true);
					console.log("set sticky true");
				}
			}

			//remember last scroll position
			setLastScrollTop(currScroll <= 0 ? 0 : currScroll);
		};

		window.addEventListener("scrollend", handleScrollEnd);
		return () => window.removeEventListener("scrollend", handleScrollEnd);
	}, [lastScrollTop]);

	return (
		<HeaderWrapper isSticky={isSticky} isHeaderActive={isHeaderActive}>
			<div className='header__inner'>
				<div className='group1'>
					<img className='header__logo' src={logo} />
					<nav>
						<ul className='nav__ul'>
							<li className='nav__li'>
								<NavItem
									text={"What is Bitrex"}
									links={WhatIsBitrex}
									key={0}
									index={0}
								/>
							</li>
							<li className='nav__li'>
								<NavItem
									text={"Our Partners"}
									links={OurPartners}
									key={1}
									index={1}
								/>
							</li>
							<li className='nav__li'>
								<NavItem
									text={"Safety Mission"}
									links={SafetyMission}
									key={2}
									index={2}
								/>
							</li>
							<li className='nav__li'>
								<NavItem
									text={"Product Information"}
									links={ProductInformation}
									key={3}
									index={3}
								/>
							</li>
						</ul>
					</nav>
				</div>
				<div className='group2'>
					<a className='nav__flag_container'>
						<img src={enFlag} alt='English Flag' width={"30px"} />
						{/* Arrow svg */}
						<img src={arrow} alt='toggle Arrow' />
					</a>

					<div>
						<button className='nav__cta'>Contact Us</button>
					</div>
					<div className='nav__hamburger_wrapper' onClick={handleHeaderClick}>
						<span className='nav__hamburger' id='hamburger_icon'></span>
					</div>
				</div>
			</div>
		</HeaderWrapper>
	);
}

export default Header;
