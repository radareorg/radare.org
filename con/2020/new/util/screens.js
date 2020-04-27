import conference from "../content/conference.js";
import cfp from "../content/cfp.js";
import competitions from "../content/competitions.js";
import schedule from "../content/schedule.js";
import { type, clear, input, title, subtitle, options} from "./io.js";
import pause from "./pause.js";
import alert from "./alert.js";

/** Boot screen */
async function boot() {
	clear();
	await type([
		"Welcome to Radare CON 2020",
		" ",
		"Loading........................",
		"...",
		".",
	]);
	await alert("[X] CORONAVIRUS DETECTED! BOOTING SAFE MODE...");
	await pause();
	return main();
}

async function main() {
	clear()
	title("R2CON 2020");
	println(conference);
	println(competitions);
	println(cfp);
	println(schedule);
}

function println(r2module) {
	subtitle(r2module.title);
	input(r2module.content);
	options(r2module.options);
}

function div(container, ...cls) {
	let el = document.createElement("div");
	el.classList.add(...cls);

	container.appendChild(el);
	return el;
}

export { boot, main, div };
