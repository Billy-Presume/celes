import {
	Container,
	RegularCard,
	RegularCardTitle,
	RegularCardSecondaryTitle,
	RegularCardDescription,
	RegularCardButton,
} from "../../styles/styled-components.styles";

const RegularCardComponent = ({ imageURI, imageAlt, name, description }) => {
	return (
		<RegularCard>
			{/* <RegularCardTitle>{title}</RegularCardTitle> */}
			<img src={imageURI} alt={imageAlt} />

			<Container
				style={{
					display: "flex",
					flexFlow: "column",
					padding: "8px",
					justifyContent: "space-evenly",
				}}
			>
				<RegularCardSecondaryTitle>{name}</RegularCardSecondaryTitle>
				<RegularCardDescription>{description}</RegularCardDescription>
				<RegularCardButton>
					<button>Learn More</button>
				</RegularCardButton>
			</Container>
		</RegularCard>
	);
};

export default RegularCardComponent;
