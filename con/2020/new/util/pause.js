/** Just a not so pretty way to make it easier to use setTimeout() with async/await */
function pause(s = 1) {
	return new Promise(resolve => setTimeout(resolve, 1000 * Number(s)));
}

export default pause;
