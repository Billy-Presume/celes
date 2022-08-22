import {
	RegularCard,
	RegularCardTitle,
	RegularCardSecondaryTitle,
	RegularCardDescription,
	RegularCardButton,
} from "../../styles/styled-components.styles";

const RegularCardComponent = ({
	title,
	imageURI,
	imageAlt,
	type,
	description,
}) => {
	return (
		<RegularCard>
			<RegularCardTitle>{title}</RegularCardTitle>
			<img src={imageURI} alt={imageAlt} />
			<RegularCardSecondaryTitle>{type}</RegularCardSecondaryTitle>
			<RegularCardDescription>{description}</RegularCardDescription>
			<RegularCardButton>
				<button>Learn More</button>
			</RegularCardButton>
		</RegularCard>
	);
};

export default RegularCardComponent;
