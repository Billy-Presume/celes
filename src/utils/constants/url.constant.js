// URL to fetch the bodies data from
export const URL =
	"https://api.le-systeme-solaire.net/rest/bodies/?exclude=id,name,alternativeName,rel,meanRadius,flattening,mainAnomaly,longAscNode&order=bodyType";

// sample data returned from the API call for regular card
const smapleForRegularCard = {
	englishName: "Mercury",
	isPlanet: true,
	mass: { massValue: 3.3, massExponent: 23 }, // kg
	gravity: 0.28, // m/s^-2
	escape: 510.0, // m/s-1
	avgTemp: 168, // K
	discoveredBy: "Johannes Kepler",
	discoveryDate: "1610",
	bodyType: "Planet",
};

// sample object returned from the API call for expanded card
const smapleForExpendedCard = {
	englishName: "1 Ceres",
	isPlanet: false,
	moons: null,
	semimajorAxis: 414010000,
	perihelion: 382620000,
	aphelion: 445410000,
	eccentricity: 0.07582,
	inclination: 10.593,
	mass: { massValue: 9.393, massExponent: 20 },
	vol: { volValue: 4.21, volExponent: 9 },
	density: 2.161,
	gravity: 0.28,
	escape: 510.0,
	equaRadius: 487.0,
	polarRadius: 455.0,
	dimension: "",
	sideralOrbit: 1681.63,
	sideralRotation: 9.07,
	aroundPlanet: null,
	discoveredBy: "Giuseppe Piazzi",
	discoveryDate: "01/01/1801",
	axialTilt: 3,
	avgTemp: 168,
	argPeriapsis: 73.59769,
	bodyType: "Asteroid",
};
