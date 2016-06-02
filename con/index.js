var oldStyle = null;
var oldLogoStyle = null;

function setStyle(o, s) {
  /* required for Safari */
  for (var a in s) {
    o.style[a] = s[a];
  }
}
function getStyle(o) {
  var r = {};
  /* required for Safari */
  for (var a in o.style) {
    r[a] = o.style[a];
  }
  return r;
}

function fade(element) {
  var op = 1;  // initial opacity
  var dir = 0.1;
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
  //  element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    if (dir > 0) {
      if (op < 0.2) {
        dir = -0.1;
      }
    } else {
      if (op > 1) {
        dir = 0.1;
      }
    }
    op -= op * dir;
  }, 50);
}

document.addEventListener("DOMContentLoaded", initializeStuff);

function initializeStuff() {
  var scrolldown = document.getElementById('scrolldown');
  var logoimg = document.getElementById('logoimg');
  var logolink = document.getElementById('logolink');
  var logo = document.getElementById('logo');
  var page = document.getElementById('page');
  var data = document.getElementById('data');
  var topPage = true;

  oldStyle = getStyle(logo);
  oldLogoStyle = getStyle(logoimg);

  fade (scrolldown);
  
  window.addEventListener("scroll", function onScroll() {
    var curpos = document.body.scrollTop;
  
    if (curpos < 400) {
      if (!topPage) {
        scrolldown.style.visibility = 'visible';
        logolink.href = '#main';
        setStyle(logo, oldStyle);
        setStyle(logoimg, oldLogoStyle);
        topPage = true;
      }
      data.style.visibility = 'hidden';
      page.style.top = 800 - (curpos * 2);
    } else {
      logolink.href = '#top';
      topPage = false;
      logoimg.style.height = '64px';
      data.style.visibility = 'visible';
      scrolldown.style.visibility = 'hidden';
      logoimg.style.width = '64px';
      logoimg.style.padding = '10px';
      logo.style.backgroundColor = '#303030';
      logo.style.position = 'fixed';
      logo.style.height = '84px';
      logo.style.width = '100%';
      logo.style.textAlign = 'left';
      logo.style.top = 0;
    }
  });
}
