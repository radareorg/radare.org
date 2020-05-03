import { on } from "./util/power.js";

function togglePower(checked) {
		on();
}

function theme(event) {
	let theme = event.target.dataset.theme;
	document.body.classList = "theme-" + theme;
}

Object.assign(window, {
	togglePower,
  theme
});
