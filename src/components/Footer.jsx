import React from "react";
import VeranovaLogo from "../assets/veranova-2-22.webp";
import styled from "styled-components";
import TwitterIcon from "./TwitterIcon";
import FacebookIcon from "./FacebookIcon";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns:
		minmax(0, 1fr) minmax(4rem, 8rem) minmax(5rem, 5rem) minmax(38.25rem, 80rem)
		minmax(5rem, 5rem) minmax(4rem, 8rem) minmax(0, 1fr);
	background-color: black;
	color: white;

	.footer_inner {
		grid-column: 3/6;
		width: 100%;
	}

	.footer_main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.footer_col {
		margin-top: 64px;
		display: flex;
		flex-direction: column;

		p {
			margin: 0;
		}
	}

	.footer_col__title {
		font-weight: 600;
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 18px;
	}

	.footer_navigation {
		display: flex;
		flex-direction: column;

		a {
			color: white;
			margin: 0 1rem 0.5rem 0;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.icon-link > svg {
		fill: white;
		flex-grow: 1;
	}

	.footer_col_row {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 0.8rem;
	}

	.footer_bottom {
		margin: 64px 0;

		.footer_bottom__text {
			margin-top: 48px;
			display: flex;
			flex-direction: row;
		}

		.footer_bottom__siteby {
			display: flex;
			flex-direction: row;
			min-width: fit-content;

			a {
				color: white;
				text-shadow: 0 0 32px #fff;

				&:hover {
					text-decoration: underline;
					cursor: pointer;
					text-shadow: 0 0 32px #fff;
				}
			}
		}
	}
`;
function Footer() {
	return (
		<Wrapper>
			<div className='footer_inner'>
				<div className='footer_main'>
					<div className='footer_col'>
						<img src={VeranovaLogo} alt='Veranova Logo' />
					</div>
					<div className='footer_col'>
						<h2 class='footer_col__title'>Contact us</h2>
						<p>Head Office, Macfarlan Smith, 10 Wheatfield Road,</p>
						<p>Edinburgh, EH11 2QA, Scotland, United Kingdom</p>
						<p>&nbsp;</p>
						<p>Tel: +44 (0)131 337 2434</p>
						<p>Fax: +44 (0)131 337 9813</p>
					</div>
					<div class='footer_col'>
						<h2 class='footer_col__title'>Useful links</h2>
						<nav class='footer_navigation'>
							<a
								href='https://www.bitrex.com/privacy-policy-2/'
								class='footer-navigation__link'
							>
								Privacy Policy
							</a>
							<a
								href='https://www.bitrex.com/terms-of-website-use/'
								class='footer-navigation__link'
							>
								Terms of Website use
							</a>
							<a
								href='https://www.bitrex.com/modern-slavery-statement/'
								class='footer-navigation__link'
							>
								Modern Slavery Statement
							</a>
							<a
								href='https://www.bitrex.com/accessibility-statement-for-bitrex/'
								class='footer-navigation__link'
							>
								Accessibility Statement for Bitrex
							</a>
						</nav>
					</div>
					<div className='footer_col'>
						<h2 class='footer_col__title'>We're social</h2>
						<div className='footer_col_row'>
							<a class='icon-link' href='https://twitter.com' target='_blank'>
								<TwitterIcon />
							</a>
							<a class='icon-link' href='https://facebook.com' target='_blank'>
								<FacebookIcon />
							</a>
						</div>
					</div>
				</div>
				<div className='footer_bottom'>
					<hr />
					<div className='footer_bottom__text'>
						<p>
							By continuing to use this site you consent to the use of cookies
							on your device as described in our cookie policy unless you have
							disabled them. You can change your cookie settings at any time but
							parts of our site will not function correctly without them.
						</p>
						<div className='footer_bottom__siteby'>
							<p>
								Site by <a href='#'> Shawn</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Footer;
