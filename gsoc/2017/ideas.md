# Project Ideas

### INDEX

## Completing Radeco
radeco, a radare2 based decompiler, was a project that was started in GSoC'15, and continued in GSoC'16. Currently, radeco features a ESIL to SSA IL converter, skeleton of C emitter and a  few optimisations to the IR. The task for this year is to complete the full process of the decompiler (from binary to C pseudo-code). This involves several tasks which are listed below. Note that some of these tasks are large and are listed to give students a complete view of the requirements of this project. A potential student is required to discuss these with the mentors and pick some tasks to write their proposals for GSoC'17. Being a relatively new project under the radare banner, this project also gives student an opportunity to learn, design and discuss the architectural aspects of the project.

### Tasks
 - finishing radecoIL to higher level pseudo/C code writer. This task is the highest priority as it would give us a chance to evaluate the quality of the produces code, receive feedback from the community and aim our efforts in the improving the same in further iterations.
 - Control graph restructuring and reshaping - external API to do that
 - Implement GOTO elimination in radecoIL
 - Type inference - should be in sync with radare2 internal types and arguments analysis (see aft\* commands)
 - Continuing on the same lines of the previous task, it would be nice to layout graphs like a CFG. The current dot emitter gives complete freedom to graphviz to layout the graph, which results in sub-optimal layout of the graph. This task is to improve this and make it more intuitive and readable.
 - Setup a primitive logging framework for radeco. This allows us to debug and follow the steps of the decompiler easier in order to reason about the process and perform optimisation (not just time but also quality of the output).
 - Full integration with radare2 shell. This shell should allow users to interact with the entire decompilation process and modify any stages if necessary. Additional features like graph colouring / marking would also be a nice bonus.
 - Support of loading information, like variable values, memory regions and so on, into radeco, to
   improve the analysis and decompilation restuls
 - Port some basic analysis such as function recognition from radare2. radeco is in a much better place to implement such analysis. It would be better to implement this in radeco so that we do not have to depend on radare2 for function recognition and also return the results back to radare2.

Additionally, the students are also expected to detail their architecture (in the wikis) and write tests and documentation for any features that they contribute.

### Skills
Knowledge of working of compilers and program analysis (or an interest to learn these quickly)
Some knowledge of rust is an added bonus. A potential student must be willing to learn rust in order to contribute to this project.
Some knowledge of common ISA such as x86, x86_64, ARM.

### Difficulty
Advanced

### Benefits for the student
- General idea about compiler/decompiler working model
- Usage of the Intermediate Languages
- Binary code analysis

### Benefits for the project
Finally, radare2 will have its own retargetable decompiler, which will cover a wide range of architectures.

### Assess requirements for midterm/final evaluation
For the midterm evaluations, the student is expected to have completed the C/pseudo code emitter and obtain the first set of results.
The final evaluation requires students to have improved the quality of the generated code and have a working type inference system.

### Mentors
- crowell
- xvilka

### Links/Resources

