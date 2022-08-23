import styled from "styled-components";
import { Link } from "react-router-dom";

import {
	fontSize,
	fontWeight,
	spacing,
	borderRadius,
} from "./infrastructure.styles";

// resusable components
export const LogoContainer = styled.div`
	width: 52px;
	height: 52px;
	margin-top: ${spacing.medium};
	margin-bottom: ${spacing.xlarge};
	cursor: pointer;
	transition: ease 0.5s;

	img {
		max-width: 100%;
		height: auto;
		transition: ease 0.5s;
	}
`;

export const ContainerWrapper = styled.div`
	width: 90%;
	transition: ease 0.5s;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const SpecialContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-around;
	overflow-x: wrap;
	overflow-y: auto;
	gap: 35px;
	height: 100vh;
	padding: 15px;
	border-radius: inherit;
	background-color: ${({ theme }) => theme.ui.view.specialContainer};

	// BLur effect
	-webkit-backdrop-filter: blur(15px);
	backdrop-filter: blur(15px);

	// Scrollbar
	scroll-behavior: smooth;
	overscroll-behavior: auto;

	&::-webkit-scrollbar {
		background-color: rgba(60, 47, 47, 0.2);
		width: 8px;
		margin-top: 3px;
		border-radius: 20px;
	}

	/* background of the scrollbar except button or resizer */
	&::-webkit-scrollbar-track {
		display: none;
	}

	/* scrollbar itself */
	&::-webkit-scrollbar-thumb {
		background-color: rgba(60, 47, 47, 0.5);
		border-radius: 20px;
		border: 2px solid #999;
	}

	/* set button(top and bottom of the scrollbar) */
	&::-webkit-scrollbar-button {
		display: none;
	}
`;

export const SearchBar = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	flex-direction: row;
	width: 70%;
	height: 32px;
	border-radius: ${borderRadius.small};
	background-color: ${({ theme }) => theme.ui.searchBar.background};
	transition: ease 0.5s;

	&:hover,
	:focus {
		transition: all 0.2s ease;
		background-color: ${({ theme }) => theme.ui.searchBar.hover};
	}

	button {
		display: inherit;
		align-items: center;
		justify-content: center;
		font-size: ${fontSize.small};
		width: 32px;
		height: 32px;
		padding: 0;
		border-radius: 6.7px 0 0 6.7px;
		background-color: ${({ theme }) => theme.ui.button.searchButton};
		transition: ease 0.5s;

		&:hover {
			transition: all 0.2s ease;
			background-color: ${({ theme }) => theme.ui.button.hover};
		}

		&:active {
			background-color: ${({ theme }) => theme.ui.button.active};
		}
	}

	input {
		${"" /* need to change to toggle panel */}
		display: inherit;
		flex: 0.85;
		padding: ${spacing.small};
		font-size: ${fontSize.body};
		font-weight: ${fontWeight.regular};
		letter-spacing: 0.6px;
		color: inherit;
		outline: none;
		border: none;
		border-radius: ${borderRadius.small};
		background: transparent;
		transition: ease 0.5s;

		::placeholder,
		::-webkit-input-placeholder {
			color: ${({ theme }) => theme.ui.text.secondary};
		}
		:-ms-input-placeholder {
			color: ${({ theme }) => theme.ui.text.secondary};
		}
	}
`;

export const Separator = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.ui.sidepanel.separator};
	margin-top: ${spacing.large};
	transition: ease 0.5s;
`;

export const LinkContainer = styled.span`
	width: fit-content;
	margin-top: 24px;
	border-radius: ${borderRadius.small};
	background-color: transparent;
	transition: ease 0.5s;
`;

export const LinkComponent = styled(Link)`
	display: flex;
	display: -webkit-flex; /* Safari */
	align-items: center;
	justify-content: center;
	width: 130px;
	height: auto;
	font-size: calc(${fontSize.body} + 2);
	font-weight: ${fontWeight.medium};
	text-decoration: none;
	cursor: pointer;
	color: ${({ theme }) => theme.ui.link.color};
	background-color: ${({ theme }) => theme.ui.link.background};
	border-radius: ${borderRadius.small};
	padding: calc(${spacing.small} - 2);
	transition: ease 0.5s;

	&:hover {
		color: ${({ theme }) => theme.ui.link.hover};
		background-color: ${({ theme }) => theme.ui.link.backgroundHover};
		transition: ease 0.5s;
	}

	&:focus {
		color: ${({ theme }) => theme.ui.link.focus};
		background-color: ${({ theme }) => theme.ui.link.backgroundFocus};
	}

	 a {
      text-decoration: none;
      color: ${({ theme }) => theme.ui.link.color2};
       transition: all 0.50s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.ui.link.hover};
        transition: all 0.2s ease-in-out;
      }

      &:focus {
        color: ${({ theme }) => theme.ui.link.focus};
      }
`;

