var fs = require ("fs");
var md = require ("markdown").markdown;

function parseMarkdown(str) {
  var dialect = ["Gruber", "Maruku"];
  return md.toHTML (str); //, dialect);
}

String.prototype.regexIndexOf = function(regex, startpos) {
  var indexOf = this.substring(startpos || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

if (process.argv.length > 2) {
  function findToken(data, idx) {
    function findCloseToken(data, idx, name) {
      var tag = "<{/" + name + "}>";
      var e = data.indexOf (tag, idx + 2);
      if (e == -1) return; // no more tokens to process
      var token = data.substring (idx, e);
      var body = data.substring (idx + 1, e); //substring (idx + 2).substring (0, e - 2);
      return {
        body: body,
        end: e + tag.length
      };
    }
    var b = data.regexIndexOf (/\<\{(.*)\}\>/, idx);
    if (b < 0) return; // no more tokens to process
    var e = data.indexOf ('}>', b + 2);
    if (e < 0) return;
    var token = data.substring (b + 2, e);
    var tokend = findCloseToken (data, e + 1, token);
    if (!tokend || !tokend.body) {
      console.error ("NO CLOSING TAG '" + token + "'");
      process.exit(1);
    }
    return {
      name: token,
      begin: b,
      end: tokend.end,
      body: tokend.body
    };
  }
  for (var i = 2; i < process.argv.length; i++) {
    var file = process.argv[2];
    var data = fs.readFileSync (file).toString ();
    var newdata = "";
    var idx = 0;
    /*
    ....[....]....[/....]....[...]....[/....]....
        ^_______________^    ^______________^
        b    |body|     e    b   |body|     e

    idx = 0
    1: {b:4,e:20,body:"..."}
       data += [idx..b]
       data += processTag(body)
    idx = .e
    2: {b:}
    */
    for (; idx < data.length; ) {
      var tok = findToken (data, idx);
      if (tok) {
        newdata += data.substring (idx, tok.begin);
        switch (tok.name) {
          case 'comment':
            /* do nothing here */
            break;
          case 'include':
            newdata += fs.readFileSync (tok.body).toString ();
            //console.log ("INCLUDE " + tok.body);
            break;
          case 'markdown':
            newdata += parseMarkdown (tok.body);
            //console.log ("MARKDOWN (((" + tok.body + ")))");
            break;
        }
        idx = tok.end;
      } else {
        // append remaining data
        newdata += data.substring (idx);
        break;
      }
    }
    var newfile = file.replace (/\.tmpl/, ".html");
    if (file == newfile) {
      console.error ("Cant process this file");
    } else {
      fs.writeFileSync (newfile, newdata);
    }
  }
} else {
  console.error ("Feed me with some files plz");
}
