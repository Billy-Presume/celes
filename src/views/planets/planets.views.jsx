import {
	ContainerWrapper,
	SpecialContainer,
} from "../../styles/styled-components.styles";
import RegularCardComponent from "../../components/card/regular-card.component";
import "./planets.scss";

const Planets = () => {
	const testData = [
		{
			id: 1,
			name: "Mercury",
			imageURI: require("../../assets/planets/mercury.jpg"),
			description:
				"Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.",
		},
		{
			id: 2,
			name: "Venus",
			imageURI: require("../../assets/planets/venus.jpg"),
			description:
				"Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.",
		},
		{
			id: 3,
			name: "Earth",
			imageURI: require("../../assets/planets/earth.jpg"),
			description:
				"Earth is the third planet from the Sun and the only object in the Universe known to harbor life. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.",
		},
		{
			id: 4,
			name: "Mars",
			imageURI: require("../../assets/planets/mars.jpg"),
			description:
				"​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.",
		},
		{
			id: 5,
			name: "Jupiter",
			imageURI: require("../../assets/planets/jupiter.jpg"),
			description:
				"Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
		},
		{
			id: 6,
			name: "Saturn",
			imageURI: require("../../assets/planets/saturn.jpg"),
			description:
				"Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's. ",
		},
		{
			id: 7,
			name: "Uranus",
			imageURI: require("../../assets/planets/uranus.jpg"),
			description:
				"Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.",
		},
		{
			id: 8,
			name: "Neptune",
			imageURI: require("../../assets/planets/neptune.jpg"),
			description:
				"It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​",
		},
		{
			id: 9,
			name: "Pluto",
			imageURI: require("../../assets/planets/pluto.jpg"),
			description:
				"Pluto is the ninth planet from the Sun. Pluto's entire moon system is believed to have formed by a collision between the dwarf planet and another Kuiper Belt Object early in the history of the solar system. The smashup flung material that coalesced into the family of satellites observed around Pluto. The first known pictures of the system were taken by the Lowell Observatory in New York City in the late 19th century.",
		},
	];

	return (
		<ContainerWrapper className="planets">
			<h1>Planets</h1>
			<SpecialContainer className="planet-container">
				{testData.map(({ id, imageURI, name, description }) => (
					<RegularCardComponent
						key={id}
						imageURI={imageURI}
						imageAlt={name}
						name={name}
						description={description}
					/>
				))}
			</SpecialContainer>
		</ContainerWrapper>
	);
};

export default Planets;
