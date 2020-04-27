import { on } from "./util/power.js";

function togglePower(checked) {
		on();
}

Object.assign(window, {
	togglePower
});