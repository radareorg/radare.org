# Project Ideas

### INDEX

## Console Interface Improvements

Radare2 has a very flexible console interface, including command line, different visual modes and Unix-like integration with other tools. But there are still a lot of things to be done.

### Task
1. Implement table commands and API (like it is done for graphs)
2. Generalize the code of popup widget, merge with visual widgets (see PR), reuse them in other places
3. Support colorscheme in radiff2 graphs
4. Further improvements for RTL and BiDirectional text
5. Improving autocompletion and dietline modes (vi/emacs-like hotkeys)
6. Various bugfixes and improvements for visual, visual panels and graph modes

### Skills
Student should know C and understand basics of the console graphics. Having and experience with Vim/Emacs or other similar-philosophy programs is a plus.

### Difficulty
Medium

### Benefits for the student
The student will know how the console interaction is done "under the hood",
will gain the knowledge of Unicode internals and the experience of
tuning the redrawing performance. It might also improve the efficiency of working inside the console programs.

### Benefits for the project
Huge benefits for end users in UX and better support for localization

### Assess requirements for evaluations
- 1st term: Table commands and API, popup widget generalization
- 2nd term: BiDirectional text support and performance improvements
- Final term: Support for vi/emacs-mode in dietline and graph modes improvements, regression and unit tests, documentation

### Mentors
 - xvilka
 - deroad

