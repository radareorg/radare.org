import pause from "./pause.js";

function getChar(char) {
	let result;
	if (typeof char === "string") {
		if (char === "\n") {
			result = document.createElement("br");
		} else if (char === "\t") {
			let tab = document.createElement("span");
			tab.innerHTML = "&nbsp;&nbsp;&nbsp;";
			result = tab;
		} else if (char === " ") {
			let space = document.createElement("span");
			space.innerHTML = "&nbsp;";
			space.classList.add("char");
			result = space;
		} else {
			let span = document.createElement("span");
			span.classList.add("char");
			span.textContent = char;
			result = span;
		}
	}
	return result;
}

/** Types the given text on the screen */
async function type(
	text,
	{
		wait = 50,
		initialWait = 1000,
		finalWait = 500,
		useContainer = false
	} = {},
	container = document.querySelector(".terminal")
) {
	let typerDiv = useContainer ? container : document.createElement("div");
	typerDiv.classList.add("typer", "active");
	if (!useContainer) {
		container.appendChild(typerDiv);
	}

	if (initialWait) {
		await pause(initialWait / 1000);
	}

	if (Array.isArray(text)) {
		text = text.join("\n");
	}
	let queue = text.split("");

	while (queue.length) {
		let char = queue.shift();
		let element = getChar(char);
		if (element) {
			typerDiv.appendChild(element);
		}
		scroll(container);
		await pause(wait / 1000);
	}

	await pause(finalWait / 1000);
	typerDiv.classList.remove("active");
	return;
}


function scroll(el = document.querySelector(".terminal")) {
	el.scrollTop = el.scrollHeight;
}

function clear() {
	let terminal = document.querySelector(".terminal");
	terminal.innerHTML = "";
}

function title(text) {
	let terminal = document.querySelector(".terminal");
	terminal.innerHTML += "<h1>" + text + "</h1>";
}

function subtitle(text) {
	let terminal = document.querySelector(".terminal");
	terminal.innerHTML += "<h2>" + text + "</h2>";
}

function input(text) {
	let terminal = document.querySelector(".terminal");
	terminal.innerHTML += text;
}

function options(options) {
	let terminal = document.querySelector(".terminal");
	terminal.innerHTML += "<ul>";
	options.forEach(element => terminal.innerHTML += "<li>"+element+"</li>");
	terminal.innerHTML += "</ul>";
}


export { type, scroll, input, clear, title, subtitle, options};
