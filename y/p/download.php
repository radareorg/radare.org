<div class="text_title">Binaries</div>
<hr size=1 />

<center width="100%">
<a href='../get/radare2-<?=$r2v?>.tar.xz'>
  <img border=0 style="width:64px;height:auto" src=/img/icons/tar.png />
</a>
<a href='http://trac.macports.org/browser/trunk/dports/devel/radare2'>
 <img alt=0.9.7 style="width:64px;height:auto" src=/img/icons/osx.png />
</a>
<a href='../get/pkg/radare2-w32-0.9.6.zip'>
  <img alt=0.9.5git border=0 style="width:64px;height:auto" src=/img/icons/w32.jpg />
</a>
<a href='https://play.google.com/store/apps/details?id=org.radare.installer'>
  <img alt="radare2 installer for android" style="width:64px;height:auto" border=0 src=/img/icons/and.jpg />
</a>
<a href='/get/radare2-0.9.5git-ios.tar.gz'>
  <img border=0 style="width:64px;height:auto" src=/img/icons/ios.png />
</a>
</center>
<br />
Other:
<a href='../w32/'> OldW32 (for bokken)</a>,
<a href="../get/pkg/android">Android (build)</a>
Debian (
  <a href="http://ftp.de.debian.org/debian/pool/main/r/radare2/">r2</a>,
  <a href="http://ftp.de.debian.org/debian/pool/main/r/radare2-bindings/">radare2-bindings</a>,
  <a href="http://ftp.de.debian.org/debian/pool/main/v/valabind/">valabind</a>
)
<br /><br />
<br /><br />
<a name="build"></a>
<div class="text_title">Building</div>
<hr size=1 />
The recommended way to build and install r2 from git:<br />
<pre>git clone git://github.com/radare/radare2
cd radare2
sys/install.sh</pre>

<br /><br />
<br /><br />

<a name="sources"></a>
<div class="text_title">Sources</div>
<hr size=1 />
<br />
<b>radare2+bindings</b> (<a href="https://github.com/radare/radare2/archive/master.tar.gz">github master snapshot</a>)
<pre title="mirror$ git clone http://radare.org/git/radare2">
wget -O radare2-git.tgz https://github.com/radare/radare2/archive/master.tar.gz
</pre>
<br />
<b>radare2</b> <a href='../get/radare2-<?=$r2v?>.tar.xz'>radare2-<?=$r2v?>.tar.xz</a> (<?=$r2d?>) (<a href='../get/changelog2-<?=$r2v?>-short'>release notes</a>)
<br />
<pre title="mirror$ git clone http://radare.org/git/radare2">
git clone git://github.com/radare/radare2
</pre>
<pre style="color:#c0c0c0">git clone http://radare.org/git/radare2 # mirror</pre>
<p style="margin-left:15px">
This package contains the sources of <i>radare2</i>. This is the second version of radare, and it's the current development front.
<br /><br />
It is composed by <i>libr</i>; a set of core libraries that implement the functionalities of the programs <i>radare2</i>, <i>rabin2</i>, <i>rahash2</i>, <i>rasm2</i>, and others..
<br /><br />
See <a href=?p=development>development</a> page to get the sources from the control version system.
</p>

<br />
<b>radare2-bindings</b> <a href='../get/radare2-bindings-<?=$r2v?>.tar.xz'>radare2-bindings-<?=$r2v?>.tar.xz</a> (<?=$r2d?>)
<br />
<pre>
cd radare2/radare2-bindings
</pre>
<p style="margin-left:15px">
Language bindings of <i>libr</i> for Python, Perl, Ruby, Go, Lua and Java.
It contains the files inside the radare2-bindings/ directory of the <i>radare2</i> repository.
<br /> <br />
The package depends on <a href="http://www.swig.org">swig</i>, <a href="http://live.gnome.org/Vala">vala</a> and <a href="http://radare.org/get/radare2-bindings-0.8.tar.gz">valabind</a>.
</p>
<br />
<b>r2-regressions</b>
<br />
<pre>
git clone git://github.com/radare/r2-regressions
</pre>
<p style="margin-left:15px">
Run 'make tests' in radare2 repo to retrieve this repository and run all the test cases.
</p>
<br />
<b>valabind</b> <a href='../get/valabind-<?=$vbv?>.tar.gz'>valabind-<?=$vbv?>.tar.gz</a> (<?=$vbd?>)
<br />
<pre>
git clone git://github.com/radare/valabind
</pre>
<p style="margin-left:15px">
This program converts <i>vapi</i> vala interface files into <i>swig</i> interfarces.
<br /><br />
Allow C and Vala libraries to be used from many scripting languages, like NodeJS, Python, Perl, LUA, Java, Go and others.
</p>
<br />
<b>ired</b> <a href='../get/ired-<?=$irv?>.tar.gz'>ired-<?=$irv?>.tar.gz</a> (<?=$ird?>)
<br />
<pre>
git clone git://github.com/radare/ired
</pre>
<p style="margin-left:15px">
Minimalistic implementation of <i>radare</i> in ~500LOC.
<i>vired</i> is the visual mode for ired implemented in a shellscript.
It also contains a wip binary diffing utility named <i>bdiff</i>
</p>

<br />
<b>radare</b> <a href='../get/radare-<?=$r1v?>.tar.gz'>radare-<?=$r1v?>.tar.gz</a> (<?=$r1d?>)
<br />
<pre>
git clone git://github.com/radare/radare
</pre>
<p style="margin-left:15px">
The old, monolithic and discontinued implementation of radare.
</p>

<br />
<b>radare2-extras</b>
<br />
<pre>
git clone http://github.com/radare/radare2-extras
</pre>
<p style="margin-left:15px">
(A bit unmaintained) plugins and programs for r2 not included in main repository.
</p>
