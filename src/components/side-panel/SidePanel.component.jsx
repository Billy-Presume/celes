import { useContext, useState, Fragment } from "react";
import { ThemeContext } from "../../../src/utils/providers/theme.provider";
import { styledComponents } from "../../styles/styled-components.styles";
import { sidePanelLinks } from "./sidePanelLinks";
import { sidePanelStyles } from "./sidePanelStyles";
import { Logo } from "../../assets/index.assets";
import { IoCaretForward, IoCaretBack, IoSearch } from "react-icons/io5";
import "./side-panel.scss";

const SidePanel = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const toggleTheme = () =>
		setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
	const {
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
	} = styledComponents;
	const {
		logoContainer,
		searchBar,
		searchButton,
		searchIcon,
		searchBarInput,
		linkContainer,
		linkComponent,
		themeSettings,
	} = sidePanelStyles;

	return (
		<StyledSidePanel isOpen={isSidePanelOpen}>
			<Fragment>
				<StyledSidePanelTogglerButton
					isOpen={isSidePanelOpen}
					onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
				>
					{isSidePanelOpen ? <IoCaretBack /> : <IoCaretForward />}
				</StyledSidePanelTogglerButton>
			</Fragment>
			<Wrapper>
				<LogoContainer style={isSidePanelOpen ? {} : logoContainer}>
					<Logo />
				</LogoContainer>
				<InnerWrapper>
					<SearchBar style={isSidePanelOpen ? {} : searchBar}>
						<button style={searchIcon.dimension}>
							<IoSearch
								color={
									theme === "light"
										? searchIcon.light.color
										: searchIcon.dark.color
								}
							/>
						</button>
						<input
							type="text"
							placeholder="Search"
							currenttheme={theme}
							style={isSidePanelOpen ? {} : searchBarInput}
						/>
					</SearchBar>
					<Separator className="separator" />
					<LinksContainerWrapper className="links-container-wrapper">
						{sidePanelLinks.map(({ id, name, link, icon, notification }) => (
							<LinkContainer
								isPanelOpen={isSidePanelOpen}
								key={id}
								styles={
									theme === "light" ? linkContainer.light : linkContainer.dark
								}
							>
								<LinkComponent
									to={link}
									style={isSidePanelOpen ? {} : linkComponent}
								>
									<LinkIcon className="link-icon">{icon}</LinkIcon>
									{isSidePanelOpen && (
										<Fragment>
											<LinkText>{name}</LinkText>
											{!!notification && (
												<LinkNotification>{notification}</LinkNotification>
											)}
										</Fragment>
									)}
								</LinkComponent>
							</LinkContainer>
						))}
					</LinksContainerWrapper>
					<Separator className="separator" />
					<LinksContainerWrapper className="links-container-wrapper">
						<ThemeSettings style={isSidePanelOpen ? {} : themeSettings}>
							{isSidePanelOpen && (
								<ThemeSettingsTitle className="theme-settings-title">
									{theme === "light" ? "Light Mode" : "Dark Mode"}
								</ThemeSettingsTitle>
							)}

							<ThemeSettingsTogglerButton
								isActive={theme === "dark"}
								onClick={toggleTheme}
								className="theme-settings-toggler-button"
							>
								<ThemeSettingsTogglerButtonThumb
									style={theme === "dark" ? { right: "1px" } : {}}
									className="theme-settings-toggler-button-thumb"
								/>
							</ThemeSettingsTogglerButton>
						</ThemeSettings>
					</LinksContainerWrapper>
				</InnerWrapper>
			</Wrapper>
		</StyledSidePanel>
	);
};

export default SidePanel;
