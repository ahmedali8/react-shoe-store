import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Custom theme for app
const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#61c4e2',
			main: '#2193b0',
			dark: '#006580',
			whiteText: '#fff',
			blackText: '#000',
		},
		secondary: {
			light: '#ffd84a',
			main: '#faa700',
			dark: '#c17800',
			whiteText: '#fff',
			blackText: '#000',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;