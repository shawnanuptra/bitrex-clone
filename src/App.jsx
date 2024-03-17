import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import HeroImage from "./assets/Try-It-1536x1024.jpg";
import TasteTestImage from "./assets/Taste-Test-Static.png";
import RequestTasteTestBtn from "./components/RequestTasteTestBtn";
import Footer from "./components/Footer";
import { size } from "./utility/constants";

const HeroSection = styled.div`
	width: 100%;
	margin-bottom: 8rem;
	background-color: #fdf2f2;
	color: black;
	display: grid;
	grid-template-columns:
		minmax(0, 1fr) minmax(4rem, 8rem) minmax(5rem, 5rem) minmax(38.25rem, 80rem)
		minmax(5rem, 5rem) minmax(4rem, 8rem) minmax(0, 1fr);

	.hero__content {
		grid-column: 4/5;
		grid-row: 1/2;
		display: flex;
		flex-direction: column;
		padding: 128px 0;
		justify-content: center;
	}

	.hero__media {
		justify-self: end;
		width: 50%;
		grid-column: 3/6;
		grid-row: 1/2;
		height: 100%;
		aspect-ratio: 1/1;
	}

	.hero__media_inner {
		height: 100%;
	}

	.hero__media_img {
		display: block;
		height: 100%;
		width: 100%;
		margin: 0;
		object-fit: cover;
		object-position: center center;
	}

	h1 {
		width: 45%;
		font-size: 74px;
		margin: 0 0 1.5rem;
		line-height: 1.1;
	}
	p {
		font-weight: 600;
		width: 45%;
		font-size: 23px;
		line-height: 1.4;
		margin: 0 0 1.5rem;
	}
	.hero__cta {
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
		margin-top: 1rem;
	}

	.hero__cta_wrapper {
		margin-top: 1.5rem;
	}

	mark {
		color: red;
		background-color: transparent;
	}

	@media ${size.headerMobile} {
		display: grid;
		grid-auto-flow: row;
		grid-auto-rows: auto;
		grid-template-columns: 0 2rem 2rem minmax(0, 1fr) 2rem 2rem 0;
		background-color: #fdf2f2;
		height: auto;
		width: 100%;

		.hero__content {
			grid-column: 3/6;
			display: flex;
			flex-direction: column;
			padding: 4rem 0;
			justify-content: center;

			h1 {
				width: 100%;
				max-width: 10ch;
				font-size: 48px;
			}

			p {
				width: 100%;
				font-size: 21px;
			}

			.hero__cta_wrapper {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.hero__cta {
				width: 100%;
				text-align: center;
			}
		}

		.hero__media {
			grid-column: 3/6;
			width: 100%;
			justify-self: auto;
			grid-row: auto;
			aspect-ratio: unset;
		}
	}
`;
const TasteTestSection = styled.div`
	background-color: white;
	margin-bottom: 8rem;
	color: black;
	display: grid;
	grid-template-columns:
		minmax(0, 1fr) minmax(4rem, 8rem) minmax(5rem, 5rem) minmax(38.25rem, 80rem)
		minmax(5rem, 5rem) minmax(4rem, 8rem) minmax(0, 1fr);

	.wrapper {
		background-color: #fdf2f2;
		grid-column: 3/6;
		display: flex;
		font-weight: 500;
	}
	.tastetest__left {
		display: flex;
		/* grid-column: 3/6; */
		/* grid-row: 1/2; */
		width: 100%;
		margin: 128px 0;
		align-items: center;
	}

	.tastetest__left_inner {
		/* width: 100%; */
		aspect-ratio: 1/1;
		display: flex;
		height: max-content;
	}

	.tastetest_left_inner_img {
		display: block;
		width: 100%;
		margin: 0;
		object-fit: cover;
		object-position: center center;
	}

	.tastetest__right {
		padding: 128px 0;
		width: 100%;
		/* grid-column: 3/6; */
		justify-content: flex-end;
		display: flex;
		/* grid-row: 1/2; */
	}

	.tastetest__right_content {
		width: 100%;
		display: flex;
		justify-content: start;
		flex: 0 1 auto;
		flex-direction: column;
		padding: 0 80px;
	}

	h2 {
		font-size: 40px;
		margin-bottom: 0.75em;
		margin-top: 0;
	}

	.tastetest__right_content_inner {
		display: flex;
		flex-direction: column;

		p,
		ol {
			font-size: 21px;
			margin-top: 0;
			margin-bottom: 0;
		}

		ol {
			margin-top: 42px;
			padding-left: 1.25em;
		}

		li {
			margin-bottom: 21px;
		}

		li:last-of-type {
			margin: 0;
		}

		.terms_and_conditions {
			margin: 2rem 0;
		}
	}

	@media only screen and (min-width: 1124px) and (max-width: 1400px) {
		.tastetest__left {
			padding: 2rem 0;
		}
		.tastetest__right {
			padding: 2rem 0;
		}
	}

	@media ${size.headerMobile} {
		display: grid;
		grid-auto-flow: row;
		grid-auto-rows: auto;
		grid-template-columns: 0 2rem 2rem minmax(0, 1fr) 2rem 2rem 0;
		/* background-color: #fdf2f2; */
		height: auto;
		width: 100%;

		.wrapper {
			grid-column: 3/6;
			display: grid;
			font-weight: 500;
		}

		.tastetest__right {
			grid-row: 2/3;
			padding-top: 64px;
		}
		.tastetest__right_content {
			width: 100%;
			display: flex;
			justify-content: start;
			flex: 0 1 auto;
			flex-direction: column;
			padding: 0 3rem;
		}

		.tastetest__left {
			display: flex;
			width: 100%;
			margin: 0;
		}
	}
`;
function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection>
					<div className='hero__content'>
						<h1>
							<mark>Bitrex®</mark> Taste Test
						</h1>
						<p>
							The best way to understand the power of Bitrex is to taste it for
							yourself! Once you try it you’ll see why we believe Bitrex is the
							perfect ingredient to help keep children safe.
						</p>
						<div className='hero__cta_wrapper'>
							<a href='#' className='hero__cta'>
								Request a Taste Test
							</a>
						</div>
					</div>
					<div className='hero__media'>
						<div className='hero__media_inner'>
							<img src={HeroImage} alt='' className='hero__media_img' />
						</div>
					</div>
				</HeroSection>
				<TasteTestSection>
					<div className='wrapper'>
						<div className='tastetest__left'>
							<div className='tastetest__left_inner'>
								<img
									src={TasteTestImage}
									alt=''
									className='tastetest_left_inner_img'
								/>
							</div>
						</div>
						<div className='tastetest__right'>
							<div className='tastetest__right_content'>
								<h2>Request a Taste Test</h2>
								<div className='tastetest__right_content_inner'>
									<p>
										If you’re curious about the taste of Bitrex, just follow the
										steps below
									</p>
									<ol>
										<li>
											Get in touch to request a Bitrex Taste Test Kit. This
											contains a small amount of Bitrex for you to experience
											the world’s most bitter taste.
										</li>
										<li>
											Make sure to have some milk chocolate on hand to help get
											rid of the taste afterwards.
										</li>
										<li>
											Bring a camera to capture the reactions of anyone trying
											Bitrex, and tag us if you post them online with
											#BitrexTasteTest.
										</li>
										<li>
											Why not get others involved? Arrange a group test to
											spread awareness about the important role Bitrex plays in
											child safety.
										</li>
									</ol>
									<p className='terms_and_conditions'>
										Read our taste test terms and conditions.
									</p>
									<RequestTasteTestBtn />
								</div>
							</div>
						</div>
					</div>
				</TasteTestSection>
			</main>
			<Footer />
		</>
	);
}

export default App;