export const LinkText = styled.div`
	${"" /* need to check for a better way not to repeat this code */}
	display: inherit;
	align-items: inherit;
	justify-content: inherit;
	width: 100%;
	height: 100%;
	font-size: inherit;
	font-weight: inherit;
	cursor: pointer;
	color: inherit;
	background-color: transparent;
	border-radius: inherit;
	padding: ${spacing.small};
	transition: ease 0.5s;
`;

export const RegularCard = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	flex-direction: column;
	align-items: auto;
	justify-content: flex-start;
	width: min(500px, 300px); /* May need to be refactored */
	height: min(400px, 350px); /* May need to be refactored */
	${"" /* padding: ${spacing.small}; */}
	border-radius: ${borderRadius.small};
	border: 1px solid ${({ theme }) => theme.ui.card.borderColor};
	background-color: ${({ theme }) => theme.ui.card.background};


	/* Shadow effect */
	box-shadow: 0px 0px 5px 2px rgba(123, 123, 123, 0.6);
	-webkit-box-shadow: 0px 0px 5px 2px rgba(123, 123, 123, 0.6);
	-moz-box-shadow: 0px 0px 5px 2px rgba(123, 123, 123, 0.6);

	&:hover {
		@keyframes scale-up-center {
			0% {
				filter: blur(.0px)
				-webkit-font-smoothing: subpixel-antialiased;
				-webkit-transform: scale(100%);
				transform: scale(100%);
				transition-property: transform;
				transform: translateZ(0);
				backface-visibility: hidden;
			}
			100% {
				-webkit-transform: scale(103%);
				transform: scale(103%);
			}
		}

		-webkit-animation: scale-up-center 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
			both;
		animation: scale-up-center 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

		/* Shadow effect */
	box-shadow: 0px 0px 9px 5px rgba(123, 123, 123, 0.9);
	-webkit-box-shadow: 0px 0px 9px 5px rgba(123, 123, 123, 0.9);
	-moz-box-shadow: 0px 0px 9px 5px rgba(123, 123, 123, 0.9);
	}

	img {
		min-width: 100%;
		height: min(185px); /* May need to be refactored */
		border-radius: ${borderRadius.small} ${borderRadius.small} 0 0;
		border: none;
		object-fit: cover;
		transition: ease 0.5s;
	}
`;

/* Modify with extreme caution, 2 other components rely on this for styling */
export const RegularCardTitle = styled.div`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	width: 100%;
	height: auto;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: wrap;
	font-size: ${fontSize.title};
	font-weight: ${fontWeight.medium};
	color: ${({ theme }) => theme.ui.card.titleColor};
`;

/* Relies on RegularCardTitle for styles*/
export const RegularCardSecondaryTitle = styled(RegularCardTitle)`
	-webkit-line-clamp: 3;
	text-align: start;
	font-size: calc(${fontSize.body} + 2);
	font-weight: ${fontWeight.regular};
	color: ${({ theme }) => theme.ui.card.secondaryTitleColor};
`;

/* Relies on RegularCardSecondaryTitle for styles*/
export const RegularCardDescription = styled(RegularCardSecondaryTitle)`
	height: 60px;
	font-size: ${fontSize.body};
	font-weight: ${fontWeight.light};
	color: ${({ theme }) => theme.ui.card.descriptionColor};
`;

export const RegularCardButton = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;

	button {
		width: 100%;
		height: 35px;
		font-size: ${fontSize.button};
		text-align: center;
		cursor: pointer;
		color: ${({ theme }) => theme.ui.text.buttonText};
		background-color: ${({ theme }) => theme.ui.button.primary};
		border-radius: ${borderRadius.small};
		padding: calc(${spacing.small} - 2);
		transition: ease 0.5s;

		&:hover {
			color: ${({ theme }) => theme.ui.text.primary};
			background-color: ${({ theme }) => theme.ui.button.learnMoreHover};
			border: 1px solid ${({ theme }) => theme.ui.card.subtitleColor}; /* Needs to be changes in infrastructure.styles.js file */
		}

		&:active {
			color: ${({ theme }) => theme.ui.text.buttonText};
			background-color: ${({ theme }) => theme.ui.button.learnMoreActive};
			border-color: none;
		}
	}
`;

// Header styled components

// Main/Views styled components

// Sidepanel styled components
export const SidePanel = styled.div`
	position: relative;
	display: flex;
	display: -webkit-flex; /* Safari */
	flex-direction: column;
	align-items: center;
	width: ${({ isOpen }) => (isOpen ? `300px ` : `70px`)};
	height: 100vh;
	padding: ${spacing.small};
	border-radius: ${borderRadius.small};
	background-color: ${({ theme }) => theme.ui.sidepanel.background};
	transition: ease 0.5s;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

export const SidePanelTogglerButton = styled.button`
	display: flex;
	display: -webkit-flex; /* Safari */
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: ${({ isOpen }) => (isOpen ? `-16px` : `40px`)};
	width: 32px;
	height: 32px;
	border-radius: 50%;
	cursor: pointer;
	background-color: ${({ theme }) => theme.ui.button.secondary};
	box-shadow: 0 0 4px ${({ theme }) => theme.ui.button.active},
		0 0 7px ${({ theme }) => theme.ui.button.active};
	transition: ease 0.5s;
