(function () {
  'use strict';

  var version = "0.10.5",
    oss = {
      Win: { url: '/get/pkg/radare2-w32-'+version+'.zip', name: 'for Windows' },
      Mac: { url: '/get/pkg/radare2-'+version+'.pkg', name: 'for OSX' },
      iPhone: { url: 'http://cydia.radare.org', name: 'Cydia' },
      Android: { url: 'https://play.google.com/store/apps/details?id=org.radare2.installer', name: 'Android' }
    };

  document.addEventListener('DOMContentLoaded', function () {
    var ua = navigator.userAgent;
    Object.keys(oss).forEach(function (os) {
      if (ua.indexOf(os) !== -1) {
        var link = document.getElementById("button_download");
        if (link !== null) {
          link.innerHTML = "Download " + version + " " + oss[os].name;
          link.setAttribute("href", oss[os].url);
        }
      }
    });
  });

}());
