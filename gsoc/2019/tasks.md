# Microtasks

It is strongly recommended that students who want to apply to the radare2 GSoC/RSoC projects will perform a small tasks, to get the idea of students’ capabilities and make them familiar with radare2 codebase, structure and development process. Note, some tasks mentioned here are "meta" issues, which are quite big lists of smaller tasks. Of course finishing such big issue is impossible in a short period of time, so this means the student can take a few list items from those bugs as their microtask. Here is the list of such “qualification” tasks:

### INDEX

## Disassemblers and assemblers

Implementing the support for any new architectire counts as a microtask. See [New-Architecture](https://github.com/radare/radare2/labels/New%20Architecture) label for pending issues.
Nevertherless we chosen a few as the most important ones:

### LLVM bitcode [#2778](https://github.com/radare/radare2/issues/2778)

LLVM bitcode is very common format of the bytecode, used in many different compilers and tools.

See [llvm-bcanalyzer](https://github.com/llvm-mirror/llvm/blob/master/tools/llvm-bcanalyzer/llvm-bcanalyzer.cpp) and [BitCodeReader.cpp](https://github.com/llvm-mirror/llvm/blob/master/lib/Bitcode/Reader/BitcodeReader.cpp) on how to implement its parsing and decoding. See also [#3896](https://github.com/radare/radare2/issues/3896) for integration with Mach-O format parser.

### GPU architectures support [#12161](https://github.com/radare/radare2/issues/12161)
Modern GPU are now basically a powerful embedded computer networks. Every video card has a plenty of different chips and firmwares, fused and loaded, running. Radare2 can provide a convenient interface to reverse engineer and audit these firmwares or loaded programs, as well as help open source video drivers efforts.

### Python bytecode [#4228](https://github.com/radare/radare2/issues/4228)

Currently there is a support already for disassembling Python bytecode. But like with LUA the architecture is largely untested and can be easily broken. Moreover, analysis plugin is not implemented, so a lot of information is still missing in the output. We need to add the proper tests and see if there are bugs (and fix them).

See [universal python disassembler](https://github.com/evanw/unwind) for example and [basic](https://github.com/radare/radare2-extras/tree/master/libr/bin/format/pyc) [implementation](https://github.com/radare/radare2-extras/blob/master/libr/asm/p/asm_pyc.c) in radare2-extras for current state of it.

![image](https://image.slidesharecdn.com/tailbytespygotham-140819135745-phpapp02/95/tco-in-python-via-bytecode-manipulation-7-638.jpg)

### Java
Java support has landed in radare2 a long time ago. At the same time it is largely unused, full of bugs and poorly written. Some code (e.g. [anal_extra](https://github.com/radare/radare2/blob/master/libr/anal/anal_ex.c)) doesn't really fit its place and can be moved/refactored on top of the modern radare2 architecture design.

### Improving WebAssembly (WASM) support

- ESIL (emulation should be super easy since it is stack based too)
- Enrich the view of the data, like globals, calls, etc.. [#12225](https://github.com/radare/radare2/issues/12225)
- Proper decompilation via external plugin (no r2dec, maybe via radeco)

### Reviving .NET bytecode support
It is widely adopted these days and there are many tools available for decompilation. On the other hand radare2 provides many useful features across all architectures and scripting capabilities, which can help to improve the state of .NET reverse engineering tooling. Currently the most basic MSIL support lives in [radare2 extras](https://github.com/radare/radare2-extras/tree/master/libr/asm/arch/msil). It can be revived, improved and enhanced to add newer format of the .NET bytecode. See other tools that work with .NET bytecode:
- [ILSpy](https://github.com/icsharpcode/ILSpy)
- Telerik [JustDecompile engine](https://github.com/telerik/justdecompileengine)
- JetBrains [dotPeek](https://www.jetbrains.com/decompiler)

## Analysis

The current code analysis have many little caveats and issues which may be good to be addressed, fixing them and writing more tests is very important to stabilize and enhance it.

[See these issues](https://github.com/radare/radare2/issues?q=is%3Aissue+is%3Aopen+label%3Aanal)

### Heap analysis [#5390](https://github.com/radare/radare2/issues/5390)
Currently radare2 has support for heap exploration and analysis, but the feature is still basic and can be improved. Moreover, other allocators can be added, but this should be done after a proper refactoring, because heap analysis shouldn't depend on the debugger backend, and we may be able to use different heap tools.

So the most important part of supporting heap analysis is to create a new subset of commands, and put all that stuff under data analysis or debugger-wide features, not in the target debugger backend. Moreover many things are done in C while they can be solved with format strings.

### Basefind [#10725](https://github.com/radare/radare2/issues/10725)
There are plenty of external scripts and plugins for finding the most probable base for raw firmware images. As a scenario of opening raw firmwares with radare2 is very common it makes sense to implement it as a part of radare2 core.

## Anal Classes for C++/ObjectiveC/Swift/Dlang/Java

Anal classes, accessible under the `ac` command, are a new feature of r2 which has only recently been merged into master.
They provide a way to both manually and automatically manage and use information about classes in the binary.

### Pulling class info from bin to anal [#12600](https://github.com/radare/radare2/issues/12600)

Bin classes, accessible using `ic`, are static info recovered from, for example, symbol names.
They are not editable and provide only a single source for class information.

There should be a command that takes this info and pulls it into anal classes, so the they can be manually edited, enhanced with more information, etc.

### Add size info to anal class vtables [#12601](https://github.com/radare/radare2/issues/12601)

Right now, vtables in `aCv` only have an address, but no size.
This should be added to the sdb record and also be represented in the size of the flag for the vtable.

### Devirtualize method calls using anal class vtables [#12603](https://github.com/radare/radare2/issues/12603)

Consider the following call: `call dword [eax + 0x6c]`
Let's assume eax is the base pointer of a vtable we have saved in anal classes and we want to find out the actual address of the called method.

So there should be a command that takes the offset (in this case 0x6c) and looks up the actual destination.
It should be possible to call this command with a specific class, so it only looks into its vtable, or without a class, so it gives a list of possible destinations for all vtables that are not too small for the offset (partially requires [#12601](https://github.com/radare/radare2/issues/12601))

When that is implemented, one could also add a command that does the same thing, but automatically takes the offset from the opcode at the current seek.

### Add anal classes to Vb [#12604](https://github.com/radare/radare2/issues/12604)

`Vb` already supports browsing bin classes. The same thing should be implemented for anal classes.

## Signatures

## META - Graphs [#6967](https://github.com/radare/radare2/issues/6967)

### Binary diffing - [radiff2](https://github.com/radare/radare2/labels/radiff2)

Bindiffing has been a known feature of radiff2, but it has been unmaintained for years. Improving the output, adding visual diffing modes, using analysis results and optimizing speed are the most important things here.

### Node groups

Being able to select multiple nodes in the graph and group them to colorize them and specify a name for them. [#2952](https://github.com/radare/radare2/issues/2952)

### Save/restore graph state

This task is necessary when node grouping or layout have changed, this information can be stored in projects by just reusing the `agn` and `age` commands to recreate a graph and feeding the body of the nodes in base64.

## META - RAGG2 [#6949](https://github.com/radare/radare2/issues/6949)

Ragg2 - simplistic [compiler for C-like syntax](http://radare.today/posts/payloads-in-c/) into tiny binaries for x86-32/64 and arm. Programs generated by ragg2 are relocatable and can be injected in a running process or on-disk binary file. Fixing  ragg2 issues will help a lot for creating small payloads for exploiting tasks.

## Refactoring

### Sdbtization
Radare2 is being slowly refactored to store all the information about session, user metadata and state of debugger in the [SDB](https://github.com/radare/sdb) - simple key-value database. This work still ungoing. So helping us with a few sdbtization bugs will introduce you into the radare2 codebase structure.

We have decided to not sdbize everything, and use RBTree and RDict when necessary, so be sure to ask developers before starting. Also, some places in r2 (like the version bin parser) is using Sdb in a very poor way. Fixing them counts too.

[See issues](https://github.com/radare/radare2/issues?q=is%3Aopen+is%3Aissue+label%3Asdbtization)

### ESILization
Radare2 has its own intermediate language - ESIL, but not yet support it for all architectures. So
the task is to add ESIL support to any architecture, which doesn't has it yet.
[See issues](https://github.com/radare/radare2/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Aesil) for the related bugs.

* finish 8051 esil
* implement ARC esil emulation
* support packed registers (mmx and such)
* support floating point
* support MMX/SSE/AVX/other SIMD extensions

* Implement memory access callback apis in unicorn and make the unicorn plugin for r2 work

## File formats

Implementing the support for any new file format counts as a microtask. See [New File-Format](https://github.com/radare/radare2/labels/New%20File-Format) label for pending issues.
Nevertherless we chosen a few as the most important ones:

### META - Portable Executable format [#921](https://github.com/radare/radare2/issues/921)
There are lot of missing features in the current PE file parser as you can see in this META Issue.

![](https://image.slidesharecdn.com/44con2013workshop-exploringtheportableexecutableformat-130916113833-phpapp01/95/exploring-the-portable-executable-format-18-638.jpg)

this requires a refactor of rbin that didnt happened yet. but also, we want to have .NET parser (already commited but not used) for the PE, and bring back the MSIL disassembler.

## Debugging
### Improving reversible debugging

Radare2 already [supports](https://radare.gitbooks.io/radare2book/content/debugger/revdebug.html) basic "Record and Replay" feature, but the support is still very basic and quite unstable. [See issue #8198](https://github.com/radare/radare2/issues/8198) for more information. See also [issue #8996](https://github.com/radare/radare2/issues/8996) for adding the reverse continue/step support via gdb:// (GDB remote) protocol.
See also [Debugger Data Model](https://doar-e.github.io/blog/2017/12/01/debugger-data-model) article about same feature in WinDbg.

### Better support for Activities and Permissions (list them, references, etc)

Take ideas from Androguard, and be able to follow execution flow paths to understand which permissions are used in a specific region of code, how to reach a specific activity, etc.

### Support to spawn Apps, not just programs
See `debugserver -x springboard` and such to spawn apps from the backboard otherwise they get killed.

## Miscellanous

### Improving bindings
There are valabind generated bindings and we want them fixed, also merge r2pipe asyncronous and synchronous bindings. See [radare2-bindings](https://github.com/radare/radare2-bindings) repository for more information. It has also a different approach - parsing radare2 headers using Clang bindings and generating them without any intermediate files. There is support for Python, Go, Rust and Haskell. It should be improved and better tested - writing autotests will help a lot.

### Improving scripts for importing from IDA Pro IDB files
Currently radare2 can use [ida2r2](https://github.com/radare/radare2ida) script to import information from the IDA Pro IDB files. It uses [python-idb](https://github.com/williballenthin/python-idb) library for parsing IDB files without IDA Pro installed. Improving both to allow import more information - types, variable and argument names, structures and enums, etc is the main goal of this task.

### Improving regression suite and testing
Currently radare2 uses custom solution for running regression tests. It is required to solve [numerours issues](https://github.com/radare/radare2-regressions/issues), along with improving parallel execution and performance. The next interesting idea is to setup and [reuse Godbolt](https://github.com/radare/radare2-regressions/issues/1549) compilation engine for generating tests for different compilers and compilation options. There is even command line tool for interacting with Godbolt - [cce](https://github.com/ethanhs/cce).

## radeco

[radeco-lib](https://github.com/radareorg/radeco-lib) is a decompiler library which uses radare2 and [radeco](https://github.com/radareorg/radeco) is its user interface.

### radeco

* Implementing a command for reporting bugs [#40](https://github.com/radareorg/radeco/issues/40)
* Ability to cache intermediate analyses to a file [#49](https://github.com/radareorg/radeco/issues/49)

### radeco-lib

These tasks are big enough big to be splitted and picked any small part of them as a microtask.

* Implementing simple type system [#118](https://github.com/radareorg/radeco-lib/issues/118)
* Simplify the conditions [#216](https://github.com/radareorg/radeco-lib/issues/216)
* Use basic block information from radare2 [#207](https://github.com/radareorg/radeco-lib/issues/207)
* Use SDB to determine the number of argument of a given function [#213](https://github.com/radareorg/radeco-lib/issues/213)


## rune

[rune](http://github.com/radareorg/rune) is the radare2 community's own symbolic execution engine written in Rust. It aims to be a library with replaceable modules for reasoning about sections of a binary. rune is currently uses radare2's ESIL as the IR for performing symbolic execution. Apart from ESIL, we would also be attempting to implement a new `Engine` with radeco-ir as the underlying representation.

Working with rune would give the candidate a good exposure to projects in the radare-rust ecosystem and high-level structures used across libraries such as radeco-lib, arch-rs and libsmt-rs.

Below are some microtasks up for grabs:

* Implementing breakpointing and hooks for the engine ([#7](https://github.com/radareorg/rune/issues/7))
  Symbolic execution engines often require user control at different stages of the run. This task would involve setting up the foundations for a breakpointing/hook feature based on ESIl patterns or tokens as required by the consumer. The user would then be given control over the `Context` to modify the state as necessary.

* Integrating a test-benchmark and CI ([#3](https://github.com/radareorg/rune/issues/3))
  Currently, most of the testing is either performed offline or as individual modules. We would like to have a solid test setup for the engine to check for module integration issues. We could use binaries used for testing radeco-lib or similar decompiler/symbolic engine libraries. . This could involve checking for deterministic `Context` (registers, memory, etc.) at different stages of the execution run.

* Improvement to the CLI
  rune currently supports a very basic CLI through the `Interactive Explorer` module. We would like to have a more complete set of features implemented for a better user experience.

* Implementing a multithreaded model for `Explorer`
  Currently, rune supports 3 (Interactive, BFS and DFS) `Explorer` modules. For the BFS and DFS `Explorer` the current implementation is naive and state exploration is done sequentially with states being pushed into a pipeline of sorts. We would like to make full use of Rust's concurrency model and implement multithreaded exploration possible. This is a little advanced task with familiarity with Rust as a pre-requisite.

* Incremental solving features for rune ([#5](https://github.com/radare/runeorg/issues/5))
  rune could leverage the use of this z3 feature. This task would involve research and discussion into implementing a PoC and benchmarking the results against a certain set of binaries to observe improvement in performance.

* Implementing rerune - A new engine based on radeco-ir ([Issue #8](https://github.com/radareorg/rune/issues/8))
  This is a big task which could be broken down into multiple stages as mentioned in the above issue. Before we implement the `Engine`, we would be looking to move structures and traits to refactor major modules in rune. This would be extremely useful in bringing the project closer to complete integration with radeco-lib.

Reference links:

* [Unleashing MAYHEM on binary code](https://users.ece.cmu.edu/~dbrumley/pdf/Cha%20et%20al._2012_Unleashing%20Mayhem%20on%20Binary%20Code.pdf): ForAllSecure's CGC winning engine
* [(State of) The Art of War](https://www.cs.ucsb.edu/~vigna/publications/2016_SP_angrSoK.pdf): A look into angr, UCSB's binary analysis engine
* [Falcon](https://github.com/falconre/falcon): A binary analysis framework written in Rust
* [An introduction to rune](https://chinmaydd.in/2017/07/03/Intro-to-rune/)
* Other projects: [libsmt.rs](https://github.com/sushant94/libsmt.rs), [arch-rs](https://github.com/radareorg/arch-rs)

## Cutter (GUI)

[Cutter](https://github.com/radareorg/cutter) is a Qt and C++ GUI for radare2. Its goal is making an advanced, customizable and FOSS reverse-engineering platform while keeping the user experience at mind. Cutter is created by reverse engineers for reverse engineers.

While it is very useful for all the community behind Cutter, working on the interface can be very interesting for people that want to gain experience in UI/UX design, or simply in Qt/C++.

Below are some improvements that can be done to the interface:

* Hexdump widget improvements ([Project #8](https://github.com/radareorg/cutter/projects/8))
As radare2, Cutter also provides a hexdump widget, however this one is not very interesting to use as of now. Most of the opened issues about this widget are easy to solve and could be a good way to start learning the code base of Cutter.
* Improve the "Run Script" option ([#753](https://github.com/radareorg/cutter/issues/753))
* Add the ability to import '*.idb' files ([#693](https://github.com/radareorg/cutter/issues/693))
* Add a font ratio option ([#686](https://github.com/radareorg/cutter/issues/686))
* Increase graph margins ([#727](https://github.com/radareorg/cutter/issues/727))
* Improve layout functionnality ([#694](https://github.com/radareorg/cutter/issues/694))

Also [any issue in our issue tracker marked as "Good First Issue"](https://github.com/radareorg/cutter/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) is a good candidate for a microtask.