- [Radeco-lib](https://github.com/radare/radeco-lib)
- Radeco-lib [issues](https://github.com/radare/radeco-lib/issues)
- [Papers about decompilation](https://drive.google.com/drive/folders/0B1X32SwXTZPuYWwxWW5BNi1oWDA?usp=sharing)

## Ropchain generator with ragg2

Since modern architectures are now enforcing [W^X](https://en.wikipedia.org/wiki/W%5EX), exploiters are using [ROP](https://en.wikipedia.org/wiki/Return-oriented_programming). (Un)fortunately, building rop chain by hand can be tedious, this is why some tools can be used to ease this construction: ImmunityDBG has [mona.py](https://www.corelan.be/index.php/2012/12/31/jingle-bofs-jingle-rops-sploiting-all-the-things-with-mona-v2/), there is also [ROPgadget](http://www.shell-storm.org/project/ROPgadget/) and [dropper](https://github.com/rizlik/dropper). It's a shame that despite having [ESIL](https://github.com/radare/radare2/wiki/ESIL), radare2 doesn't have something similar yet.

### Task
1. Implement a "classic" (`/bin/sh` for example) ropchain as a proof-of-concept, like what [ROPgadget](https://github.com/JonathanSalwan/ROPgadget) does. This can be done is almost any language, thanks to the bindings/r2pipe.
2. Caching rop gadgets in SDB, for quicker retrieval
3. Implement a ropchain generator that uses ragg syntax, or something like:
```
register reg1 = 0;
register reg2 = whatever;
register reg3 = reg1 + reg2;
system(echo reg3);
```

### Skills
The student should be comfortable with the C language, know some assembly and a high-level language. Also, knowing a little bit of automatic binary analysis wouldn’t hurt.

### Difficulty
Medium

### Benefits for the student
The student will improve their skills in software exploitation and solvers.

### Benefits for the project
This feature would greatly help during exploits development, and people would be able to ditch mona.py for radare2 ;)

### Assess requirements for midterm/final evaluation
midterm: ROP gadgets stored in sdb, and gadget classification
final evaluation: a working ropchain builder

### Mentors
- jvoisin
- crowell

### Links/Resources
- [ROPGadget](http://shell-storm.org/project/ROPgadget/)
- [mona.py](https://www.corelan.be/index.php/2012/12/31/jingle-bofs-jingle-rops-sploiting-all-the-things-with-mona-v2/) from corelan
- [Hunting for ROP Gadgets in Style](https://media.blackhat.com/us-13/US-13-Quynh-OptiROP-Hunting-for-ROP-Gadgets-in-Style-WP.pdf) (2012)
- [dropper](https://github.com/rizlik/dropper) a BARF-based rop chain generator
- [Materials](http://dustri.org/b/files/hacklu2014_r2_exploitation.tar.xz) about the exloitation workshop at Hack.lu 2014
- [Slides](https://github.com/XVilka/hacklu) for the exploitation part of workshop at Hack.lu 2015
- [ROP related bugs](https://github.com/radare/radare2/issues?q=is%3Aissue+is%3Aopen+ROP)

## Improve remote debugging with GDBServer and RAP

Having a reusable implementation of gdbserver in r2 will be useful because it means that r2 will be able to be used from IDA, GDB or LLDB as frontend. And being able to use r2 too to communicate with a remote r2 instance with better integration for remote debugging.

Also, the current r2 remote debugging is done via rap:// which is just a plain io+system protocol. it will be good to support a remote debugging via serializing r2 commands so we need a debug_rap plugin.

### Task
- Implement simple GDB packets parser for server side
- Merge/share this code with [shlr/gdb](https://github.com/radare/radare2/tree/master/shlr/gdb)
- Add support for:
  - registers access
  - memory access
  - breakpoints
  - single stepping
  - kill signal for the target
  - handling threaded applications
- Think about shareable between server and client register and platform profiles
- Implement those profiles for:
  - x86 (x86_64)
  - ARM (ARM64)
  - MIPS
  - PowerPC
  - other common architectures

### Skills
Student should know C, have some experience with socket/network programming and a general idea about how debuggers works

### Difficulty
Advanced

### Benefits for the student
The student will understand how most of the remote debugging works "under the hood". And will have general knowledge about writing mutiplatfform debuggers, as like as bits of network programming.

### Benefits for the project
The fact we have our own gdbserver implementation will help us to improve GDB protocol on both client and server sides, which will make the testing protcol parser easier. Also radare2 would not rely on the non-standard debug protcols for exotic platforms, since it would be easier to port radare2 gdbserver on that platform.

### Assess requirements for midterm/final evaluation
Midterm will be successfull if the simpe gdbserver, working via sockets will be able to talk with radare2 and gdb
Final evaluation will require gdbserver which should work at least on x86, arm, mips and powerpc platforms, able to answer radare2, gdb, lldb and IDA Pro rquests.

### Mentors
- pancake
- xvilka

### Links/Resources
- [GDB remote protocol specification](https://sourceware.org/gdb/onlinedocs/gdb/Remote-Protocol.html)
- [GDB protocol parser](https://github.com/radare/radare2/tree/master/shlr/gdb)
- [WinDbg protocol parser](https://github.com/radare/radare2/tree/master/shlr/wind)
- [Issue #1773](https://github.com/radare/radare2/issues/1773)

## Timeless debugging support
We want to add support for timeless debugging in r2. This requires to design and implement a generic API that would allow to load recorded tracing sessions from tools like rr, QIRA or r2 itself. r2 can’t create tracing sessions and it should be implemented in the debugging component of our tool. We already have support for debugging snapshots, so those actions should be available as callbacks in the debugger plugins, and provide some basic commands to specify which snapshot to get or set.

### Task
1. Read/write memory at any moment in the debugging history
2. Same for registers
3. Be able to seek forward/backward in time
4. Implement step back command (dsb)

### Skills
Student should know C and C++ (for integration with tools like RR or Qira).
And should be familiar with the ideas of reversible debugging along with the knowledge how debuggers are working.

### Difficulty
Advanced

### Benefits for the student
Student will meet a relatively new approach to debug and searching errors, along with an opportunity to gather experience of optimizing algorythms to be able work with a huge amount of data, which is a definetely a case for timeless debug.

### Benefits for the project
Timeless and reversible debugging will help radare2 to become an universal debug tool for quick and easy inspection of trace snapshots, based on RR or Qira sessions.

### Assess requirements for midterm/final evaluation
Midterm: design and implementation of the interface and commands to work with traces taken from QIRA and RR.
Final: Add the plugin for timeless debugging feature inside r2.

### Mentors
- pancake
- alvaro_fe

### Links/Resources
- [RR](http://rr-project.org/) - Record and Replay framework from Mozilla
- RR [sources](https://github.com/mozilla/rr)
- [Qira](http://qira.me/)
- Qira [sources](https://github.com/BinaryAnalysisPlatform/qira)

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
Midterm: Support of FAT binaries (Win32 native + .NET) in RBin, basic one
Final: Also should be working with listing symbols from both parts of the binary (e.g. .NET and native code), as long as other metadata. And show this metadata in rabin2 output as well.

### Mentors
- pancake
- alvaro_fe

### Links/Resources
- [Issue #662](https://github.com/radare/radare2/issues/662)
- [Official .Net resources](http://www.microsoft.com/net)

## Proper Windows platform support
Radare2 has a basic support for windows but tests are still not passing under AppVeyor, debugging has still problems,
and some features of radare2 does not work properly or [at all](https://github.com/radare/radare2/issues/4163). This task consists from some small,
some big unrelated tasks to improve the basic and advanced support of running radare2 on Windows
platform

### Tasks
1. Fix current features on Windows platform:
   - Debugger: check if it work on Windows XP - 10.
   - Regression tests: make them pass locally
   - Regression tests: run them on AppVeyor automatically
2. Improve [PDB loading](https://github.com/radare/radare2/issues/3128) support and [integration with analysis](https://github.com/radare/radare2/issues/3143) subsystem
3. Make zignatures for Windows libraries
4. Better Support for .dll (analysis and debugger)
5. Ability to find out WinMain automatically, parsing SEH and RTTI
6. Improve [WinDbg protocol](https://github.com/radare/radare2/tree/master/shlr/wind) support and integration with analysis
7. Add support of loading all kinds of user mode minidumps and kernel dumps

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
- [Related issues](https://github.com/radare/radare2/labels/Windows) on github
- [PDB format](http://llvm.org/docs/PDB/index.html) description (LLVM project)
- [PyKD](https://pykd.codeplex.com/) - WinDbg extension via Python tools
- [KDnet](https://github.com/Lekensteyn/kdnet) - Windows kernel debugging over Network
- [VirtualKD](http://virtualkd.sysprogs.org/) debugger
- [WinAppDbg](https://github.com/MarioVilas/winappdbg) debugger
- [MEX](https://blogs.msdn.microsoft.com/luisdem/2016/07/19/mex-debugging-extension-for-windbg-2/) debugging extensions for WinDbg
- [KarmaDbg](https://karmadbg.codeplex.com/) - PyKD extension
- [WinDbg extensions
  list](https://github.com/lowleveldesign/debug-recipes/blob/master/debugging-using-windbg/windbg-extensions.md)
- [WinDbg cheatsheet](http://windbg.info/doc/1-common-cmds.html)
- [DbgKit](http://www.andreybazhan.com/dbgkit.html) - WinDbg extension for working with processes

## Web interface
Radare2 has a nice [web interface](http://cloud.rada.re/m) (and not only one: /p, /m and /t), but it's not currently as complete as the command line one. While the latter is more powerful, it has a steep learning curve, and it not usable on every devices (Like cellphones or tablets); this is we'd like to put some efforts into an awesome, functional web interface.

### Tasks
1. Implement/enhance widgets like:
   - Hexeditor: view and edit, columns should be configurable.
   - Graph: Interactive basicblocks/functions/bindiff graphs.
   - Sections: Memory ranges with attributes.
   - Search: Strings, opcodes, ...
   - Structures: Edition, view, manipulation, …
   - Functions: Edition, view, manipulation, arguments, XREF, ...
2. Make it [responsive](https://en.wikipedia.org/wiki/Responsive_Web_Design)
3. Make it more keyboard friendly (aka-olly)
4. Better Interface for the debugger
   - Panels with list of breakpoints
   - Backtrace with clickable offsets
   - Register panel
5. Optimize it, compress JS, reduce AJAX queries, make it usable on all devices

### Skills
The student should be comfortable with modern web technologies like javascript and HTML5. They don't need to be über-comfortable with C nor assembly, since all the information is obtained directly from radare2.
As a bonus point it would be interesting if they know some basic assembly.
It's better if student will come with a few simple mockups what [s]he is going to do.

### Difficulty
Easy. If the student if comfortable with web technologies, there shouldn't be any major challenges in complteting this task.

### Benefits for the student
The student will gain experience in writing rich web applications, and domain-specific user interface. Also, the student will learn to design usable APIs, since this task will deal with interfacing C and Javascript.

### Benefits for the project
Since radare2 has a steep learning curve, this task will lower the barrier for transitioning from IDA to radare2.

### Assess requirements for midterm/final evaluation

The student must focus on the material webui as long is the one used by default in Android and it is also the fastest one to load. Adding more visual feedback like displaying graphs for entropy, section sizes, ... and support for editing code or data, and be able to use the debugger in a more comfortable way.

### Mentors
- pancake

### Links/Resources
- The [current](http://cloud.rada.re/m) web interface
- [Announcement](http://radare.today/the-new-web-interface/) of its release
- [Related issues](https://github.com/radare/radare2-webui/issues) on github
