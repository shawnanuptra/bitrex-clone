import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import HeroImage from "./assets/Try-It-1536x1024.jpg";

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
	}

	.hero__media {
		justify-self: end;
		width: 50%;
		grid-column: 4/6;
		grid-row: 1/2;
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
			</main>
		</>
	);
}

export default App;
