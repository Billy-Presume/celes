import { useContext, useState, Fragment } from "react";
import { ThemeContext } from "../../../src/utils/providers/theme.provider";
import {
	SidePanel,
	SidePanelTogglerButton,
	LogoContainer,
	SidePanelInnerWrapper,
	SidePanelSearchBar,
	Separator,
	ContainerWrapper,
	SidePanelLinkContainer,
	SidePanelLinkComponent,
	SidePanelLinkIcon,
	ThemeSettings,
	ThemeSettingsTitle,
	ThemeSettingsTogglerButton,
	ThemeSettingsTogglerButtonThumb,
} from "../../styles/styled-components.styles";
import { Links } from "../../routes/Links";
import { Logo } from "../../assets/index.assets";
import { IoCaretForward, IoCaretBack, IoSearch } from "react-icons/io5";

const SidePanelComponent = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const toggleTheme = () =>
		setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

	return (
		<SidePanel isOpen={isSidePanelOpen}>
			{/* <Fragment>
				<SidePanelTogglerButton
					isOpen={isSidePanelOpen}
					onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
				>
					{isSidePanelOpen ? <IoCaretForward /> : <IoCaretBack />}
				</SidePanelTogglerButton>
			</Fragment> */}

			<LogoContainer>
				<Logo />
			</LogoContainer>
			<SidePanelInnerWrapper>
				<SidePanelSearchBar isClosed={!isSidePanelOpen}>
					<button>
						<IoSearch size={24} />
					</button>
					<input type="text" placeholder="Search" />
				</SidePanelSearchBar>
				<Separator className="separator" />
				<ContainerWrapper>
					{Links.map(({ id, name, link, icon }) => (
						<SidePanelLinkContainer isPanelOpen={isSidePanelOpen} key={id}>
							<SidePanelLinkComponent to={link}>
								<SidePanelLinkIcon>{icon}</SidePanelLinkIcon>
								{isSidePanelOpen && <Fragment>{name}</Fragment>}
							</SidePanelLinkComponent>
						</SidePanelLinkContainer>
					))}
				</ContainerWrapper>
				<Separator className="separator" />
				<ContainerWrapper className="links-container-wrapper">
					<ThemeSettings>
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
				</ContainerWrapper>
			</SidePanelInnerWrapper>
		</SidePanel>
	);
};

export default SidePanelComponent;
