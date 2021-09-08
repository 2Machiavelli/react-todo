module.exports = {
	testEnvironment: "jsdom",
	verbose: true,
	collectCoverage: true,
	coverageThreshold: {
		global: {
			statement: 60
		}
	},
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js"
	],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	modulePaths: [
		"<rootDir>/src",
		"<rootDir>/node_modules"
	],
	transform: {
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
		".*\\.(js)$": "babel-jest",
		".*\\.(ts)$": "ts-jest",
		".*\\.(tsx)$": "ts-jest",
	},
	"globals": {
		"react-jest": {
			"tsConfigFile": "tsconfig.json"
		}
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$"
}