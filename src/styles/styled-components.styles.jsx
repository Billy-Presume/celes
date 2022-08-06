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
	transition: inherit;

	img {
		max-width: 100%;
		height: auto;
		transition: inherit;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const SearchBar = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	flex-direction: row;
	width: 70%;
	height: 32px;
	border-radius: ${borderRadius.small};
	background-color: ${({ theme }) => theme.ui.searchBar.background};
	transition: inherit;

	&:hover,
	:focus {
		${"" /* transition: all 0.2s ease; */}
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
		transition: inherit;

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
		transition: inherit;

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
	transition: inherit;
`;
export const ContainerWrapper = styled.div`
	width: 90%;
	transition: inherit;
`;

export const LinkContainer = styled.span`
	width: fit-content;
	margin-top: 24px;
	border-radius: ${borderRadius.small};
	background-color: transparent;
	transition: inherit;
`;

export const LinkComponent = styled(Link)`
	display: flex;
	display: -webkit-flex; /* Safari */
	align-items: center;
	justify-content: center;
	width: 120px;
	height: auto;
	font-size: calc(${fontSize.body} + 2);
	font-weight: ${fontWeight.medium};
	text-decoration: none;
	cursor: pointer;
	color: ${({ theme }) => theme.ui.link.color};
	background-color: ${({ theme }) => theme.ui.link.background};
	border-radius: ${borderRadius.small};
	padding: calc(${spacing.small} - 2);
	transition: inherit;

	&:hover {
		color: ${({ theme }) => theme.ui.link.hover};
		background-color: ${({ theme }) => theme.ui.link.backgroundHover};
		transition: inherit;
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
	transition: inherit;
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
	transition: inherit;

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
	transition: inherit;
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
	transition: inherit;
`;

export const SidePanelLinkContainer = styled(LinkContainer)`
	display: flex;
	display: -webkit-flex; /* Safari */
	align-items: left;
	justify-content: flex-start;
	${"" /* refactor for togglable panel */}
	align-self: flex-start;
	width: ${({ isPanelOpen }) => (isPanelOpen ? `100%` : `fit-content`)};
	transition: inherit;
`;

export const SidePanelLinkComponent = styled(LinkComponent)`
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	height: auto;
	transition: inherit;
`;

export const SidePanelLinkIcon = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	width: 16px;
	height: 16px;
	margin: ${({ isPanelOpen }) => (!isPanelOpen ? `12px` : `0`)};
	transition: inherit;
`;

// Theme settings styled components
export const ThemeSettings = styled.div`
	display: flex;
	display: -webkit-flex; /* Safari */
	align-items: center;
	font-size: ${fontSize.body};
	margin-top: ${spacing.medium};
	transition: inherit;
`;

export const ThemeSettingsTitle = styled.span`
	display: block;
	flex: 1;
	color: ${({ theme }) => theme.ui.button.active};
	transition: inherit;
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
	transition: inherit;

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
		transition: inherit;
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
