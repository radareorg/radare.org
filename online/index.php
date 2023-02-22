<?php
header('Cross-Origin-Opener-Policy: same-origin');
header('Cross-Origin-Embedder-Policy: require-corp');
?>
<!DOCTYPE html>
<html>
  
<head>
  <meta charset="utf-8" />
    <title>radare2 online</title>
    <meta http-equiv="Cross-Origin-Embedder-Policy" content="require-corp" />
    <meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin" />
    <meta name="application-name" content="radare2" />
    <meta name="apple-mobile-web-app-title" content="radare2 online" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link rel="apple-touch-icon" href="r2-192.png" />
    <link rel="manifest" href="manifest.webmanifest" />
    <link rel="stylesheet" type="text/css" href="xterm.css"/>
    <style>
      body {
        background-color: black;
      }
      html, body, #root, .xterm-viewport, .xterm-screen {
        overflow-y: hidden !important;
        height: 99%;
      }
    </style>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </head>
  <body>
    <div id=root></div>
    <script src="main.js"></script>
  </body>

</html>
