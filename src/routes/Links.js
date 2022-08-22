import { IoRocket, IoEarth, IoEllipse } from "react-icons/io5";
import { WiDaySunny, WiMoonWaxingCrescent5, WiMeteor } from "react-icons/wi";
import { TbBlur } from "react-icons/tb";

export const Links = [
	{
		id: 1,
		name: "Home",
		link: "/",
		icon: <IoRocket />,
	},
	{
		id: 2,
		name: "Asteroid",
		link: "/Asteroid",
		icon: <IoEllipse />,
	},
	{
		id: 3,
		name: "Comets",
		link: "/Comets",
		icon: <WiMeteor />,
	},
	{
		id: 4,
		name: "Dwarf Planets",
		link: "/Dwarf Planets",
		icon: <TbBlur />,
	},
	{
		id: 5,
		name: "Moons",
		link: "/Moons",
		icon: <WiMoonWaxingCrescent5 />,
	},
	{
		id: 6,
		name: "Planets",
		link: "/Planets",
		icon: <IoEarth />,
	},
	{
		id: 7,
		name: "Stars",
		link: "/Stars",
		icon: <WiDaySunny />,
	},
];

export const SocialLinks = [
	{
		id: 1,
		name: "LinkedIn",
		title: "Visit my LinkedIn",
		link: "https://www.linkedin.com/in/billy-présumé/",
	},
	{
		id: 2,
		name: "Github",
		title: "Visit my Github",
		link: "https://github.com/Billy-Presume/",
	},
	{
		id: 3,
		name: "Instagram",
		title: "Visit my Instagram",
		link: "https://www.instagram.com/billy.codes_/",
	},
	{
		id: 4,
		name: "Portfolio",
		title: "See my Portfolio",
		link: "http://www.billypresume.com/",
	},
];
