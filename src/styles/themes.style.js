import { colors } from "./infrastructure.style";

export const lightTheme = {
	body: {
		...colors.body.light,
	},
	ui: {
		sidepanel: {
			...colors.ui.sidepanel.light,
		},
		card: {
			...colors.ui.card.light,
		},
		button: {
			...colors.ui.button.light,
		},
		text: {
			...colors.ui.text.light,
		},
		icon: {
			...colors.ui.icon.light,
		},
	},
};
export const darkTheme = {
	body: {
		...colors.body.dark,
	},
	ui: {
		sidepanel: {
			...colors.ui.sidepanel.dark,
		},
		card: {
			...colors.ui.card.dark,
		},
		button: {
			...colors.ui.button.dark,
		},
		text: {
			...colors.ui.text.dark,
		},
		icon: {
			...colors.ui.icon.dark,
		},
	},
};
