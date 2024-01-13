import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.webp";
import enFlag from "../assets/en.webp";
import arrow from "../assets/arrow.svg";
import Arrow from "./Arrow";
import NavItem from "./NavItem";
import {
	OurPartners,
	ProductInformation,
	SafetyMission,
	WhatIsBitrex,
} from "./constants";

function Header() {
	const HeaderWrapper = styled.header`
		display: grid;
		grid-template-columns:
			minmax(0, 1fr) minmax(4rem, 8rem) minmax(5rem, 5rem) minmax(
				38.25rem,
				80rem
			)
			minmax(5rem, 5rem) minmax(4rem, 8rem) minmax(0, 1fr);
		width: 100vw;
		background-color: white;
		color: black;
	`;

	const HeaderInner = styled.header`
		display: flex;
		grid-column: 3/6;
		flex-grow: 1;
		padding: 1rem 0;
		align-items: center;
		justify-content: space-between;
	`;

	const HeaderLogo = styled.img`
		width: 6rem;
	`;

	const NavLi = styled.li`
		font-size: 19px;
		list-style-type: none;
		margin-right: 1rem;
	`;

	const NavList = styled.ul`
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-inline-start: 0;
		margin: 0 auto 0 2rem;
	`;

	const CTAButton = styled.button`
		background-color: #ed1c23;
		&:hover {
			background-color: #d3191f;
		}
		color: white;
		border-radius: 2rem;
		font-size: 19px;
		font-weight: 600;
		padding: 1rem 1.15rem;
	`;

	const FlagContainer = styled.a`
		display: flex;
		flex-direction: row;
		justify-content: center;
		place-items: center;
		gap: 10px;
	`;

	const Group2 = styled.div`
		display: flex;
		flex-direction: row;
		gap: 15px;
	`;
	const Group1 = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
	`;

	return (
		<HeaderWrapper>
			<HeaderInner>
				<Group1>
					<HeaderLogo src={logo} />
					<nav>
						<NavList>
							<NavLi>
								<NavItem text={"What is Bitrex"} links={WhatIsBitrex} />
							</NavLi>
							<NavLi>
								<NavItem text={"Our Partners"} links={OurPartners} />
							</NavLi>
							<NavLi>
								<NavItem text={"Safety Mission"} links={SafetyMission} />
							</NavLi>
							<NavLi>
								<NavItem
									text={"Product Information"}
									links={ProductInformation}
								/>
							</NavLi>
						</NavList>
					</nav>
				</Group1>
				<Group2>
					<FlagContainer>
						<img src={enFlag} alt='English Flag' width={"30px"} />
						{/* Arrow svg */}
						<img src={arrow} alt='toggle Arrow' />
					</FlagContainer>

					<div>
						<CTAButton>Contact Us</CTAButton>
					</div>
				</Group2>
			</HeaderInner>
		</HeaderWrapper>
	);
}

export default Header;
