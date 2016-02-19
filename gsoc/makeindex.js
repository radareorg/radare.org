
var fs = require('fs')
if (process.argv.length >2) {
  var body = ''+fs.readFileSync(process.argv[2]);
} else {
  var body = fs.readFileSync('/dev/stdin').toString();
}
var lines = body.split("\n");
var titles = [];

for (var i in lines) {
	var line = lines[i];
	if (line.indexOf ("<h2>") != -1) {
		titles[titles.length] = line;
	}
}

function generateIndex() {
	var str = "<ul>";
	for (var i in titles) {
		var id = "title_"+i;
		var title = titles[i].replace (/h2/g,"b");
		str += "<li><a href='#"+id+"'>"+title+"</a>\n";
	}
	return str+"</ul>\n";
}

console.log("<a id='index'></a>");
var hit = 0;
for (var i in lines) {
	var line = lines[i];
	if (line.indexOf ("INDEX") != -1) {
		console.log (generateIndex());
	} else if (line.indexOf ("<h2>") != -1) {
		var id = "title_"+hit++;
		console.log ('<a id="'+id+'"></a><a href="#index">^</a> '+line);
	} else {
		console.log (line);
	}
}
