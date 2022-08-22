import { useContext } from "react";
import { ThemeContext } from "../../../utils/providers/theme.provider";
import {
	FooterContainer,
	Separator,
	ContainerWrapper,
	LinkContainer,
	LinkComponent,
	LinkText,
} from "../../../styles/styled-components.styles";
import { Links, SocialLinks } from "../../../routes/Links";

const Footer = () => {
	const { theme } = useContext(ThemeContext);
	const customStyles = {
		linkColor: {
			backgroundColor: `transparent`,
			color: `${theme === "light" ? "#D4E3FB" : "#FBECCF"}`,
		},
		separatorStyles: {
			height: `2px`,
			marginTop: 0,
			borderRadius: `6px`,
			backgroundColor: `${
				theme === "light" ? "#282828" : "rgba(18,17,77,.05)"
			}`,
		},
		pTagStyles: {
			color: `${theme === "light" ? "#777" : "#777"}`,
		},
	};

	return (
		<FooterContainer>
			<ContainerWrapper>
				{Links.map(({ id, name, link }) => (
					<LinkContainer key={id} style={{ marginTop: 0 }}>
						<LinkComponent to={link} style={customStyles.linkColor}>
							<LinkText>{name}</LinkText>
						</LinkComponent>
					</LinkContainer>
				))}
				<Separator style={customStyles.separatorStyles} />
				{SocialLinks.map(({ id, name, title, link }) => (
					<LinkContainer key={id} style={{ marginTop: 0 }}>
						<a
							href={link}
							target="_blank"
							rel="noreferrer noopener"
							title={title}
						>
							<LinkText>{name}</LinkText>
						</a>
					</LinkContainer>
				))}
				<Separator style={customStyles.separatorStyles} />
				{/* <p>
					<a href="mailto:billypresume@gmail.com">billypresume@gmail.com</a>
				</p> */}
				{/* need to create a helper function to generate current year */}
				<p style={customStyles.pTagStyles}>
					© 2022 Billy Présumé - All Rights Reserved.
				</p>
			</ContainerWrapper>
		</FooterContainer>
	);
};

export default Footer;
