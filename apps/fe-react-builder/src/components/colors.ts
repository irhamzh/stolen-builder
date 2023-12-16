let colors = {
	white: '#FFFFFF',
	white1: '#F5F8FC',
	danger: '#D62929',
	purple: '#4C56E3',
	font: {
		primary: '#DBC1A2',
		white: '#FFFFFF'
	},
	blue: {
		primary: '#4A57FF'
	},
	brown: {
		dark: '#2C2724',
		darker: '#191410',
		light: '#766256',
		lighter: '#946F10',
		lightest: '#E3C0AC',
		yellow: '#A57E29'
	},
};

colors = {
	...colors,
	font: {
		...colors.font
	}
};

export default colors;