### Links/Resources
 - [META: Console improvements](https://github.com/radare/radare2/issues/8672)
 - [META: Unicode/UTF-8 support](https://github.com/radare/radare2/issues/2032)
 - [Popup console widget](https://github.com/radare/radare2/issues/8476)
 - [Table commands/API](https://github.com/radare/radare2/issues/7519)
 - [Tree commands/API](https://github.com/radare/radare2/issues/12745)
 - [Repainting screen improvements](https://github.com/radare/radare2/issues/4820)
 - [PR - Initial visual widgets support](https://github.com/radare/radare2/pull/12693)

## Radare2 commands syntax parser
Radare2 is a well known for the abundance of the commands and complex syntax. At this point nearly every command performs its own parsing for
the arguments and autocompletion. Some parts of the syntax are parsed in the main processing loop. The main goal of this task is to implement a generic parser for all radare2 commands, providing a simple interface with an arguments list and count for every subcommand, allowing for easy extension of the syntax and even performing real-time (as you type) syntax highlighting of the command right in radare2 REPL. We already have [mpc](https://github.com/orangeduck/mpc) as a parser for ragg2. So having it as a core for radare2 commands parsing seems like a good idea too.

### Task
1. Implement parsing core in radare2
2. Implement syntax extensions (macros, aliases, loops, conditionals, etc) in the new parser
3. Gradually switch all radare2 command to the new parser
4. Port external plugins, like radeco, r2dec, radare2-extras to the new parser API
5. Write unit and regression tests for the parser
6. Write information (mostly syntax) about new parser in radare2 book.

### Skills
Student should know C. And thould be familiar with writing parsers and writing performance-critical code.

### Difficulty
Medium

### Benefits for the student
Student will understand the logic behind writing different kinds of parsers, and will learn a lot about radare2 internals and the complexity of its commands' syntax.

### Benefits for the project
This feature will reduce the complexity of adding new command or changing existing one, it will bring also the better syntax extensions and ability to syntax highlight the language.

### Assess requirements for midterm/final evaluation
- 1st term: Write the core of the parser with all syntax constructs available in radare2 commands.
- 2nd term: Migrate radare2 commands and external plugins to a new API.
- Final term: Documentation in r2book and commands, working testcases and unittests for the new parser.

### Mentors
- pancake
- xvilka
- ret2libc

### Links/Resources
- Refactor commands parsing - [Issue #7967](https://github.com/radare/radare2/issues/7967)
- [MPC](https://github.com/orangeduck/mpc) - a parser combinator library for C

## Type Analysis Improvements
Currently we have types support in radare2, including basic (low-level) ability to edit type with `pf` and higher-level, C-like types with `t` command. Currently you can parse the C type definition from C headers for example, or load from "precompiled" SDB file. The goal of this task is to integrate more types handling into the radare2 analysis loop, including automatic inference and suggestions.
Some basic type inference is already implemented as a part of `aft` and `afc` commands, and `anal.types.*` configuration options.

### Task
1. Importing types and variables information from DWARF and PDB files
2. Integrating C++/ObjC/Swift/etc vtables analysis with types information
3. Improve support of the constrained types
4. Improve the ability to autosubstitute structure offset where possible (e.g. when you specified function parameter type and it uses it inside)
5. Improve the type inference based on function arguments types, function return types and callgraph

### Skills
Student should know C as well as be familiar with basics of the program analysis.

### Difficulty
Medium

### Benefits for the student
Student will understand modern program analysis problems related to type inference, understand low level details on how compilers produce native code from OOP concepts, and will meet the most common reverse engineering task in its advanced incarnation.

### Benefits for the project
This feature will make radare2 more usable for day-to-day reverse engineering of complex programs, and will make integration with radeco decompilator even easier.

### Assess requirements for midterm/final evaluation
- 1st term: Loading types information from DWARF and PDB, integrated them with `t` and `pf` commands.
- 2nd term:  Loading classes, methods and inherence information from vtables, RTTI, etc for C++/ObjC/Swift binaries, integrating them with `av`, `t`, and`pf` commands.
- Final term: Documentation in r2book and commands, working testcases for implemented things

### Mentors
- pancake
- xvilka
- thestr4ng3r

### Links/Resources
- [META - Analysis improvements](https://github.com/radare/radare2/issues/4868)
- [META - VTable detection](https://github.com/radare/radare2/issues/6851)
- [META - Rethink types storage](https://github.com/radare/radare2/issues/10905)
- C types/SDB properties - [Issue #7710](https://github.com/radare/radare2/issues/7710)
- Calling conventions - [Issue #6856](https://github.com/radare/radare2/issues/6856)
- Extract types info from PDB and DWARF - [Issue #6856](https://github.com/radare/radare2/issues/3143)
- Load variable names from DWARF and PDB - [Issue #7863](https://github.com/radare/radare2/issues/7863)
- DWARF types information - [Issue #774](https://github.com/radare/radare2/issues/774)
- Load types information - [Issue #741](https://github.com/radare/radare2/issues/741)
- More DWARF information - [Issue #2079](https://github.com/radare/radare2/issues/2079)
- Constrained types - [Issue #11828](https://github.com/radare/radare2/issues/11828)
- [TIE: Principled Reverse Engineering of Types in Binary Programs]()
- [HexRaysCodeXplorer](https://github.com/REhints/HexRaysCodeXplorer)
- [Virtuailor](https://github.com/0xgalz/Virtuailor) - vtables reconstruction based on runtime information
- [Pharos - types inference with Prolog](https://github.com/cmu-sei/pharos)

## CPU/Platform profiles
While instruction set defines architecture, it is common that particular CPU or SoC models implement only a subset of it or extend it with custom instructions and registers. Moreover, various SoC modifications can define peripheral devices interaction through ports (rare), registers or MMIO spaces. All this helps the reverse engineering process, because a lot of the code will make sense upon a glance once you see it accesses certain registers (if named) or peripheral devices (when MMIO area is defined).

### Task
1. Implement support for CPU profiles
2. Implement support for platform profiles
3. Add support for register and MMIO specific setups
4. Integrate these in analysis loop, handling register and memory accesses.
5. Implement tests and documentation in radare2 book
6. Provide an API for setting these values from r2pipe and `lang-*` plugins

### Skills
Student should know C and understand basics of the hardware platforms, architectures and chips.

### Difficulty
Medium

### Benefits for the student
The student will improve familiarity with reverse engineering for various architectures and platforms, along with the improving the efficiency of radare2.

### Benefits for the project
Huge benefits for end users in UX and better support for extension.

### Assess requirements for evaluations
- 1st term: CPU and platform profiles, some most common profiles
- 2nd term: Integration in the analysis loop and plugins
- Final term: Support for more platforms, regression and unit tests, documentation (including radare2 book), fixing third party (radare2 extras) plugins and bindings.

### Mentors
 - xvilka
 - maijin

## Handle EXE/DLL as FAT binaries

Windows programs are like Apple's FAT binaries, they contain multiple programs inside, and r2 should be able to list and select them when loading. Also, it may be possible to extract them with rabin2 -x foo.exe.
The sub-bins inside an EXE are:
1. DOS program
2. W16 program
3. W32 program
4. MSIL program (.NET)

### Task
This task also includes adding support for .NET in RBin, to be able to list the symbols, get the entrypoint, code metadata, etc. This will require rethinking some of the commands to allow switch between parts of this FAT binary on the fly.

1. Fix current fatmach0
2. Improving loading dyldcache, including the filtering of shared dyldcache objects
3. PE (dos, win, .net) separation
4. Add support for iOS OTA images

### Skills
The student should be comfortable with the C language, and be familiar with windows binaries

### Difficulty
Advanced

### Benefits for the student
The student will gain a deep understanding of Microsoft's executable formats.

### Benefits for the project
Currently, there are no up to date modern tools to deal with .NET programs in a low-level manner, when decompilers fail. With this task, we'd like to fill this gap.

### Assess requirements for midterm/final evaluation
- 1st term: Support of FAT binaries (Win32 native + .NET) in RBin, basic one
- 2nd term: Listing symbols from both parts of the binary (e.g. .NET and native code), as long as other metadata. And show this metadata in rabin2 output as well.
- Final term: Writing tests and documentation, improvements to parsing .NET parts of the binary

### Mentors
- pancake
- ret2libc

### Links/Resources
- [Issue #662](https://github.com/radare/radare2/issues/662)
- [RBin refactoring project](https://github.com/radare/radare2/projects/11)
- [Official .Net resources](http://www.microsoft.com/net)

## Proper Windows platform support
Radare2 has basic support for Windows but not all tests are passing under AppVeyor, debugging has still problems, and some features of radare2 do not work properly. This task consists of some small,
and some big unrelated tasks to improve the basic and advanced support of running radare2 on Windows
platform

### Tasks
1. Fix current features on Windows platform:
   - Debugger: check if it works on modern Windows NT (XP - 10), native, gdb:// and windbg://
   - Regression tests: make them pass locally
   - Regression tests: run them on AppVeyor automatically (and fix correspondingly)
2. Improve [WinDbg protocol](https://github.com/radare/radare2/tree/master/shlr/wind) support and integration with analysis
3. Heap analysis (like it is done with `dmh` for glibc)
4. Make zignatures for Windows libraries
5. Better Support for .dll (analysis and debugger) and kernel drivers loading.
6. Ability to find out WinMain automatically, parsing SEH and RTTI

### Skills
The student should be comfortable with programming under Windows platform. They don't need to have a reverse engineering background, since most of the missing stuff is well documented. As a bonus point it would be interesting if they know some basic assembly.

### Difficulty
Medium. If the student is comfortable with programming for Windows, there shouldn't be major challenges except WinDbg protocol support.

### Benefits for the student
The student will gain experience in writing debuggers for Windows platform. Also, the student will learn the Windows platform internals, related to debugging.

### Benefits for the project
Since radare2 has a better support for emulation and analysis, this will help to migrate from WinDbg to radare2.

### Assess requirements for midterm/final evaluation

- 1st term: The student must finish the regression tests pass stage.
- 2nd term: WinDbg protocol support improvements are the requirement to pass the 2nd evaluation.
- Final term: Ability to parse various versions of PDB format, regression tests for them and extending documentation in radare2 book.

### Mentors
- maijin
- xvilka

### Links/Resources
- The [current](https://github.com/radare/radare2/issues/1246) WinDbg protocol support issues
- Windows support - [META](https://github.com/radare/radare2/issues/1194) issue
- Heap explorer/analysis - [META](https://github.com/radare/radare2/issues/5390) issue
- [Related issues](https://github.com/radare/radare2/labels/Windows) on github
- [PDB format](http://llvm.org/docs/PDB/index.html) description (LLVM project)
- [PyKD](https://pykd.codeplex.com/) - WinDbg extension via Python tools
- [KDnet](https://github.com/Lekensteyn/kdnet) - Windows kernel debugging over Network
- [VirtualKD](http://virtualkd.sysprogs.org/) debugger
- [WinAppDbg](https://github.com/MarioVilas/winappdbg) debugger
- [MEX](https://blogs.msdn.microsoft.com/luisdem/2016/07/19/mex-debugging-extension-for-windbg-2/) debugging extensions for WinDbg
- [KarmaDbg](https://karmadbg.codeplex.com/) - PyKD extension
- [WinDbg extensions list](https://github.com/lowleveldesign/debug-recipes/blob/master/debugging-using-windbg/windbg-extensions.md)
- [WinDbg cheatsheet](http://windbg.info/doc/1-common-cmds.html)
- [DbgKit](http://www.andreybazhan.com/dbgkit.html) - WinDbg extension for working with processes

## Radiff2 improvements
Radare2 has had the ability to perform binary diffing for over a decade. Nevertheless the support is quite basic and there is room for improvement. One of the most important tasks is to deepen the integration with analysis loop. Integration with the analysis loop will allow radare2 to find and highlight the difference between arguments count, local variables count, their types and other analysis metainformation. The next big task is to modernize radiff2 (and corresponding parts in RCore) in terms of performance and user interface. And of course - cover the radiff2 and radare2 diffing features with regression tests and unit tests.

### Tasks
- Support diffing of the different parts of the same buffer/file
- Visual [diffing mode with Unicode/ASCII graphs](https://github.com/radare/radare2/issues/7332) in radare2 and radiff2
- Split view for [hexadecimal view](https://github.com/radare/radare2/issues/8115) and disassembly diffing mode
- Improve the integration with analysis (variables and types differences)
- Integrate ESIL and Radeco IL/pseudocode as an options for binary diffing
- Implement the most important diffing strategies from Diaphora
- Write the test cases for radare2 regression tests and improve the results.

### Skills
Student should know C as well as be familiar with basics of the program analysis. Having an
experience with other binary diffing software is a plus.

### Difficulty
Medium

### Benefits for the student
Student will understand modern program analysis problems in application to binary diffing, and how to improve the performance of patch analysis.

### Benefits for the project
This feature will make radare2 usable for day-to-day patch analysis of modern software, as well as improve the automation and performance of this task.

### Assess requirements for midterm/final evaluation
- 1st term: radiff2/radare2 should support highlighting types, arguments, and variables differences between functions.
- 2nd term: Implement split-view for hex, disassembly, and graph modes. Their interface and performance improvements.
- Final term: Write the regression tests for all implemented features, add the documentation in
	radare2 book.

### Mentors
- pancake
- xvilka

### Links/Resources
- [META - Radiff2](https://github.com/radare/radare2/issues/6971)
- [Radiff2-labeled issues](https://github.com/radare/radare2/labels/radiff2)
- [Signature-labeled issues](https://github.com/radare/radare2/labels/zignatures)
- Cutter: Diffing interface feature request [#1104](https://github.com/radareorg/cutter/issues/1104)
- [PatchDiff2](https://github.com/filcab/patchdiff2)
- [BinDiff](https://www.zynamics.com/bindiff.html)
- [Diaphora](https://github.com/joxeankoret/diaphora)
- [SimHash](https://github.com/googleprojectzero/functionsimsearch)


## Real time collaboration platform
Radare2 has been a successfull reverse engineering framework and a toolset for years. But apart from decompilation, the biggest missing feature is the lack of real time collaboration, which is important when reversing large files, or playing CTFs in a team. There are successfull examples like [collabREate](https://github.com/cseagle/collabREate), [YaCo](https://github.com/DGA-MI-SSI/YaCo) and [solIDArity](https://solidarity.re) (proprietary/$$$). When it comes to public tools, collabREate is the most complete and common, and it supports notifications (and online propagation) of those actions:

- Change address/region type (code, data, unknown)
- Segment add, delete, move, change (like 32->64 bit, flags)
- Rename addr
- Function update (add, remove, bounds change)
- Comment updated
- Byte(s) patched
- Operand type changed (I assume hex, dec, str, offset, etc)
- Enum updates
- Struct type added, changed, or deleted
- Function tail? added or deleted
- FLIRT function identified (would just be "function renamed") (signature matched)
- Xref add/delete (I don't know what this means)

The possible architecture of the platform:

 "WebUI [1] (microservice in Go) <-> Server [2] (microservice in Go) <-> C library of client [3]"

The project management (create/remove/add user in project/remove user from project) should be done in the Server [2]. The user management - too. Those functions are exported in some way for using in WebUI microservice (RPC maybe?). The file storage is a filesystem, for storing initial files (in binary format), state and differences (in text format) using [Git Go library](https://github.com/src-d/go-git),
those text differences are "r2 commands", which are sent by a C api library.
Conflict resolution could be done via standard Git features - rebase/merge.

### Task
1. Implement a simple server in Go to handle connections of multiple radare2 instances
2. Add the users and projects manager to the server
3. Patch radare2 to add hooks for the most important actions
4. Write a simple unit tests for those hooks for easy testing on Travis CI and AppVeyor

### Skills
Ability to code and understand C and Go (Go can be learnt in a couple weeks though).

### Difficulty
Medium

### Benefits for the student
Student will learn about creating a distributed systems with Go and conflict resolution
algorithms in real time.

### Benefits for the project
It is crucial for the ability to reverse engineer complex programs in a team, allowing
managing the changes history. It will also improve the undo features in radare2.
This kind of work will be beneficial for team-CTF competitions as well.

### Assess requirements for evaluation
- 1st term: Simple server in Go (with conflict resolution) is up and running + some tests of it
- 2nd term: Implement the syncing capabilities and hooks in radare2 code
- Final term: User management and project management, connect to the server and sync, demo of resolving conflict, tests and documentation.

### Mentors
- xvilka
- pancake

### Links/Resources
- [Syncing radare2 project](https://github.com/radare/radare2/projects/5)
- [Projects radare2 roadmap](https://github.com/radare/radare2/projects/9)
- [Hooks for realtime collaboration](https://github.com/radare/radare2/issues/7410)
- [SolIDArity](https://solidarity.re)
- [CollabREate](https://github.com/cseagle/collabREate)
- [YaCo](https://github.com/DGA-MI-SSI/YaCo)
- [revsync](https://github.com/lunixbochs/revsync)

