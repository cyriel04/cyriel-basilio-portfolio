"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#5ba3f5",
			light: "#7bb8ff",
			dark: "#4a8fd9",
		},
		background: {
			default: "#1a1d2e",
			paper: "#2d3348",
		},
		text: {
			primary: "#e8ecf4",
			secondary: "#b8c4dc",
			disabled: "#8a9bb8",
		},
	},
	typography: {
		fontFamily: '"Inter", "Poppins", system-ui, sans-serif',
		body1: {
			color: "#e8ecf4",
		},
		body2: {
			color: "#b8c4dc",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
			},
		},
	},
});

export default theme;