`;

export const SidePanelSearchBar = styled(SearchBar)`
	width: ${({ isClosed }) => (!isClosed ? `fit-content` : `32px`)};

	button {
		border-radius: ${({ isClosed }) =>
			!!isClosed ? `6.7px` : `6.7px 0 0 6.7px`};
	}
`;

export const SidePanelInnerWrapper = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	transition: ease 0.5s;
`;

export const SidePanelLinkContainer = styled(LinkContainer)`
	display: flex;
	display: -webkit-flex; /* Safari */
	align-items: left;
	justify-content: flex-start;
	${"" /* refactor for togglable panel */}
	align-self: flex-start;
	width: ${({ isPanelOpen }) => (isPanelOpen ? `100%` : `fit-content`)};
	transition: ease 0.5s;
`;

export const SidePanelLinkComponent = styled(LinkComponent)`
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	height: auto;
	transition: ease 0.5s;
`;

export const SidePanelLinkIcon = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	width: 16px;
	height: 16px;
	margin: ${({ isPanelOpen }) => (!isPanelOpen ? `12px` : `0`)};
	transition: ease 0.5s;
`;

// Theme settings styled components
export const ThemeSettings = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	align-items: center;
	font-size: ${fontSize.body};
	margin-top: ${spacing.medium};
	transition: ease 0.5s;
`;

export const ThemeSettingsTitle = styled.span`
	display: block;
	flex: 1;
	color: ${({ theme }) => theme.ui.button.active};
	transition: ease 0.5s;
`;

export const ThemeSettingsTogglerButton = styled.button`
	position: relative;
	width: 36px;
	height: 20px;
	margin: 0 auto;
	border-radius: 20px;
	${"" /* needs to be refactored */}
	background-color: ${({ theme, isActive }) =>
		!isActive ? theme.ui.button.primary : theme.ui.button.primary};
	transition: all 1s ease;
`;

export const ThemeSettingsTogglerButtonThumb = styled.div`
	position: absolute;
	top: 1px;
	right: calc(100% - 18px - 1px);
	bottom: 1px;
	width: 18px;
	height: 18px;
	transition: 0.5s ease right;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.ui.button.secondary};
`;

// Footer styled components
export const FooterContainer = styled.footer`
	grid-area: footer;
	padding: ${spacing.medium};
	border-radius: ${borderRadius.small};
	color: ${({ theme }) => theme.ui.footer.color};
	background-color: ${({ theme }) => theme.ui.footer.background};
	transition: ease 0.5s;

	@media only screen and (max-width: 768px) {
		flex-flow: column wrap;
		-webkit-flex-flow: column wrap; /* Safari 6.1+ */
	}

	div {
		display: flex;
		display: -webkit-flex; /* Safari */
		flex-flow: row wrap;
		-webkit-flex-flow: row wrap; /* Safari 6.1+ */
		align-items: center;
		justify-content: center;
		gap: 1em;
		width: 100%;
		transition: ease 0.5s;
	}
`;

// card component light mode
/* Background styles */
// body {
//     background-color: #f3f3f3;
// }

// /* Glassmorphism card effect */
// .card {
//     backdrop-filter: blur(16px) saturate(180%);
//     -webkit-backdrop-filter: blur(16px) saturate(180%);
//     background-color: rgba(17, 25, 40, 0.95);
//     border-radius: 12px;
//     border: 1px solid rgba(0, 13, 34, 0.125);
// }

// /* Generated by https://generator.ui.glass/ */

// --------------------------------------------------

// card component dark mode
/* Background styles */
// body {
//     background-color: #161616;
// }

// /* Glassmorphism card effect */
// .card {
//     backdrop-filter: blur(16px) saturate(0%);
//     -webkit-backdrop-filter: blur(16px) saturate(0%);
//     background-color: rgba(0, 13, 34, 0.85);
//     border-radius: 12px;
//     border: 1px solid rgba(255, 255, 255, 0.125);
// }

// /* Generated by https://generator.ui.glass/ */

// --------------------------------------------------
// box shadow
// box-shadow: 0px 0px 5px 2px rgba(123,123,123,0.6);
// -webkit-box-shadow: 0px 0px 5px 2px rgba(123,123,123,0.6);
// -moz-box-shadow: 0px 0px 5px 2px rgba(123,123,123,0.6);

// --------------------------------------------------
// expend component scale-up-center animation
// .scale-up-center {
// 	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// 	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// }
/* ----------------------------------------------
 * Generated by Animista on 2022-7-15 22:56:39
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
// @-webkit-keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }
// @keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }
