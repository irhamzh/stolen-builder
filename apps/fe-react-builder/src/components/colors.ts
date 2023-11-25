let colors = {
  black: '#252525',
  grey: '#858585',
  lightGrey: '#CECECE',
  white: '#FFFFFF',
  white1: '#F5F8FC',
  danger: '#D62929',
  purple: '#4C56E3',
  primary: {
    main: '#185A9D',
    dark: '#102D4F',
    light: '#ADCEEA',
    lighter: '#EAF2F9',
    green: {
      100: '#F3FCFC',
      500: '#25A2A1',
    },
  },
  secondary: {
    main: '#43CEA2',
    dark: '#054609',
    light: '#C9E8E7',
    lighter: '#C9E8E7',
  },
  oranges: {
    primary: '#FF701F',
    background: 'rgba(255, 112, 31, 0.08)',
    light: '#FFFCDE',
  },
  success: {
    main: '#25A2A1',
  },
};

colors = {
  ...colors,
  primary: {
    ...colors.primary,
  },
  secondary: {
    ...colors.secondary,
  },
};

export default colors;
