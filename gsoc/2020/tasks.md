# Microtasks

## Disassemblers and assemblers

Implementing the support for any new architectire counts as a microtask. See [New-Architecture](https://github.com/radareorg/radare2/labels/New%20Architecture) label for pending issues.
Nevertherless we've chosen a few as the most important ones:

### LLVM bitcode [#2778](https://github.com/radareorg/radare2/issues/2778)

LLVM bitcode is common format of the bytecode, used in many different compilers and tools.

See [llvm-bcanalyzer](https://github.com/llvm/llvm/blob/master/tools/llvm-bcanalyzer/llvm-bcanalyzer.cpp) and [BitCodeReader.cpp](https://github.com/llvm/llvm/blob/master/lib/Bitcode/Reader/BitcodeReader.cpp) on how to implement its parsing and decoding. See also [#3896](https://github.com/radareorg/radare2/issues/3896) for integration with Mach-O format parser.

### GPU architectures support [#12161](https://github.com/radareorg/radare2/issues/12161)
Modern GPUs are now basically a powerful embedded computer network. Every video card has plenty of different chips and firmwares, fused and loaded, running. Radare2 can provide a convenient interface to reverse engineer and audit these firmwares or loaded programs, as well as help open source video drivers efforts.

### SPIR-V

SPIR-V is a standardized intermediate language encoded as bytecode, which is used to specify shader programs in the Vulkan graphics API. Its form is similar to LLVM IR.

https://www.khronos.org/spir/
https://github.com/KhronosGroup/SPIRV-Tools

### Python bytecode [#4228](https://github.com/radareorg/radare2/issues/4228)

Currently there is support already for disassembling Python bytecode. But like with LUA the architecture is largely untested and can be easily broken. Moreover, the analysis plugin is not implemented, so a lot of information is still missing in the output. We need to add proper tests and see if there are bugs (and fix them).

See [universal python disassembler](https://github.com/evanw/unwind) and [python cross-version decompiler](https://github.com/rocky/python-uncompyle6) for example and [basic](https://github.com/radareorg/radare2-extras/tree/master/libr/bin/format/pyc) [implementation](https://github.com/radareorg/radare2-extras/blob/master/libr/asm/p/asm_pyc.c) in radare2-extras for current state of it.

![image](https://image.slidesharecdn.com/tailbytespygotham-140819135745-phpapp02/95/tco-in-python-via-bytecode-manipulation-7-638.jpg)

### Java

Java support landed in radare2 a long time ago. At the same time it is largely unused, full of bugs and poorly written. Some code (e.g. [anal_extra](https://github.com/radareorg/radare2/blob/master/libr/anal/anal_ex.c)) doesn't really fit and can be moved/refactored on top of the modern radare2 architecture design. Many minor fixes and improvements should be done - see the ["java" label](https://github.com/radareorg/radare2/labels/java) on GitHub.

### Improving WebAssembly (WASM) support

- ESIL (emulation should be super easy since it is stack based too)
- Proper decompilation via external plugin (not r2dec, maybe via r2ghidra)

### Reviving .NET bytecode support
It is widely adopted and there are many tools available for decompilation. On the other hand radare2 provides many useful features across all architectures and scripting capabilities, which can help to improve the state of .NET reverse engineering tooling. Currently the most basic MSIL support lives in [radare2 extras](https://github.com/radareorg/radare2-extras/tree/master/libr/asm/arch/msil). It can be revived, improved and enhanced to add newer format of the .NET bytecode. See other tools that work with .NET bytecode:

- [ILSpy](https://github.com/icsharpcode/ILSpy)
- Telerik [JustDecompile engine](https://github.com/telerik/justdecompileengine)
- JetBrains [dotPeek](https://www.jetbrains.com/decompiler)

## Analysis

The current code analysis has many caveats and issues which need addressing. Fixing them and writing more tests is important to stabilize and enhance radare2's analysis engine.

[See these issues](https://github.com/radareorg/radare2/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3ARAnal) or the ["Analysis" project](https://github.com/radareorg/radare2/projects/10) on our GitHub dashboard.

### Heap analysis [#5390](https://github.com/radareorg/radare2/issues/5390)
Currently radare2 has support for heap exploration and analysis, but the feature is still basic and can be improved. Additionally, other allocators can be added (jemalloc, etc.), but this should be done after a proper refactoring, because heap analysis shouldn't depend on the debugger backend, and we may be able to use different heap tools.

The most important part of supporting heap analysis is to create a new subset of commands, and put all heap analyis under data analysis or debugger-wide features, not in the target debugger backend. Many things are also done in C, when they could be solved with format strings.

### Basefind [#10725](https://github.com/radareorg/radare2/issues/10725)
There are plenty of external scripts and plugins for finding the most probable base for raw firmware images. Opening raw firmwares with radare2 is a common use case, so it makes sense to implement it as a part of radare2 core.

## Anal Classes for C++/ObjectiveC/Swift/Dlang/Java

Anal classes, accessible under the `ac` command, are a new feature of r2 which has only recently been merged into master.
They provide a way to both manually and automatically manage and use information about classes in the binary.

### Add size info to anal class vtables [#12601](https://github.com/radareorg/radare2/issues/12601)

Right now, vtables in `aCv` only have an address, but no size.
This should be added to the sdb record and also be represented in the size of the flag for the vtable.

### Devirtualize method calls using anal class vtables [#12603](https://github.com/radareorg/radare2/issues/12603)

Consider the following call: `call dword [eax + 0x6c]`
Let's assume eax is the base pointer of a vtable we have saved in anal classes and we want to find out the actual address of the called method.

So there should be a command that takes the offset (in this case 0x6c) and looks up the actual destination.
It should be possible to call this command with a specific class, so it only looks into its vtable, or without a class, so it gives a list of possible destinations for all vtables that are not too small for the offset (partially requires [#12601](https://github.com/radareorg/radare2/issues/12601))

When that is implemented, one could also add a command that does the same thing, but automatically takes the offset from the opcode at the current seek.

### Add anal classes to Vb [#12604](https://github.com/radareorg/radare2/issues/12604)

`Vb` already supports browsing bin classes. The same thing should be implemented for anal classes.

## META - Signatures [#6947](https://github.com/radareorg/radare2/issues/6947)

Radare2 has a good support for loading and creating signatures, but it is not yet complete, thus
improving the signature contents (their variables, arguments, types, local flags and comments),
their testing coverage and user interface (commands, [reviving `rasign2` tool](https://github.com/radareorg/radare2/issues/9336)).
Apart from that, [better integration with analysis loop](https://github.com/radareorg/radare2/issues/5331) is
required for the best results of autoanalysis.
Of course all these features are worthless without the actual signatures provided, thus the task to [create the default pack](https://github.com/radareorg/radare2/issues/7310).

## META - Graphs [#6967](https://github.com/radareorg/radare2/issues/6967)

### Binary diffing - [radiff2](https://github.com/radareorg/radare2/labels/radiff2)

Bindiffing has been a known feature of radiff2, but it lacked the attention from developers for years. Improving the output, enhancing visual diffing modes (issue [#8115](https://github.com/radareorg/radare2/issues/8115)), using analysis results and optimizing speed are the most important things here.

### Node groups

Being able to select multiple nodes in the graph and group them to colorize them and specify a name for them. [#2952](https://github.com/radareorg/radare2/issues/2952)

### Save/restore graph state

This task is necessary when node grouping or layout have changed, this information can be stored in projects by just reusing the `agn` and `age` commands to recreate a graph and feeding the body of the nodes in base64.

## META - RAGG2 [#6949](https://github.com/radareorg/radare2/issues/6949)

Ragg2 - simplistic [compiler for C-like syntax](http://radare.today/posts/payloads-in-c/) into tiny binaries for x86-32/64 and arm. Programs generated by ragg2 are relocatable and can be injected in a running process or on-disk binary file. Fixing  ragg2 issues will help a lot for creating small payloads for exploiting tasks.

## RAFIND2 - Various enhancement

Rafind2 - binwalk parity
Various issues to improve rafind2 such as being able to extract known file types automatically and recursively if the file is an archive (a la binwalk).

- [11163](https://github.com/radareorg/radare2/issues/11163) - `binwalk -Me` support
- [Other rafind2 issues](https://github.com/radareorg/radare2/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Arafind2+)

## Refactoring

### Sdbtization
Radare2 is being slowly refactored to store all the information about session, user metadata and state of debugger in the [SDB](https://github.com/radareorg/sdb) - simple key-value database. This work still ungoing. So helping us with a few sdbtization bugs will introduce you into the radare2 codebase structure.

We have decided to not sdbize everything, and use RBTree and RDict when necessary, so be sure to ask developers before starting. Also, some places in r2 (like the version bin parser) are using SDB in a poor way. Fixing those cases counts too.

[See issues](https://github.com/radareorg/radare2/issues?q=is%3Aopen+is%3Aissue+label%3Asdbtization)

### ESILization
Radare2 has its own intermediate language - ESIL, but not yet support it for all architectures. So
the task is to add ESIL support to any architecture, which doesn't has it yet.
[See issues](https://github.com/radareorg/radare2/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Aesil) for the related bugs.

* finish 8051 esil
* implement ARC esil emulation
* support packed registers (mmx and such)
* support floating point
* support MMX/SSE/AVX/other SIMD extensions
* Implement memory access callback apis in unicorn and make the unicorn plugin for r2 work

## File formats

Implementing the support for any new file format counts as a microtask. See [New File-Format](https://github.com/radareorg/radare2/labels/New%20File-Format) label for pending issues.
Nevertherless we chosen a few as the most important ones:

### META - Portable Executable format [#921](https://github.com/radareorg/radare2/issues/921)
There are lot of missing features in the current PE file parser as you can see in this META Issue.

![](https://image.slidesharecdn.com/44con2013workshop-exploringtheportableexecutableformat-130916113833-phpapp01/95/exploring-the-portable-executable-format-18-638.jpg)

this requires a refactor of rbin that hasn't happened yet, but also, we want to have a .NET parser (already commited but not used) for PE, and bring back the MSIL disassembler.

## Debugging

### Improve reverse debug

Radare2 already [supports](https://radare.gitbooks.io/radare2book/content/debugger/revdebug.html) a basic "Record and Replay" feature, similar to gdb's process recorded. The reverse debugger is designed to work by logging the execution of each machine instruction in the debugee, together with each corresponding change in machine state (the values of memory and registers). While the feature exists, it is still basic and somewhat unstable.
Also, radare2 includes support for reverse debugging gdbserver based targets with reverse debugging support.
A good [recent example from Tetrane](https://blog.tetrane.com/2019/11/17/Analyzing_an_Out_of_Bounds_read_in_a_TTF_font_file.html) which shows the workflow of working with reversible debugging.

#### Tasks

- Solve stability issues in the current implementation.
- Log and handle syscalls
    - Detect blocked system calls
    - Add state restoration of kernel handles after reverting certain syscalls
    - Add ptrace emulation
- Properly record signal arrivals and emulate sigprocmask behavior
- Properly record nondeterministic instructions such as RDTSC and RDRAND
- Reduce trace sizes

### Implement WinDBG Ethernet protocol support [#1246](https://github.com/radareorg/radare2/issues/1246)

Currently, radare2 only supports WinDBG debug over the unencrypted serial protocol using windows/qemu pipes. To improve our Windows debugging capabilities we would like to add proper ethernet WinDBG protocol support to reach remote targets and improve the user experience.
This task will require reverse engineering of WinDBG's protocol using programs like [windbgshark](https://github.com/CyberTech/windbgshark) which will also require decryption and encryption of protocol packets.

### Implement DLL debugging

Add an option to debug a DLL directly using a generic that you'll have to implement. This should include the ability to call the DLL's functions with user-set stack and register values.

### Better support for Activities and Permissions (list them, references, etc)

Take ideas from Androguard, and be able to follow execution flow paths to understand which permissions are used in a specific region of code, how to reach a specific activity, etc.

### Support to spawn iOS Apps, not just programs
See `debugserver -x springboard` and such to spawn apps from the backboard otherwise they get killed.

## Miscellanous

### Improving bindings
There are valabind generated bindings and we want them fixed, also merge r2pipe asyncronous and synchronous bindings. See [radare2-bindings](https://github.com/radareorg/radare2-bindings) repository for more information. It has also a different approach - parsing radare2 headers using Clang bindings and generating them without any intermediate files. There is support for Python, Go, Rust and Haskell. It should be improved and better tested - writing autotests will help a lot.

### Improving scripts for importing from IDA Pro IDB files
Currently radare2 can use the [ida2r2](https://github.com/radare/radare2ida) script to import information from the IDA Pro IDB files. It uses the [python-idb](https://github.com/williballenthin/python-idb) library for parsing IDB files without IDA Pro installed. Improving both will allow importing more information - types, variable and argument names, structures and enums, etc is the main goal of this task.

### Improving regression suite and testing
Currently radare2 uses a custom solution for running regression tests. Current testsuite is written in NodeJS, but we are working on migrating it to the lighter and more portable language - [V](https://vlang.io), see, for example [CI jobs for BSD and Linux](https://github.com/radareorg/radare2/issues/15657) for the V suite. Moreover, it is required to solve [numerours issues](https://github.com/radareorg/radare2/labels/r2r), along with improving parallel execution and performance. The next interesting idea is to setup and [reuse Godbolt](https://github.com/radareorg/radare2/issues/15585) compilation engine for generating tests for different compilers and compilation options. There is even a command line tool for interacting with Godbolt - [cce](https://github.com/ethanhs/cce).

## Cutter (GUI)

[Cutter](https://github.com/radareorg/cutter) is a Qt and C++ GUI for radare2. Cutter's goal is making an advanced, customizable and FOSS reverse-engineering platform while keeping the user experience at mind. Cutter is created by reverse engineers for reverse engineers.

While it is useful for all the community behind Cutter, working on the interface can be interesting for people that want to gain experience in UI/UX design, or simply in Qt/C++.

Below are some improvements that can be done to the interface:

* Hexdump widget improvements ([Project #8](https://github.com/radareorg/cutter/projects/8))
As radare2, Cutter also provides a hexdump widget, however this one is not interesting to use as of now. Most of the opened issues about this widget are easy to solve and could be a good way to start learning the code base of Cutter.
* Improve the "Run Script" option ([#753](https://github.com/radareorg/cutter/issues/753))
* Add the ability to import '*.idb' files ([#693](https://github.com/radareorg/cutter/issues/693))
* Add a font ratio option ([#686](https://github.com/radareorg/cutter/issues/686))
* Increase graph margins ([#727](https://github.com/radareorg/cutter/issues/727))
* Improve layout functionality ([#694](https://github.com/radareorg/cutter/issues/694))

Also [any issue in our issue tracker marked as "Good First Issue"](https://github.com/radareorg/cutter/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) is a good candidate for a microtask.

Another possible choice is to finish the [Lighthouse port to Cutter](https://github.com/gaasedelen/lighthouse/pull/65):

![](https://user-images.githubusercontent.com/10772605/55864723-506ef780-5b7d-11e9-9c40-a5c54daefe17.png)

