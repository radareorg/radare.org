# Project Ideas

### INDEX

## Radare2

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
- [TIE: Principled Reverse Engineering of Types in Binary Programs]()
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

## R2Ghidra - SLEIGH Disassembler Backend

The release of the Ghidra reverse engineering suite has had a great impact on the reverse engineering landscape in the sense that it instantly became highly popular. For disassembling raw binary data, it uses an interesting special purpose language called SLEIGH to define all of its supported instruction sets. Because of the mentioned popularity, many SLEIGH modules for various architectures have been written by users of the tool.

### Tasks

The goal is to integrate SLEIGH as a disassembly backend into radare2. This will make it possible to directly support all architectures that are supported by Ghidra, but also take advantage of the interface, analysis and flexibility of radare2.
A similar project that has been very successful is the existing integration of Ghidra's decompiler into radare2, r2ghidra-dec. The C++ code of this decompiler includes a full implementation of the SLEIGH-based disassembly engine. A proof-of-concept of disassembling using this engine is already available as the `pdgsd` command. This task should thus be implemented in r2ghidra's codebase.
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
- 1st term: The basic asm and anal plugins are implemented and disassembly in text form is displayed through radare2's default disassembly pipeline. Partial instruction semantics information is provided by the anal plugin.
- 2nd term: The anal plugin provides all information about instruction semantics to perform automatic analysis.
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


