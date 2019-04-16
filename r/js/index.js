
(function () {
  'use strict';

  var version = "3.4.1";
  var oss = {
    Win: { url: 'http://radare.mikelloc.com/get/'+version+'/radare2_installer-msvc_32-'+version+'.zip', name: 'for Windows' },
    Mac: { url: 'http://radare.mikelloc.com/get/'+version+'/radare2-'+version+'.pkg', name: 'for OSX' },
    iPhone: { url: 'http://cydia.radare.org', name: 'Cydia' },
    Android: { url: 'https://play.google.com/store/apps/details?id=org.radare.radare2installer', name: 'Android' }
  };
  if (typeof document.addEventListener === 'undefined') {
    /* internet explorer */
    return;
  }
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
