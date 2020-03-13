# Project Ideas

### INDEX

# Radare2

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
- [Type Analysis Improvements Project](https://github.com/radareorg/radare2/projects/19)
- [META - Analysis improvements](https://github.com/radareorg/radare2/issues/4868)
- [META - VTable detection](https://github.com/radareorg/radare2/issues/6851)
- [META - Rethink types storage](https://github.com/radareorg/radare2/issues/10905)
- C types/SDB properties - [Issue #7710](https://github.com/radareorg/radare2/issues/7710)
- Extract types info from PDB and DWARF - [Issue #6856](https://github.com/radareorg/radare2/issues/3143)
- Load variable names from DWARF and PDB - [Issue #7863](https://github.com/radareorg/radare2/issues/7863)
- DWARF types information - [Issue #774](https://github.com/radareorg/radare2/issues/774)
- Load types information - [Issue #741](https://github.com/radareorg/radare2/issues/741)
- More DWARF information - [Issue #2079](https://github.com/radareorg/radare2/issues/2079)
- Constrained types - [Issue #11828](https://github.com/radareorg/radare2/issues/11828)
- [TIE: Principled Reverse Engineering of Types in Binary Programs](https://www.ndss-symposium.org/wp-content/uploads/2017/09/lee.pdf)
- [HexRaysCodeXplorer](https://github.com/REhints/HexRaysCodeXplorer)
- [Virtuailor](https://github.com/0xgalz/Virtuailor) - vtables reconstruction based on runtime information
- [Pharos - types inference with Prolog](https://github.com/cmu-sei/pharos)

## CPU/Platform profiles
While instruction set defines architecture, it is common that particular CPU or SoC models implement only a subset of it or extend it with custom instructions and registers. Moreover, various SoC modifications can define peripheral devices interaction through ports (rare), registers or MMIO spaces. All this helps the reverse engineering process, because a lot of the code will make sense upon a glance once you see it accesses certain registers (if named) or peripheral devices (when MMIO area is defined). A common example is [SVD loading](https://github.com/leveldown-security/SVD-Loader-Ghidra) for ARM architecture.

### Task
1. Implement support for CPU profiles - see [#8467](https://github.com/radareorg/radare2/issues/8467)
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

## Radiff2 improvements
Radare2 has had the ability to perform binary diffing for over a decade. Nevertheless the support is quite basic and there is room for improvement. One of the most important tasks is to deepen the integration with analysis loop. Integration with the analysis loop will allow radare2 to find and highlight the difference between arguments count, local variables count, their types and other analysis metainformation. The next big task is to modernize radiff2 (and corresponding parts in RCore) in terms of performance and user interface. And of course - cover the radiff2 and radare2 diffing features with regression tests and unit tests.

### Tasks
- Support diffing of the different parts of the same buffer/file
- Split view for [hexadecimal view](https://github.com/radareorg/radare2/issues/8115) and disassembly diffing mode
- Improve the integration with analysis (variables and types differences)
- Integrate ESIL and decompilation ([r2ghidra](https://github.com/radareorg/r2ghidra-dec), [r2dec](https://github.com/radareorg/r2dec-js)) pseudocode as an options for binary diffing
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
- [Code Diffing Project](https://github.com/radareorg/radare2/projects/29)
- [META - Radiff2](https://github.com/radareorg/radare2/issues/6971)
- [Radiff2-labeled issues](https://github.com/radareorg/radare2/labels/radiff2)
- [Signature-labeled issues](https://github.com/radareorg/radare2/labels/zignatures)
- Cutter: Diffing interface feature request [#1104](https://github.com/radareorg/cutter/issues/1104)
- [PatchDiff2](https://github.com/filcab/patchdiff2)
- [BinDiff](https://www.zynamics.com/bindiff.html)
- [Diaphora](https://github.com/joxeankoret/diaphora)
- [SimHash](https://github.com/googleprojectzero/functionsimsearch)

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
- [Issue #662](https://github.com/radareorg/radare2/issues/662)
- [RBin refactoring project](https://github.com/radareorg/radare2/projects/11)
- [Official .Net resources](http://www.microsoft.com/net)

## Exploitation capabilities improvements

Since modern architectures are now enforcing [W^X](https://en.wikipedia.org/wiki/W%5EX), exploiters are using [ROP](https://en.wikipedia.org/wiki/Return-oriented_programming). (Un)fortunately, building ROP chain by hand can be tedious, this is why some tools can be used to ease this construction: ImmunityDBG has [mona.py](https://www.corelan.be/index.php/2012/12/31/jingle-bofs-jingle-rops-sploiting-all-the-things-with-mona-v2/), there is also [ROPgadget](http://www.shell-storm.org/project/ROPgadget/) and [dropper](https://github.com/rizlik/dropper).There exist even tools that can generate ROP chains automatically, for example [exrop](https://github.com/d4em0n/exrop). It's a shame that despite having [ESIL](https://github.com/radare/radare2/wiki/ESIL), radare2 doesn't have something similar yet. One of the possible solutions would be to build an external plugin or tool which will reuse power of libr and ragg2. Moreover it makes sense to think about SROP, COOP and BROP support.

The `ragg2` tool while has the ability to create a custom shellcode has the outdated database of the shellcodes, so [updating them](https://github.com/radareorg/radare2/issues/14769) is crucial for the tool to be relevant.

### Task
1. Update the shellcodes database, imrove `ragg2` features and documentation
2. Implement a ropchain syntax parser that uses `ragg2` or a custom DSL, something like:
```
register reg1 = 0;
register reg2 = whatever;
register reg3 = reg1 + reg2;
system(reg3);
```
3. Write a compiler which uses SMT solver (like Z3 for example) to produce the ropchain.
4. Support main architectures - x86, ARM, MIPS, PowerPC

### Skills
The student should be comfortable with the C language, know some assembly and a high-level language. Also, knowing a little bit of automatic binary analysis wouldn’t hurt.

### Difficulty
Advanced

### Benefits for the student
The student will improve their skills in software exploitation and solvers.

### Benefits for the project
This feature would greatly help during exploits development, and people would be able to ditch mona.py for radare2 ;)

### Assess requirements for evaluation
- 1st term: Creating the language for defining the ROP chain semantics
- 2nd term: Writing integration with SMT solver and producing SMT constraints
- Final term: Working ropchain compiler, covered by tests and documented in r2book.

### Mentors
- xvilka
- pancake

### Links/Resources
- [Exploitation project in radare2](https://github.com/radareorg/radare2/projects/24)
- [ROPGadget](http://shell-storm.org/project/ROPgadget/)
- [Ropper](https://github.com/sashs/Ropper)
- [Angrop](https://github.com/salls/angrop)
- [ROPC](https://github.com/pakt/ropc)
- [exrop](https://github.com/d4em0n/exrop)
- [roper2](https://github.com/oblivia-simplex/roper2)
- [mona.py](https://www.corelan.be/index.php/2012/12/31/jingle-bofs-jingle-rops-sploiting-all-the-things-with-mona-v2/) from corelan
- [Hunting for ROP Gadgets in Style](https://media.blackhat.com/us-13/US-13-Quynh-OptiROP-Hunting-for-ROP-Gadgets-in-Style-WP.pdf) (2012)
- [dropper](https://github.com/rizlik/dropper) a BARF-based rop chain generator
- [Materials](http://dustri.org/b/files/hacklu2014_r2_exploitation.tar.xz) about the exloitation workshop at Hack.lu 2014
- [Slides](https://github.com/XVilka/hacklu) for the exploitation part of workshop at Hack.lu 2015
- [ROP related bugs](https://github.com/radareorg/radare2/labels/ROP)

# Cutter

## Plugins and Python High Level API

We currently don't have API almost for plugin authors to use. We need to improve a lot of things about our Plugins support and take it few steps ahead.

### Task
 - Expose everything Cutter can offer for plugins authors. This includes high level API, integration of the plugin management etc.
 - Accessing everything from Python (like Blender) - see [issue #1662](https://github.com/radareorg/cutter/issues/1662)
 - Python integration and IPython console.

### Skills
The student should be comfortable with the C++ and Python languages, and be familiar with Qt framework

### Difficulty
Advanced

### Benefits for the student
The student will gain an experience of creating a suitable API for scripting graphical interface
programs.

### Benefits for the project
It will greatly improve the scripting experience, will make API more consistent and will ease
creating Cutter plugins by the community. Moreover, it will simplify testing of the Cutter features.

### Assess requirements for midterm/final evaluation
- 1st term: Design of the high level API and required radare2 changes
- 2nd term: Review and implement all missing API functions that are accessible as interface controls
- Final term: Implement the way to show the API when hovered over some interface control, create documentation.

### Mentors
- thestr4ng3r
- Megabeets

### Links/Resources
- [SDB Module/API for Cutter Python/Jupyter integration](https://github.com/radareorg/cutter/issues/1778)
- [Jupyter plugin for Cutter](https://github.com/radareorg/cutter-jupyter)



## Decompiler Widget
In recent years, the Decompiler has become an almost essential features for reverse-engineers. It takes the disassembly and turns it into a readable C program.
Cutter has a Decompiler widget in which several decompiler plugins can show the decompiled output. The curretnly supported decompilers are
[Ghidra](https://github.com/radareorg/r2ghidra-dec), [r2dec](https://github.com/radareorg/r2dec-js), and [retdec](https://github.com/avast/retdec-r2plugin/tree/master/cutter-plugin).

The current Decompiler widget provides only basic features and interaction, and it is far from being as advanced as IDA's or Ghidra's views.

The following task aims to take the Decompiler usage experience in Cutter to the next steps to be as good as in Hex-Rays and Ghidra. This is a highly demanded features from our users.

### Skills
The student should be comfortable with the C++, and be familiar with Qt framework.


### Difficulty
Advanced


### Tasks
This is a big task and among others, it contains the following sub-tasks:

 - Create a context menu for the decompielr widget. Currently is is using the Disassembly context menu and does not have its own context menu.
 - Allow editing of function names, local variables, arguments, function types, and more
 - Support cross references cross-functions and for variables in function.
 - Improve usage of structs and types
 - Improve the implementation of [r2ghidra-dec](https://github.com/radareorg/r2ghidra-dec)
 - Allow setting immediate base
 - Enable Syntax Highlighting (KSyntaxHighlighting) by default on Windows builds
 - Add a dedicated notification and warning are in the widget, for decompilation warnings.
 - Add public API for scripting
 - Mouse hover on debug mode will show the memory values
 - and more...

### Mentors
- thestr4ng3r
- Megabeets


## Debugger

Recently, Cutter introduced an implementation of a cross-platform debugger. The initial introduction of the debugger was a huge success and received good feedback from the commuity. However, the feature-set is currently in Beta and many features can be implemented and improved. This will help our user to have the best debugging experience.


### Skills
The student should be comfortable with the C++ for Cutter and C for radare2. The student should be familiar with Qt framework.


### Difficulty
Advanced


### Tasks
Since debugger is a big project for Cutter, we described its specifications in a dedicated [hackmd file](https://hackmd.io/__K1e8IaRpSrcrYWTF5gNQ) which is still a work in progress, That said, here are some of the subtasks that are part of this task.


 - Add support for macOS
 - Support execution of python code on breakpoints hit
 - Show memory values while hovering on operands
 - Add signal handling manager
 - Add reverse debugging
 - Add Memory map view including duming and modifying of memory dumps
 
 More information could be find in the hackmd file linked above.


### Mentors
- Yossizap
- Karliss
- Megabeets



## Multi-Tasking and Event-driven

Cutter is a reverse engineering framework that is powered by radare2. The information it gets about functions, strings, imports, and the analysis are all performed in radare2 and displayed in Cutter. Currently, Cutter is pulling information from radare2 only on demand. This is problematic because sometimes the user performs changes (via plugins, the console widget, and more), that are affecting the information from radare2, but Cutter doesn't know about these changes to apply the to the UI. For example, if  a user will define a new function in a Python script or via the console widget by using the radare2 commadn `af @ <addr>`, Cutter will now show this new function in the Functions widget until the user will refresh the interface manually (edit -> Refresh Contents).

In addition, this task will also handle the analysis in the background feature, to allow the analysis performed by radare2 to happen while the interface is active.

### Skills
The student should be comfortable with the C++ for Cutter and C for radare2. The student should be familiar with Qt framework.


### Difficulty
Advanced


### Tasks
The overall implementation of this taks should start from radare2 by adding events to many of the functions. This can be done using r_events. For example, add an even for function creating, for section creation, for flag deletion, for name changed, and more

- Add events to all the relevant functions inside radare2
- Add support for these events in Cutter and refresh and update the relevant widgets per each event
- Support analysis in the background and allow the user to start its session while radare2 is analyszing (see [#1856](https://github.com/radareorg/cutter/issues/1856), [#1574](https://github.com/radareorg/cutter/issues/1574))

### Mentors
- thestr4ng3r
- Karliss



## Exploitation
More and more vulnerability researchers are starting to use Cutter as their RE platform. This task aims to make Cutter a swiss-knife for exploitation tasks. By taking advantage of the ragg2 utility from radare2, and adding more features, Cutter can be the go-to tool for writing exploits from the GUI.

### Skills
The student should be comfortable with the C++ for Cutter and C for radare2. The student should be familiar with Qt framework.

### Difficulty
Advanced


### Tasks

- Add support for ragg2 functionalities from inside Cutter
- Improve ROP gadget finder
- Create a ROP gadget builder
- Add Shellcode injector
- Add De-Bruijn pattern support and pattern matching (wopD)
- Search for writable function pointers in debug

### Mentors
- Megabeets
- xvilka

## Heap viewer

We already have a nice heap (and memory map) parser and visualizer in radare2 (`dm` and `dmh` commands). After debugging becomes a first-class citizen in cutterland it would be awesome to have memory map and heap visualizations.

### Task
 - Expose radare2 API/commands for Cutter to use for visualization
 - Design and implement heap navigation and inspection widgets
 - Provide the integration with current debugging mode in Cutter
 - Make the implementation work with both local (native) and remote debugging modes

### Skills
The student should be comfortable with the C++, and be familiar with Qt framework

### Difficulty
Medium

### Benefits for the student
The student will gain the understanding on how modern runtimes provide the heap for various
programs, which will be beneficial for the binary exploitation skills.

### Benefits for the project
It will greatly improve the debugging and reverse engineering experience for complex programs,
also provides the way to design the exploitation techniques with the help of radare2/Cutter.

### Assess requirements for midterm/final evaluation
- 1st term: Design and implement heap visualization widgets
- 2nd term: Make corresponding radare2 fixes and changes for the navigation to work
- Final term: Various bugfixes related to the heap inspection support on various platforms and allocators, tests and documentation.

### Mentors
- xvilka
- Megabeets

### Links/Resources
- [Issue #1041](https://github.com/radareorg/cutter/issues/1041)
- [Heap Viewer plugin for IDA Pro](https://github.com/danigargu/heap-viewer)
- [META - Heap Explorer/Analysis](https://github.com/radare/radare2/issues/5390)
- [Dynamic Allocator Detection](https://github.com/radare/radare2/issues/8185)
- ["heap"-marked radare2 issues](https://github.com/radareorg/radare2/labels/heap)

## Diffing mode

Binary diffing is one of the most common tasks for the reverse engineer. There are many various
tools available, but most of them are either detached from the main RE toolbox or poorly integrated.
Radare2 provides basic diffing features out of the box with `radiff2` tool, but Cutter has no
interface to represent similar functionality.

### Task
- Expose basic `radiff2` features in the Cutter
- Create the interface to choose two files for diffing
- Create the way to show the differences in all main widgets:
	- Hexadecimal view
	- Disassembly view
	- Graph view
	- Pseudocode view

### Skills
The student should be comfortable with the C++ language, and be familiar with Qt framework

### Difficulty
Advanced

### Benefits for the student
The student will gain an experience of creating efficient graphical interfaces.

### Benefits for the project
It will greatly benefit the project since Cutter will be the only FOSS RE tool to provide this
feature out of the box.

### Assess requirements for midterm/final evaluation
- 1st term: Expose the `radiff2` features in the Cutter core and create the interface for opening
	files for diffing.
- 2nd term: Implement the diff modes for hexadecimal and disassembly views
- Final term: Implement the diff modes for graph and pseudocode views, create the documentation.

### Mentors
- xvilka
- Megabeets

### Links/Resources
- [Code Diffing Project (radare2)](https://github.com/radareorg/radare2/projects/29)
- [Issue #1104](https://github.com/radareorg/cutter/issues/1104)
- [BinDiff](https://www.zynamics.com/bindiff.html)
- [Diaphora](https://github.com/joxeankoret/diaphora)

## Debugging and reverse debugging improvements (both radare2 and Cutter)

Radare2 already [supports](https://radare.gitbooks.io/radare2book/content/debugger/revdebug.html) a basic "Record and Replay" feature, similar to gdb's process recorded. The reverse debugger is designed to work by logging the execution of each machine instruction in the debugee, together with each corresponding change in machine state (the values of memory and registers). While the feature exists, it is still basic and somewhat unstable.
Also, radare2 includes support for reverse debugging gdbserver based targets with reverse debugging support.
A good [recent example from Tetrane](https://blog.tetrane.com/2019/11/17/Analyzing_an_Out_of_Bounds_read_in_a_TTF_font_file.html)
which shows the workflow of working with reversible debugging. Another part of the task will be improving existing GDB/LLDB remote debugging implementation along with WinDbg improvements. Recently WinDbg added support for the record and replay, supporting it would be beneficial for radare2 and Cutter users. Currently, radare2 only supports WinDbg debug over the unencrypted serial protocol using windows/qemu pipes. To improve our Windows debugging capabilities we would like to add proper ethernet WinDbg protocol support to reach remote targets and improve the user experience.
This task will require reverse engineering of WinDbg's protocol using programs like [windbgshark](https://github.com/CyberTech/windbgshark) which will also require decryption and encryption of protocol packets.

#### Tasks

- Solve stability issues in the current implementation of reverse debugging in radare2 and Cutter
- Log and handle syscalls
    - Detect blocked system calls
    - Add state restoration of kernel handles after reverting certain syscalls
    - Add ptrace emulation
- Properly record signal arrivals and emulate sigprocmask behavior
- Properly record nondeterministic instructions such as RDTSC and RDRAND
- Reduce trace sizes and recording performance
- Implement WinDbg Ethernet protocol support [#1246](https://github.com/radareorg/radare2/issues/1246)
- Support record and replay in GDB, LLDB, and WinDbg protocols handling
- Implement DLL debugging - add an option to debug a DLL directly using a generic that you'll have to implement. This should include the ability to call the DLL's functions with user-set stack and register values.

### Skills
The student should be comfortable with the C and C++ languages, basic Qt framework knowledge will be
beneficial.

### Difficulty
Advanced

### Benefits for the student
The student will gain an experience of understanding modern debugging techniques and tools,
understanding how debugging works "under the hood", and will practice on creating useful interfaces
for debugging tools.

### Benefits for the project
It will greatly benefit the project since Cutter will be the only FOSS RE tool to provide this
feature out of the box.

### Assess requirements for midterm/final evaluation
- 1st term: Make the current radare2 and Cutter implementation of reversible debugging stable.
- 2nd term: Support reversible debugging in all debugger plugins (native Linux/Windows/MacOS, GDB/LLDB, WinDbg)
- Final term: Improve Cutter interface, performance of the reversible debugging, adding support for
	debugging DLLs, documentation and tests.

### Mentors
- xvilka
- Megabeets
- yossizap

### Links/Resources
- [WIP PR for Cutter adding Reversible Debugging](https://github.com/radareorg/cutter/pull/1918)
- [Record and Replay radare2 Project dashboard](https://github.com/radareorg/radare2/projects/25)
- [Debugger radare2 Project dashboard](https://github.com/radareorg/radare2/projects/4)
- [Cutter Debugger Project dashboard](https://github.com/radareorg/radare2/projects/18)
- [Wireshark WinDbg protocol dissector - KDNET](https://github.com/Lekensteyn/kdnet)
- [VirtualKD](http://sysprogs.com/legacy/virtualkd/)
- [WinBagility KD implementation](https://github.com/Winbagility/Winbagility/tree/master/src/Winbagility)
- [Tetrane REVEN timeless debugger](https://www.tetrane.com/)

# R2Ghidra

## SLEIGH Disassembler Backend

The release of the Ghidra reverse engineering suite has had a great impact on the reverse engineering landscape in the sense that it instantly became highly popular. For disassembling raw binary data, it uses an interesting special purpose language called SLEIGH to define all of its supported instruction sets. Because of the mentioned popularity, many SLEIGH modules for various architectures have been written by users of the tool.

### Tasks

The goal is to integrate SLEIGH as a disassembly backend into radare2. This will make it possible to directly support all architectures that are supported by Ghidra, but also take advantage of the interface, analysis and flexibility of radare2.
A similar project that has been successful is the existing integration of Ghidra's decompiler into radare2, r2ghidra-dec. The C++ code of this decompiler includes a full implementation of the SLEIGH-based disassembly engine. A proof-of-concept of disassembling using this engine is already available as the `pdgsd` command. This task should thus be implemented in r2ghidra's codebase.
Radare2's disassembly is based on plugins, which expose C functions that, given raw binary data, return the corresponding disassembled instruction along with additional information about its semantics. One such plugin should be implemented that will use SLEIGH.
As an optional task, a translator from P-code, Ghidra's intermediate language for analysis, to ESIL, which is radare2's intermediate language, can be implemented. This will enable additional features, such as emulation and emulation-based analysis.

### Skills
The student should know have good C and C++ skills. Knowledge about SLEIGH, P-code and ESIL is not a necessity, but a plus.

### Difficulty
Medium

### Benefits for the student
The student will gain deep insight in the SLEIGH disassembly engine, as well as intermediate languages used for program analysis.

### Benefits for the project
Radare2 will be able to reuse any architecture module that has been created for the Ghidra framework.

### Assess requirements for midterm/final evaluation
- 1st term: The basic RAsm and RAnal plugins are implemented and disassembly in text form is displayed through radare2's default disassembly pipeline. Partial instruction semantics information is provided by the anal plugin.
- 2nd term: The RAnal plugin provides all information about instruction semantics to perform automatic analysis.
- Final term: Regression- and Unit Tests are written. (Optional: P-code to ESIL translation is implemented)

### Mentors
- thestr4ng3r
- Megabeets
- pancake
- xvilka

### Links/Resources
- [r2ghidra-dec Git Repository](https://github.com/radareorg/r2ghidra-dec)
- [r2ghidra-dec Commit that introduced PoC SLEIGH disassembly](https://github.com/radareorg/r2ghidra-dec/commit/5ad9cdbeccb81dcd8e3da8e2177cfeda088ad41c)
- [SLEIGH Documentation](https://ghidra.re/courses/languages/html/sleigh.html)


