import { Route, Routes, Link, Outlet } from "react-router-dom";
import { views } from "../views/index.views";

export const AppRoutes = () => {
	const { HomePage, Asteroid, Comets, DwarfPlanets, Moons, Planets, Stars } =
		views;

	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route path="/Asteroid" element={<Asteroid />} />
			<Route path="/Comets" element={<Comets />} />
			<Route path="/DwarfPlanets" element={<DwarfPlanets />} />
			<Route path="/Moons" element={<Moons />} />
			<Route path="/Planets" element={<Planets />} />
			<Route path="/Stars" element={<Stars />} />
		</Routes>
	);
};
