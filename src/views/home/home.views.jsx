import {
	Container,
	ContainerWrapper,
} from "../../styles/styled-components.styles";
import "./home.scss";

const HomePage = () => {
	return (
		<ContainerWrapper className="home-page">
			<Container className="container">
				<h1>Home Page</h1>
			</Container>
		</ContainerWrapper>
	);
};

export default HomePage;
