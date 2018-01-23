# Project Ideas

### INDEX

# Radeco GSoC (radare2 decompiler)

[radeco](https://github.com/radare/radeco-lib) is a radare2 based static binary analysis framework. Currently, radeco is stable enough and has several analysis built into it. We believe that this GSoC is a good opportunity to push radeco further and implement our very own decompiler within radare2!

## Pseudo-C Backend for Decompiler

This task involves completion of a decompiler backend using the analysis in radeco. Once the preliminary results are obtained, students are expected to continue working on improving the quality of decompiled code. Below is a high-level task list that we think is appropriate for this timeline. Feel free to break it down further and bring in new ideas while writing your proposal.

### Task
* Define and implement a subset of C Abstract Syntax Tree (AST)
* Implement traversals and display methods for C AST
* Implement a backend to convert the IR to C AST
* Discuss and implement a set of passes to refine the C output and make it more idiomatic.

### Skills
The student should be familiar with Rust and decompilation basics or be able to learn it quickly.

### Difficulty
Advanced

### Benefits for the student
The student will learn decompilation theory and working with radeco-ir.

### Benefits for the project
This task allows to produce the first release of radeco which will be able to generate readable C code.

### Mentors
- sushant
- xvilka

### Assess requirements for midterm/final evaluation
- 1st term: Implementing AST generation.
- 2nd term: Producing C code.
- Final term: Refined C output, written regression and unit tests, updated documentation (including r2book).

### Links/Resources
 - [Radeco-lib](https://github.com/radare/radeco-lib)
 - [Radeco-lib issues](https://github.com/radare/radeco-lib/issues)
 - [Papers about decompilation](https://drive.google.com/drive/folders/0B1X32SwXTZPuYWwxWW5BNi1oWDA?usp=sharing)

# Cutter (radare2 Qt/C++ GUI)

[Cutter](https://github.com/radareorg/cutter) is a Qt and C++ GUI for radare2. It focuses on those whose are not yet radare2 users because of the learning curve, because they don't like CLI applications or because of the difficulty/instability of radare2.

## Implement Debugging and Emulation support
Cutter currently only works in static analysis. The idea would be to implement a debugging view which allows to run/rerun the current binary with multiple r2 dbg/io plugins.

### Task
1. Make every widget have its own seek/offset/address
2. Add possibility to create multiple instances of the same Widget (with a different seek)
3. Create a Widget which prints registers names and values
4. Create a new DebugWindow (QMainWindow) which is proper for debugging (customizable)
5. Add some debugger toolbar at the top (select dbg plugin, program arguments, run, pause, stop, ...)
6. Handle correctly emulation

### Skills
The student should be familiar with C++ and experience in Qt would be a plus.

### Difficulty
Medium

### Benefits for the student
The student will learn how to make a correctly designed User Interface.

### Benefits for the project
This task provides huge benefits for Cutter because its end users would be able to use Cutter
for both static and dynamic analysis.

### Mentors
- xarkes
- maijin

### Assess requirements for midterm/final evaluation
- 1st term: Managed to separate seeks between differents widgets and has a PoC for debugging.
- 2nd term: Fully working debugger with multiple IO, and fully working debugger widgets.
- Final term: Emulation support is complete, every debugging widget is fully implemented and documentation is done.

### Links/Resources
None.

# Radare2

## Console interface improvement

Radare2 has a very flexible console interface, including command line, different visual modes and
Unix-like integration with other tools. But there are still a lot of things to be done.

### Task
1. Unify similar code between all different modes
2. Write a popup window widget for selection/autocompletion
3. Add the table API/commands like it is done for graphs
4. Add API and command for setting graph node background
5. Show minigraph together with graph
6. Radiff2 visual split-view mode
7. Tests and documentation (r2book) for new commands

### Skills
Student should know C and basics of terminal interaction (ESC sequences, TTY, etc)

### Difficulty
Medium

### Benefits for the student
The student will know how the console interaction is done "under the hood",
will gain the knowledge of Unicode internals and the experience of
tuning the redrawing performance.

### Benefits for the project
Huge benefits for end users in UX and better support for localisation

### Assess requirements for evaluations
- 1st term: Fixed Unicode problems in visual modes, added the table API/commands
- 2nd term: Show minigraph with graph, popup widget, node background
- Final term: Refactored and unified code in visual modes, radiff2 split view, fixed bugs, written the tests

### Mentors
 - xvilka
 - pancake

### Links/Resources
 - [META: Console imrpovements](https://github.com/radare/radare2/issues/8672)
 - [META: Unicode/UTF-8 support](https://github.com/radare/radare2/issues/2032)
 - [Popup console widget](https://github.com/radare/radare2/issues/8476)
 - [Table commands/API](https://github.com/radare/radare2/issues/7519)
 - [Repainting screen improvements](https://github.com/radare/radare2/issues/4820)

## Type inference
Currently we have types support in radare2, including basic (low-level) ability to edit type with `pf` and higher-level, C-like types with `t` command. Currently you can parse the C type definition from C header for example, or load from "precompiled" SDB file. Goal of this task is to integrate types handling into the radare2 analysis loop, including automatic inference and suggestions.

### Task
1. Write more tests for `t` commands, fix corresponding bugs
2. Add the ability to apply structure/union types for arguments/return values
3. Add the ability to autosubstitute structure offset where possible (e.g. when you specified function parameter type and it uses it inside)
4. Implement basic (without the need of SMT solver) type inference based on function arguments types, function return types and callgraph

### Skills
Student should know C. And thould be familiar with basics of the program analysis.

### Difficulty
Medium

### Benefits for the student
Student will understand modern program analysis problems related to the type inference, will meet the most common reverse engineering task in its advanced incarnation.

### Benefits for the project
This feature will make radare2 usable for day-to-day reverse engineering of complex programs, and will make integration with radeco decompilator even easier.

### Assess requirements for midterm/final evaluation
- 1st term: Improved test case and fixed bugs. Structure offsets autorecognition.
- 2nd term: Handling of complex nested structures and type inference implementation.
- Final term: Documentation in r2book and commands, working testcases for types inference and offsets recognition

### Mentors
- pancake
- xvilka

### Links/Resources
- C types/SDB properties - [Issue #7710](https://github.com/radare/radare2/issues/7710)
- Calling conventions - [Issue #6856](https://github.com/radare/radare2/issues/6856)
- Array of structs/unions - [Issue #6827](https://github.com/radare/radare2/issues/6827)
- Enums - [Issue #6479](https://github.com/radare/radare2/issues/6479)
- Structure offsets autorecognition - [Issue #9201](https://github.com/radare/radare2/issues/9201)
- [TIE: Principled Reverse Engineering of Types in Binary Programs]()

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
2. dyldcache is broken
3. PE (dos, win, .net) separation
4. Add support for iOS OTA images (see issue)

### Skills
The student should be comfortable with the C language, and be familiar with windows binaries

### Difficulty
Advanced

### Benefits for the student
The student will gain a deep understanding of Microsoft's executable formats.

### Benefits for the project
Currently, there are no up to date modern tools to deal with .Net programs in a low-level manner, when decompilers fail. With this task, we'd like to fill this gap.

### Assess requirements for midterm/final evaluation
- 1st term: Refactoring RBin to support FAT and multibin
- 2nd term: Support of FAT binaries (Win32 native + .NET) with new RBin, basic one
- Final: Also should be working with listing symbols from both parts of the binary (e.g. .NET and native code), as long as other metadata. And show this metadata in rabin2 output as well.

### Mentors
- pancake
- maijin

### Links/Resources
- [Issue #662](https://github.com/radare/radare2/issues/662)
- [Official .Net resources](http://www.microsoft.com/net)

## Proper Windows platform support
Radare2 has a basic support for Windows but not all tests are passing under AppVeyor, debugging has still problems, and some features of radare2 does not work properly. This task consists from some small,
some big unrelated tasks to improve the basic and advanced support of running radare2 on Windows
platform. Note, task require the computer able to run Windows in virtual machine.

### Tasks
1. Fix current features on Windows platform:
   - Debugger: check if it work on Windows XP - 10, native, gdb:// and windbg://
   - Regression tests: make them pass locally
   - Regression tests: run them on AppVeyor automatically (and fix correspondingly)
2. Improve [PDB integration with analysis](https://github.com/radare/radare2/issues/3143) subsystem
3. Improve [WinDbg protocol](https://github.com/radare/radare2/tree/master/shlr/wind) support and integration with analysis
4. Heap analysis (like it is done with `dmh` for glibc)
5. Make signatures for Windows libraries
6. Better support for .dll (analysis and debugger) and kernel drivers loading.
7. Add support of loading all kinds of kernel dumps (if not done through microtasks)
8. Ability to find out WinMain automatically, parsing SEH and RTTI

### Skills
The student should be comfortable with programming under Windows platform. They don't need to have a reverse engineering background, since most of the missing stuff is well documented. As a bonus point it would be interesting if they know some basic assembly.

### Difficulty
Medium. If the student is comfortable with programming for Windows, there shouldn't be major challenges except WinDbg protocol support.

### Benefits for the student
The student will gain experience in writing debuggers for Windows platform. Also, the student will learn the Windows platform crucial parts' internals, related to debugging.

### Benefits for the project
Since radare2 has a better support for emulation and analysis, this will help to migrate from WinDbg to radare2.

### Assess requirements for midterm/final evaluation

The student must finish the regression tests pass stage during the first evaluation. WinDbg protocol support improvements are the requirement to pass the 2nd evaluation. Ability to parse various versions of PDB format + regression tests for them is a final evaluation requirement.

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

## Real time collaboration platform
Radare2 has been a successfull reverse engineering framework and a toolset for years. But apart from the decompilation the biggest missing feature - lack of the real time collaboration, which is important in case of reversing large files, playing CTFs in a teams. There are successfull examples like [collabREate](), [YaCo]() and [solIDArity]() (proprietary/$$$). From public tools collabREate is the most complete and common, and it supports notifications (and online propagation) of those actions:

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
- Flirt function identified (would just be "function renamed") (signature matched)
- Xref add/delete (I don't know what this means)

### Task
1. Implement a simple server in Go to handle connections of multiple radare2 instances
2. Add the users and projects manager to the server
3. Patch the radare2 to add hooks for the most important actions
4. Write a simple unit tests for those hooks for easy testing on Travis CI and AppVeyor

### Skills
Ability to code and understand C and Go (Go can be learnt in a couple weeks though).

### Difficulty
Medium

### Benefits for the student
Student will understand the problems of solving data conflicts in the realtime collaboration
systems, which can be applied in any other domain.
### Benefits for the project
Radare2 will have a long wanted feature for working in teams, reversing big files or collaborative
CTF tasks solving.
### Assess requirements for evaluation
- 1st term: Simple server in Go (with conflict resolution) is up and running + some tests of it
- 2nd term: Add the hooks in radare2 that are can be easily placed, commands for connection to the server
- Final term: The rest of the hooks, autotesting them + server, written documentation (r2book)

### Mentors
- xvilka
- pancake

### Links/Resources
- [Hooks for realtime collaboration](https://github.com/radare/radare2/issues/7410)

## Ropchain generator with ragg2

Since modern architectures are now enforcing [W^X](https://en.wikipedia.org/wiki/W%5EX), exploiters are using [ROP](https://en.wikipedia.org/wiki/Return-oriented_programming). (Un)fortunately, building rop chain by hand can be tedious, this is why some tools can be used to ease this construction: ImmunityDBG has [mona.py](https://www.corelan.be/index.php/2012/12/31/jingle-bofs-jingle-rops-sploiting-all-the-things-with-mona-v2/), there is also [ROPgadget](http://www.shell-storm.org/project/ROPgadget/) and [dropper](https://github.com/rizlik/dropper). It's a shame that despite having [ESIL](https://github.com/radare/radare2/wiki/ESIL), radare2 doesn't have something similar yet.

### Task
1. Implement a "classic" (`/bin/sh` for example) ropchain as a proof-of-concept, like what [ROPgadget](https://github.com/JonathanSalwan/ROPgadget) does. This can be done is almost any language, thanks to the bindings/r2pipe.
2. Caching rop gadgets in SDB, for quicker retrieval
3. Implement a ropchain syntax parser that uses ragg2, or something like:
```
register reg1 = 0;
register reg2 = whatever;
register reg3 = reg1 + reg2;
system(reg3);
```
4. Write a compiler which uses SMT solver (like Z3 for example) to produce the ropchain.

### Skills
The student should be comfortable with the C language, know some assembly and a high-level language. Also, knowing a little bit of automatic binary analysis wouldn’t hurt.

### Difficulty
Medium

### Benefits for the student
The student will improve their skills in software exploitation and solvers.

### Benefits for the project
This feature would greatly help during exploits development, and people would be able to ditch mona.py for radare2 ;)

### Assess requirements for evaluation
- 1st term: ROP gadgets stored in sdb, and gadget classification
- 2nd term: Writing integration with SMT solver and producing SMT constraints
- Final term: Working ropchain compiler, covered by tests and documented in r2book.

### Mentors
- jvoisin

### Links/Resources
- [ROPGadget](http://shell-storm.org/project/ROPgadget/)
- [mona.py](https://www.corelan.be/index.php/2012/12/31/jingle-bofs-jingle-rops-sploiting-all-the-things-with-mona-v2/) from corelan
- [Hunting for ROP Gadgets in Style](https://media.blackhat.com/us-13/US-13-Quynh-OptiROP-Hunting-for-ROP-Gadgets-in-Style-WP.pdf) (2012)
- [dropper](https://github.com/rizlik/dropper) a BARF-based rop chain generator
- [Materials](http://dustri.org/b/files/hacklu2014_r2_exploitation.tar.xz) about the exloitation workshop at Hack.lu 2014
- [Slides](https://github.com/XVilka/hacklu) for the exploitation part of workshop at Hack.lu 2015
- [ROP related bugs](https://github.com/radare/radare2/issues?q=is%3Aissue+is%3Aopen+ROP)

# Rune GSoC (symex engine)

The main motive of the projects of the radare-rust ecosystem is to build a complete binary analysis framework. [rune](https://github.com/radare/rune) aims to be a library with replaceable modules for reasoning about sections of a binary through symbolic execution.

## rune integration with radeco-lib and radare2

This task involves complete integration of the rune backend with radeco-lib and radare2.

### Task

* Refactor existing code to import abstractions defined in radeco-lib to isolate common logic across multiple projects. As an instance: rune should use containers defined in [radeco_containers](https://github.com/radare/radeco-lib/blob/master/src/frontend/radeco_containers.rs).
* Set up a test-suite to check correctness and fix bugs across module integrations. This suite can contain binaries with deterministic output to check overall state across multiple stages during the execution run.
* Implement rerune - a new `Engine` module operating over radeco-lib's SSA-based intermediate representation. radeco-lib allows the user to perform multiple analyses over the generated IR. This `Engine` implementation should leverage information made available through the rich set of APIs and perform sound (or correct) symbolic execution.
( We highly recommend the student to give some thought to the high-level design before writing the proposal )
* Discuss, define and implement communication channels between radare2 - radeco-lib - rune to exchange information. Research shows that decompilers can make use of techniques like SMT solving to derive types for certain identified variables in the binary. We aim to have radeco-lib and rune interact with each other to develop better analyses across both projects.
* rune should be made available through r2pm with functionality to symbolically execute over sections of code (with the user being in complete control of the various modules used such as the choice of the `Explorer`, `Context` state, etc.) and provide results.

### Skills
The student should be familiar with Rust and symbolic execution basics or be able to learn it quickly.

### Difficulty
Advanced

### Benefits for the student
The student will learn working with an experimental symbolic engine in its early stages of development. They would also involve themselves in understanding more about different program analysis techniques and their implementation.

### Benefits for the project
This task allows rune to develop into a mature project. Apart from being a side-project under the radare umbrella, completion of the said tasks above would make it ready for use by the community.

### Mentors
- sushant
- xvilka

### Assess requirements for midterm/final evaluation
- 1st term: The refactor phase should be completed and rune should have a well-defined test suite.
- 2nd term: Implementation of the new `Engine` module should be complete.
- Final term: rune should be avaialble through r2pm, with a well-defined interface through radare2. The project should be stable with regression (and unit) tests and updated documentation. It should be able interact with radeco-lib for improving overall analyses.

### Links/Resources
 - (Resources for getting acquainted with the project can be found on the tasks page)
 - [Rune](https://github.com/radare/rune)
 - [Rune issues](https://github.com/radare/rune/issues)
 - [Relevant papers](https://drive.google.com/drive/folders/0B1X32SwXTZPuYWwxWW5BNi1oWDA?usp=sharing)
