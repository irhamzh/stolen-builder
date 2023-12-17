let colors = {
	white: '#FFFFFF',
	white1: '#F5F8FC',
	purple: '#4C56E3',
	font: {
		primary: '#DBC1A2',
		white: '#FFFFFF'
	},
	blue: {
		primary: '#4A57FF'
	},
	red: {
		danger: '#6C0000'
	},
	green: {
		primary: '#324634'
	},
	brown: {
		dark: '#2C2724',
		darker: '#191410',
		light: '#766256',
		lighter: '#946F10',
		lightest: '#E3C0AC',
		yellow: '#A57E29'
	}
};

colors = {
	...colors,
	font: {
		...colors.font
	}
};

export default colors;
