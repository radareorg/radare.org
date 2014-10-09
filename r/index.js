var version = "0.9.7";

function getOS() {
	var OSName = "Source";
	var av = navigator.appVersion;
	if (av.indexOf("iPhone")!=-1) OSName="Cydia";
	else if (av.indexOf("Android")!=-1) OSName="Android";
	else if (av.indexOf("Win")!=-1) OSName="for Windows";
	else if (av.indexOf("Mac")!=-1) OSName="for OS X";
	else if (av.indexOf("X11")!=-1) OSName="Source";
	else if (av.indexOf("Linux")!=-1) OSName="Source";
	return OSName;
}

var docLoaded = setInterval(function () {
	if (document.readyState === "complete") {
		var OS = getOS ();
		clearInterval (docLoaded);
		if (window.onmyload) {
			window.onmyload();
		}
		var b = document.getElementById ("button_download");
		b.innerHTML = "Download "+version+" "+OS;
		b.onclick = function (x) {
			var url = 'down.html';
			switch (OS.substring (4)) {
			case 'Windows':
				url = '/get/pkg/radare2-w32-0.9.8git.zip';
				break;
			case 'OS X':
				url = '/get/pkg/radare2-0.9.8git.pkg';
				break;
			case 'Cydia':
				url = 'http://cydia.radare.org';
				break;
			case 'Android':
				url = 'https://play.google.com/store/apps/details?id=org.radare.installer';
				break;
			}
			b.setAttribute("href", url);
		};
	}
}, 100);
