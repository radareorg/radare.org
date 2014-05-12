<!DOCTYPE html>
<?php
require("config.php");

$page=@$_GET["p"];

if (!ctype_alnum($page)) {
	$page = "about";
}

function show_contents($page) {
	global $r2v, $r2d;
	global $r1v, $r1d;
	global $irv, $ird;
	global $vbv, $vbd;
	if (file_exists("p/$page.md")) {
		require("Parsedown.php");
		$Parsedown = new Parsedown();
		echo $Parsedown->text(file_get_contents("p/$page.md"));
	} else if (file_exists("p/$page.php")) {
		include("p/$page.php");
	} else {
		include("p/about.php");
	}
}

?>
<html>
<head>
    <meta name="description" content="radare, the reverse engineering framework">
    <meta name="keywords" content="arm64, 64 bit hexadecimal editor, disassembler, debugger, linux debugger, reverse engineering, code analysis, bindiffing, binary diffing, windows debugger, iphone debugger, mips, x86, arm, powerpc, graph analysis, hacking, malware analysis, virus analysis">
    <meta http-equiv="X-UA-Compatible" content="FF=1; chrome=1; IE=edge"/>
    <title>radare</title>
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel=Stylesheet href="style.css" type="text/css" />
	<meta name="viewport" content="width=320px, initial-scale=1, user-scalable=true" />

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-17833959-2']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

function showMenuBar() {
	var mb = document.getElementById("menubutton");
	mb.innerHTML="&lt;";
	var mb = document.getElementById("menubar");
	mb.style.display="inline";
	var tb = document.getElementById("textbox");
	tb.style.width="100%";
}

function hideMenuBar() {
	var mb = document.getElementById("menubutton");
	mb.innerHTML="&gt;";
	var mb = document.getElementById("menubar");
	mb.style.display="none";
	var tb = document.getElementById("textbox");
	tb.style.width="100%";
}

function menuIsShown() {
	return (document.getElementById("menubar").style.display !== "none");
}

function toggleMenuBar() {
	if (menuIsShown()) {
		hideMenuBar();
	} else {
		showMenuBar();
	}
}

window.onresize = window.onload = function() {
	if (window.innerWidth < 800) {
		document.getElementById("menubutton").style.visibility="visible";
        document.getElementById("box").style.width="100%";
    } else {
        showMenuBar();
		document.getElementById("menubutton").style.visibility="hidden";
        document.getElementById("box").style.width="850px";
    }
}
</script>
</head>
<body>
<!--
<a href="https://github.com/radare/radare2"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>
-->
<center>

<table id="box" class="box" style="width:850px">
    <tr><td colspan=2>&nbsp;</td></tr>
    <tr>
        <td rowspan="2" class="logo" >
            <div id="menubar" style="width:125px">
                &nbsp;&nbsp;<a href="?"><img style="border:0;height:36px" alt="r2 logo" src="../img/rlogo.png"></a>
                <br /><br /> <br />

                &nbsp;<a class=menutitle href='?'>Project</a><br />
                <hr />
                <div class=menubar>
                    <a href="/rsoc">rsoc 2014</a><br />
<?
$ps = array("crowdfunding", "documentation", "development", "comparison", "bugtracker", "examples", "features", "talks", "gui");
foreach($ps as $a) {
    if ($page == $a)
        print "<a style=\"color:black\">$a</a><br />\n";
    else
        print "<a href=\"?p=$a\">$a</a><br />\n";
}
?>
                </div>
                <br /> <br />
                &nbsp;<a class=menutitle href='?p=download'>Download</a>
                <hr />
                <div class=menubar>
                    <table class=logo style="width:120px;border-collapse:collapse">
                        <tr>
                            <td><a href="../get/valabind-<?=$vbv?>.tar.gz">valabind</a></td> <td><?=$vbv?></td>
                        </tr>
                        <tr style=background-color:yellow>
                            <td><a href="../get/radare2-<?=$r2v?>.tar.xz">radare2</a></td> <td><?=$r2v?></td>
                        </tr>
                        <tr>
                            <td><a href="../get/radare2-bindings-<?=$r2v?>.tar.xz">r2-bind</a></td> <td><?=$r2v?></td>
                        </tr>
                        <tr>
                            <td><a href="../get/radare-<?=$r1v?>.tar.gz">radare</a></td> <td><?=$r1v?></td>
                        </tr>
                            <tr><td><a href="../get/sdb-<?=$sdv?>.tar.gz">sdb</a> </td> <td><?=$sdv?></td>
                        </tr>
                            <tr><td><a href="../get/ired-<?=$irv?>.tar.gz">ired</a> </td> <td><?=$irv?></td>
                        </tr>
                        <tr>
                            <td colspan=2><a href="?p=download#binaries">binaries</a> </td>
                        </tr>
                        <tr>
                        <td colspan=2><a href="?p=download#sources">sources</a> </td>
                        </tr>
                    </table>
                </div>
                <br/> <br />
                &nbsp;<a class="menutitle" href="?p=contact">Contact</a>
                <hr  />
                <div class=menubar>
                    <a href="nospam.php?for=list" target=_blank>mailing list</a> <br />
                    <a href="http://lists.nopcode.org/pipermail/radare-nopcode.org/" target=_blank>archives</a> <br />
                    <a href="?p=development">donate</a> <br />
                    <a target=_blank href="http://twitter.com/radareorg">twitter</a> <br />
                    <a href="nospam.php?for=mail" target=_blank>email</a> <br />
                    <a href="http://radare.today" target=_blank>blog</a> <br />
                    <a href="irc://irc.freenode.net/radare">irc</a> <br />
                </div>
            </div>
        </td>
        <td rowspan=2>&nbsp;</td>
        <td class="title" valign="top" style="height:54px; text-align:center">
            <a href="javascript:toggleMenuBar()">
                <div class="menubutton" id="menubutton" style="visibility:hidden">&lt;</div>
            </a>
            radare, <span style='color:#787a87'>the reverse engineering framework</span>
            <br/>
        </td>
    </tr>
    <tr>
        <td id="textbox" class="textbox" valign=top style="width=100%">
<?php
show_contents($page);
?>
            <br />
        </td>
    </tr>
</table>
<br />
<!--
<div style="background-color:white;width:500px;
       -webkit-border-radius:10px;
        -moz-border-radius: 10px;
        border-radius: 10px;">
<br />
<iframe data-aa='472' src='//ad.a-ads.com/472' scrolling='no' style='width:120px; height:60px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>
<iframe src='http://anonymousads.com/a/15gRDoa9wHYTN4k8U1EPPxTQ7bXcXWMVWP' scrolling='no' style='width:468px; height:60px; border:0px; padding:5pt'></iframe>
<a style="font-size:12px" href='http://anonymousads.com?partner=15gRDoa9wHYTN4k8U1EPPxTQ7bXcXWMVWP'>Advertise with Anonymous Ads</a>
<br />
<br />
</div>
-->
</center>

</body>
</html>
