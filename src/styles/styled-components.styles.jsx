import styled from "styled-components";
import { Link } from "react-router-dom";

import {
	fontSize,
	fontWeight,
	spacing,
	borderRadius,
} from "./infrastructure.styles";

const StyledSidePanel = styled.div`
	width: ${({ isOpen }) => (isOpen ? `300px ` : `fit-content`)};
	height: 100vh;
	padding: ${spacing.small};
	background-color: ${({ theme }) => theme.ui.sidepanel.background};

	@media screen and (max-width: 768px) {
		display: none;
	}

	position: relative;
`;

const StyledSidePanelTogglerButton = styled.button`
	display: flex;
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
`;

const LogoContainer = styled.div`
	width: 52px;
	height: 52px;
	margin-top: ${spacing.medium};
	margin-bottom: ${spacing.xlarge};
	cursor: pointer;

	img {
		max-width: 100%;
		height: auto;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: auto;
`;
const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
`;

const SearchBar = styled.div`
	display: flex;
	flex-direction: row;
	width: 95%;
	margin-bottom: ${spacing.small};
	border-radius: ${borderRadius.small};
	background: whitesmoke;


	:hover, :focus {
		transition: all 0.2s ease;
		background: #FFF;
	}

	button {
		display: flex;
		flex: 0.15;
		align-items: center;
		justify-content: center;
		padding: 0;
		border-radius: 6.7px 0 0 6.7px;
		background: #e3e3e3;

		:hover {
			${"" /* need to add theming for this and modify */}
			background: ${({ currenttheme, theme }) =>
				currenttheme === "light" ? `#282828` : `#1064EA`};
		}

		:active {
			${"" /* need to add theming for this and modify */}
			background: ${({ currenttheme, theme }) =>
				currenttheme === "light" ? `#f5ca7b` : `#A8C7F7`};

		}
	}


	input {
		flex: 1;
		padding: ${spacing.small} ${spacing.small} ${spacing.small} 3px;
		font-size: ${fontSize.body};
		font-weight: ${fontWeight.regular};
		letter-spacing: 0.6px;
		color: ${({ theme }) => theme.ui.text.primary};
  		outline: none;
		border: none;
		border-radius: ${borderRadius.small};
		background: transparent;
		placeholder-color: ${({ theme }) => theme.ui.text.secondary};

`;

const Separator = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.ui.sidepanel.separator};
	margin-top: ${spacing.large};
`;

const LinksContainerWrapper = styled.div`
	width: 90%;
`;

const LinkContainer = styled.div`
	flex: 1;
	display: flex;
	align-self: flex-start;
	width: ${({ isPanelOpen }) => (isPanelOpen ? `100%` : `fit-content`)};
	margin-top: 24px;
	border-radius: ${borderRadius.small};
	background: transparent;

	:hover {
		background: #f5ca7b;
		transition: 0.2s ease;
	}
`;

const LinkComponent = styled(Link)`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	font-size: ${fontSize.body};
	text-decoration: none;
	cursor: pointer;
	color: inherit;
	background: whitesmoke;
	border-radius: 8px;
	padding: calc(${spacing.small} - 2) 0;

	:hover {
		transition: all 0.3s ease-in-out;
	}
`;

const LinkIcon = styled.div`
	display: flex;
	width: 16px;
	height: 16px;
	margin-left: 12px;
`;

const LinkText = styled.span`
	display: block;
	flex: 1;
	font-size: calc(${fontSize.body} + 2);
	font-weight: ${fontWeight.medium};
	${"" /* need to refactory with shorthand */}
	margin-left: 8px;
	margin-top: 8px;
	margin-bottom: 8px;
`;

const LinkNotification = styled.div`
	font-size: ${fontSize.caption};
	margin-right: ${spacing.medium};
	padding: calc(${spacing.small} / 2) ${spacing.small};
	border-radius: calc(${borderRadius.small} / 2);
	background: #dc143c;
	color: #fff;
`;
const ThemeSettings = styled.div`
	display: flex;
	align-items: center;
	font-size: ${fontSize.body};
`;

const ThemeSettingsTitle = styled.span`
	display: block;
	flex: 1;
	margin: ${spacing.small};
	color: ${({ theme }) => theme.ui.button.active};
`;

const ThemeSettingsTogglerButton = styled.button`
	margin: 0 auto;
	width: 36px;
	height: 20px;
	border-radius: 20px;
	${"" /* needs to be refactored */}
	background: ${({ theme, isActive }) =>
		!isActive ? theme.ui.button.primary : theme.ui.button.primary};

	position: relative;
`;

const ThemeSettingsTogglerButtonThumb = styled.div`
	position: absolute;
	top: 1px;
	right: calc(100% - 18px - 1px);
	bottom: 1px;
	width: 18px;
	height: 18px;
	transition: 0.2s ease right;
	border-radius: 50%;
	background: ${({ theme }) => theme.ui.button.secondary};
`;

export const styledComponents = {
	StyledSidePanel,
	StyledSidePanelTogglerButton,
	LogoContainer,
	Wrapper,
	InnerWrapper,
	SearchBar,
	Separator,
	LinksContainerWrapper,
	LinkContainer,
	LinkComponent,
	LinkIcon,
	LinkText,
	LinkNotification,
	ThemeSettings,
	ThemeSettingsTitle,
	ThemeSettingsTogglerButton,
	ThemeSettingsTogglerButtonThumb,
};
