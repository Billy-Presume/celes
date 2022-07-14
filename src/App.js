import { useState, Fragment } from "react";
import { ThemeContext } from "./utils/providers/theme.provider";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-styles.styles";
import { lightTheme, darkTheme } from "./styles/themes.styles";
import { AppRoutes } from "./routes/appRoutes";
import Layout from "./components/layout/layout.component";
// import { fetchData } from "./services/api";
// import { URL } from "./utils/constants/url.constants";

const App = () => {
	const [theme, setTheme] = useState("light");
	const currentTheme = theme === "light" ? lightTheme : darkTheme;
	// const [isLoading, setIsLoading] = useState(false);
	// const [isError, setIsError] = useState(false);

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyle />
				<Fragment>
					<Layout>
						<AppRoutes />
					</Layout>
				</Fragment>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default App;

// const [bodies, setBodies] = useState({});

// // use useEffect to fetch the data from the API
// useEffect(() => {
//   fetchData(URL).then((bodies) => setBodies(bodies["bodies"]));
//   console.log(bodies[0]);
// }, []);
