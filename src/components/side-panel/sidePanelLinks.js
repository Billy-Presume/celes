import { IoRocket, IoEarth, IoEllipse } from "react-icons/io5";
import { WiDaySunny, WiMoonWaxingCrescent5, WiMeteor } from "react-icons/wi";
import { TbBlur } from "react-icons/tb";

export const sidePanelLinks = [
	{
		id: 1,
		name: "Home",
		link: "/",
		icon: <IoRocket />,
		notification: 0,
	},
	{
		id: 2,
		name: "Asteroid",
		link: "/Asteroid",
		icon: <IoEllipse />,
		notification: 0,
	},
	{
		id: 3,
		name: "Comets",
		link: "/Comets",
		icon: <WiMeteor />,
		notification: 0,
	},
	{
		id: 4,
		name: "DwarfPlanets",
		link: "/DwarfPlanets",
		icon: <TbBlur />,
		notification: 0,
	},
	{
		id: 5,
		name: "Moons",
		link: "/Moons",
		icon: <WiMoonWaxingCrescent5 />,
		notification: 0,
	},
	{
		id: 6,
		name: "Planets",
		link: "/Planets",
		icon: <IoEarth />,
		notification: 9,
	},
	{
		id: 7,
		name: "Stars",
		link: "/Stars",
		icon: <WiDaySunny />,
		notification: 1,
	},
];
