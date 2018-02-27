# Microtasks

It is strongly recommended that students who want to apply to the radare2 GSoC/RSoC projects will perform a small tasks, to get the idea of students’ capabilities and make them familiar with radare2 codebase, structure and development process. Note, some tasks mentioned here are "meta" issues, which are quite big lists of smaller tasks. Of course finishing such big issue is impossible in a short period of time, so this means the student can take a few list items from those bugs as their microtask. Here is the list of such “qualification” tasks:

### INDEX

## Analysis

The current code analysis have many little caveats and issues which may be good to be addressed, fixing them and writing more tests is very important to stabilize and enhance it.

[See these issues](https://github.com/radare/radare2/issues?q=is%3Aissue+is%3Aopen+label%3Aanal)

### Heap analysis [#5390](https://github.com/radare/radare2/issues/5390)
Currently radare2 has support for heap exploration and analysis, but the feature is still basic and can be improved. Moreover, other allocators can be added, but this should be done after a proper refactoring, because heap analysis shouldn't depend on the debugger backend, and we may be able to use different heap tools.

So the most important part of supporting heap analysis is to create a new subset of commands, and put all that stuff under data analysis or debugger-wide features, not in the target debugger backend. Moreover many things are done in C while they can be solved with format strings.

### Vtables analysis, RTTI and SEH
Modern object oriented languages such as C++, ObjectiveC, Swift, D, etc are usually implement
virtual tables for their methods, classes and other entities relationshop. For better understanding
such programs it is vital to see this relationship loaded as a types and indicated in disassembly
view. See [#6851](https://github.com/radare/radare2/issues/6851) to check other tools and scripts
available for this task, articles about vtables structure and requirements for radare2.

## META - Graphs [#6967](https://github.com/radare/radare2/issues/6967)

### Better unicode support in graphs

Currently not always Unicode characters shown in the canvas (which is used for drawing graph nodes)

See [META Unicode support](https://github.com/radare/radare2/issues/2032)

### Binary diffing (radiff2) [#6971](https://github.com/radare/radare2/issues/6971)

Bindiffing has been a known feature of radiff2, but it has been unmaintained for years.

[Radiff2 related issues](https://github.com/radare/radare2/labels/radiff2)

### Smarter lines in graphs

Avoid overlapping edges, currently the ascii art graphs does not overlap nodes, but some edge lines are passing thru.

![Nodes overlapping edges](https://cloud.githubusercontent.com/assets/10424605/19608188/36215ed8-97d8-11e6-8a7f-df3aef804454.png)
![Edges overlapping edges](https://cloud.githubusercontent.com/assets/10424605/19608195/3b7f4e1c-97d8-11e6-81ed-a6b515b1c7d9.png)

### Node groups

Being able to select multiple nodes in the graph and group them to colorize them and specify a name for them. [#2952](https://github.com/radare/radare2/issues/2952)

### Save/restore graph state

This task is necessary when node grouping or layout have changed, this information can be stored in projects by just reusing the `agn` and `age` commands to recreate a graph and feeding the body of the nodes in base64.

Same goes for the visual panels mode. we need a way to save/restore the panels.

## Diassemblers and assemblers
### WebAssembly analysis
Radare2 already supports disassembling [WebAssembly](http://webassembly.org) but analysis is barely implemented. See [wasm](https://github.com/athre0z/wasm) and [wasmdec](https://github.com/wwwg/wasmdec) as a good examples. Implementing `pdc` (pseudocode) on top of this analysis is also a good idea.

### Java
Java support has landed in radare2 a long time ago. At the same time it is largely unused, full of bugs and poorly written. Some code (e.g. [anal_extra](https://github.com/radare/radare2/blob/master/libr/anal/anal_ex.c)) doesn't really fit its place and can be moved/refactored on top of the modern radare2 architecture design.

### Lua bytecode

Radare2 has support for LUA bytecode disassembly and analysis but lack the proper testing thus can
be easily broken. We need to add the proper tests for the architecture in [radare2-regressions](https://github.com/radare/radare2-regressions) suite and fix the bugs if they appear.

### Python bytecode
Currently there is a support already for disassembling Python bytecode. But like with LUA the
architecture is largely untested and can be easily broken. We need to add the proper tests and see
if there are bugs (and fix them)
See [universal python disassembler](https://github.com/evanw/unwind) for example and [Issue #4228](https://github.com/radare/radare2/issues/4228) for current state of it.

![image](https://image.slidesharecdn.com/tailbytespygotham-140819135745-phpapp02/95/tco-in-python-via-bytecode-manipulation-7-638.jpg)

## META - RAGG2 [#6949](https://github.com/radare/radare2/issues/6949)

Ragg2 - simplistic [compiler for C-like syntax](http://radare.today/posts/payloads-in-c/) into tiny binaries for x86-32/64 and arm. Programs generated by ragg2 are relocatable and can be injected in a running process or on-disk binary file. Fixing  ragg2 issues will help a lot for creating small payloads for exploiting tasks.

## Refactoring
### Sdbtization
Radare2 is being slowly refactored to store all the information about session, user metadata and state of debugger in the [SDB](https://github.com/radare/sdb) - simple key-value database. This work still ungoing. So helping us with a few sdbtization bugs will introduce you into the radare2 codebase structure.

We have decided to not sdbize everything and use RBTree and RDict when necessary. Also, some places in r2 (like the version bin parser) is using Sdb in a very poor way.

[See issues](https://github.com/radare/radare2/issues?q=is%3Aopen+is%3Aissue+label%3Asdbtization)

### ESILization
Radare2 has its own intermediate language - ESIL, but not yet support it for all architectures. So the task is to add ESIL support to any architecture, which doesn't has it yet.
[See issues](https://github.com/radare/radare2/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Aesil) for the related bugs.

* Implement ARC ESIL emulation
* Support packed registers (mmx and such)
* Support floating point operations
* Implement memory access callback apis in unicorn and make the unicorn plugin for r2 work

## Unicode (UTF-8) support everywhere

This task requires implementing proper support for multibyte characters in RConsCanvas in order to render UTF-8 characters in the graphs for having better ascii-art boxes and lines.

- [Support for the various languages - #2032](https://github.com/radare/radare2/issues/2032)
- [Option to enable view of unicode strings - #4997](https://github.com/radare/radare2/issues/4997)

![image](https://cloud.githubusercontent.com/assets/1408600/23970139/2728377c-09c9-11e7-8653-a167205ac153.png)
![image](https://cloud.githubusercontent.com/assets/1408600/23970169/3c1ce88a-09c9-11e7-9dc7-0da71d9bc1c6.png)

## File formats
### META - Portable Executable format [#921](https://github.com/radare/radare2/issues/921)
There are lot of missing features in the current PE file parser as you can see in this META Issue.

![](https://image.slidesharecdn.com/44con2013workshop-exploringtheportableexecutableformat-130916113833-phpapp01/95/exploring-the-portable-executable-format-18-638.jpg)

this requires a refactor of rbin that didnt happened yet. but also, we want to have .NET parser (already commited but not used) for the PE, and rbing back the MSIL disassembler.

### Proper PGDM (Windows kernel minidump) support
There is basic MDMP file format support in radare2. But there is still no support for pagedumps
(kernel dumps). It should be properly parsed, added ability to automatically load PDB symbols,
improved autoanalysis and entry-point searching. Also the support of MDMP files can be improved

![image](http://xvilka.me/ms_bsod_2.jpg)

### PCAP loading support
Currently radare2 [supports PCAP file format](https://github.com/radare/radare2-extras/blob/master/libr/bin/p/bin_pcap.c) opening, but original idea was to be able to load it as
debugging session. For example we record the session between GDB and gdbserver into the PCAP file,
then we would be able to open this file as a record & replay session. [See issue](https://github.com/radare/radare2/issues/3574) for more details.

### Better support for AOT and ART binaries

Current version of r2 is able to load ART and AOT binaries, but we are not yet able to extract all the information that lives in there

multidex is improtatn feature to support. as well as the feature of loading a jar (and resolve all symbols of all bins, etc.)

### Support objc selrefs and better code analysis for objc/swift code.

## Debugging
Currently radare2 supports many different debugging modes and protocols, but still have many issues
to fix. See ["debugger"](https://github.com/radare/radare2/labels/debugger) and ["debug-info"](https://github.com/radare/radare2/labels/debug-info) labels for more information.

### Improving reversible debugging

Radare2 already [supports](https://radare.gitbooks.io/radare2book/content/debugger/revdebug.html) basic "Record and Replay" feature, but the support is still very basic and quite unstable. [See issue #8198](https://github.com/radare/radare2/issues/8198) for more information. See also [issue #8996](https://github.com/radare/radare2/issues/8996) for adding the reverse continue/step support via gdb:// (GDB remote) protocol.
See also [Debugger Data Model](https://doar-e.github.io/blog/2017/12/01/debugger-data-model) article about same feature in WinDbg.

![image](http://xvilka.me/windbg-timetravel.png)

### Better support for Activities and Permissions (list them, references, etc)

Take ideas from Androguard, and be able to follow execution flow paths to understand which permissions are used in a specific region of code, how to reach a specific activity, etc.

### Support to spawn Apps, not just programs
See `debugserver -x springboard` and such to spawn apps from the backboard otherwise they get killed.

### Support iOS native debugging
Currently iOS native debugger cannot step, continue and set a breakpoint. See [#3461](https://github.com/radare/radare2/issues/3461)

### Support Dalvik (and Java in general) debugging via jdwp://

## Miscellanous
### Improving bindings and r2pipe
There are valabind generated bindings and we want them fixed, also merge r2pipe asyncronous and synchronous bindings.
See [radare2-bindings issues](https://github.com/radare/radare2-bindings/issues)


## radeco
[radeco](https://github.com/radare/radeco-lib) is a binary analysis framework based on radare. This year, we lan to push it further to implement a working decompiler within radare2.

Below are some tasks which help new contributors get start with radeco-lib:

1. [Issue#114](https://github.com/radare/radeco-lib/issues/114). Standardize register usage and structs in radeco using arch-rs repo:
Moving forward, we want to standardize and share common structs across
radare-rust repositories. [arch-rs](https://github.com/radare/arch-rs) is an effort towards this and defines
architecture related structs. We want to replace the current `SubRegisterFile`
in radeco with structs from arch-rs.

2. [Issue#117](https://github.com/radare/radeco-lib/issues/117). Parsing text-based radeco IR to Graph based IR:
This would allow us to write IR to files and load them up at a later point in
the analysis. It would be nice if we could do this with a parser generator in
rust, such as [lalrpop](https://github.com/nikomatsakis/lalrpop)

3. [Issue#118](https://github.com/radare/radeco-lib/issues/118). Implement a simple type system:
Currently, we have the ability to mark nodes as either a scalar (not an
address) or a reference (pointer/reference). We'd like to take this a step
further and be able to assign primitive (C like) types for nodes to make the
IR more expressive.

4. [Issue#119](https://github.com/radare/radeco-lib/issues/119). Restore / Update / Improve CLI tool (aka. minidec/radeco):
Minidec currently uses the old deprecated containers. This should be ported to
use the latest container systems.

5. [Issue#120](https://github.com/radare/radeco-lib/issues/120). Make accessing bindings in `RadecoFunction` more ergonomic:
Currently, accessing `Bindings` in `RadecoFunction` is not elegant. We should
improve support for this. This should also be extended to improve accessing of
type and other node information related to these bindings.

6. [Issue##46](https://github.com/radare/radeco-lib/issues/114). Port domtree analysis to use `petgraph` domtree construction:
Dominator tree construction was one of the first analysis implemented in
radeco. This needs some love. As such, it is works but is inconsistent with
the other analysis API in radeco. A refactor is needed. petgraph (the graph
library used inside radeco-lib for all graphs) has
added dominator tree construction to its set of graph algorithms. It might be
worthwhile to look into this and ride off their analysis instead of
reimplementing/refactoring this inside radeco.

As always, feel free to ask for help or discuss issues on #radare channel (telegram or irc, ping: @xvilka or @sushant94).

## rune

[rune](https://github.com/radare/rune) is the radare2 community's own symbolic execution engine written in Rust. rune is currently uses radare2's ESIL as the IR for performing symbolic execution.

Below are some microtasks up for grabs:

* Implementing breakpointing and hooks for the engine ([#7](https://github.com/radare/rune/issues/7)) : Symbolic execution engines often require user control at different stages of the run. This task would involve setting up the foundations for a breakpointing/hook feature based on ESIL patterns or tokens as required by the consumer. The user would then be given control over the `Context` to modify the state as necessary.

* Improvement to the CLI : rune currently supports a very basic CLI through the `Interactive Explorer` module. We would like to have a more complete set of features implemented for a better user experience.

* Implementing a multithreaded model for `Explorer` : Currently, rune supports 3 (Interactive, BFS and DFS) `Explorer` modules. For the BFS and DFS `Explorer` the current implementation is naive and state exploration is done sequentially with states being pushed into a pipeline of sorts. We would like to make full use of Rust's concurrency model and implement multithreaded exploration possible. This is a little advanced task with familiarity with Rust as a pre-requisite.

* Incremental solving features for rune ([#5](https://github.com/radare/rune/issues/5)) : rune could leverage the use of this z3 feature. This task would involve research and discussion into implementing a PoC and benchmarking the results against a certain set of binaries to observe improvement in performance.

Reference links:

* [Unleashing MAYHEM on binary code](https://users.ece.cmu.edu/~dbrumley/pdf/Cha%20et%20al._2012_Unleashing%20Mayhem%20on%20Binary%20Code.pdf): ForAllSecure's CGC winning engine
* [(State of) The Art of War](https://www.cs.ucsb.edu/~vigna/publications/2016_SP_angrSoK.pdf): A look into angr, UCSB's binary analysis engine
* [Falcon](https://github.com/falconre/falcon): A binary analysis framework written in Rust
* [An introduction to rune](https://chinmaydd.in/2017/07/03/Intro-to-rune/)
* Other projects: [libsmt.rs](https://github.com/sushant94/libsmt.rs), [arch-rs](https://github.com/radare/arch-rs)

## Cutter

[Cutter](https://github.com/radareorg/cutter) is the radare2 Graphical User Interface. It is written in Qt and C++ and uses the radare2 API and commands.

You can help the project by completing microtasks:

* Add a panel for getting headers information ([#253](https://github.com/radareorg/cutter/issues/253)): Cutter doesn't have any panel to view the header information for the current file. Those information most of the time useful to check and it would be nice to have this implemented in Cutter.
 
* Show manpage/description for given import ([#247](https://github.com/radareorg/cutter/issues/247)): Checking manually every manpage on internet can be time consuming. Having this feature in Cutter can save a lot of time for users.

* Add basic search capability ([#56](https://github.com/radareorg/cutter/issues/56)): Searching information through a binary is very useful. This feature is a must have.

* Improve color themes: Currently Cutter has one "default" theme and one dark theme. It would be nice to differentiate the disassembly colors from the interface theme and to add a light theme (so people with a "default" theme being dark can actually use a light theme). Colors improvements for the graph view are interesting too.

* ~~Add a panel for VTables ([#275](https://github.com/radareorg/cutter/issues/275)): VTables are often useful when reversing object oriented applications (C++ mainly). Having a panel to view the VTables would be useful.~~

* If you cannot find any suitable microtask here, check our [issues](https://github.com/radareorg/cutter/issues) especially the ones tagged with [good first issue](https://github.com/radareorg/cutter/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

For any question related to GSoC, don't hesitate to come on our IRC and/or Telegram channel and ping @xarkes or @Maijin.
