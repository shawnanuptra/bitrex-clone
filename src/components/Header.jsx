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
} from "./constants";

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
`;
function Header() {
	const [isSticky, setIsSticky] = useState(true);
	const [lastScrollTop, setLastScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currScroll = window.scrollY;
			if (currScroll > lastScrollTop) {
				// scroll down, dont show header
				setIsSticky(false);
			} else {
				// scroll up, show header
				setIsSticky(true);
			}

			//remember last scroll position
			setLastScrollTop(currScroll <= 0 ? 0 : currScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollTop]);

	return (
		<HeaderWrapper isSticky={isSticky}>
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
				</div>
			</div>
		</HeaderWrapper>
	);
}

export default Header;
