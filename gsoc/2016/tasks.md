# Microtasks

It is strongly recommended that students who want to apply to the radare2 GSoC/RSoC projects will perform a small tasks, to get the idea of studentsâ€™ capabilities and make them familiar with radare2 codebase, structure and development process. Here is the list of such â€œqualificationâ€ tasks:

### INDEX

## Improve analysis

The current code analysis have many little caveats and issues which may be good to be addressed, fixing them and writing more tests is very important to stabilize and enhance it.

https://github.com/radare/radare2/issues?q=is%3Aissue+is%3Aopen+label%3Aanal

## Flash bytecode

Flash is slowly dying, but there's still people using it and there are still appearing 0day vulnerabilities in the wild, so it will be interesting to be able to disassemble flash from memory inside r2.

This task implies writing a plugin for flasm in radare2-extras to be able to disassemble, assemble and optionally analyze Flash bytecode.

See https://github.com/radare/radare2/issues/3705
 
## Lua bytecode
Add disassembler, assembler and analyzer for the latest LUA vm.

See https://github.com/radare/radare2/issues/3836
 
## Python bytecode
Fix ragg2 issues https://github.com/radare/radare2/issues?q=is%3Aopen+is%3Aissue+label%3Aragg2

## Better PE (Portable Executable) format support
There are lot of missing features in the current PE file parser. [Here](https://github.com/radare/radare2/issues/921) you can find a full list of those. Implemeting it will help for radare2 usage in malware analysis.

## pcap loading support
Add pcap support https://github.com/radare/radare2/issues/3574

## bochs support
Add bochs support https://github.com/radare/radare2/issues/4059

## Display "malwareness" indicators
Add command for print indicators like in PEStudio (i.e display version information that already parsed) https://github.com/radare/radare2/issues/4128

## Sdbtization
Radare2 is being slowly refactored to store all the information about session, user metadata and state of debugger in the [SDB](https://github.com/radare/sdb) - simple key-value database. This work still ungoing. So helping us with a few sdbtization bugs will introduce you into the radare2 codebase structure.
https://github.com/radare/radare2/issues?q=is%3Aopen+is%3Aissue+label%3Asdbtization

## Better crypto identification support

radare2 currently supports Yara (see radare2-extras repository), but it will be good to extend the support to handle more hashing algorithms by code analysis by integrating more updated Yara signatores or using Manalyze, writing a blog post or documentation for it.

https://github.com/JusticeRage/Manalyze

## UTF-8 support in graphs

This task requires implementing proper support for multibyte characters in RConsCanvas in order to render UTF-8 characters in the graphs for having better ascii-art boxes and lines.

https://github.com/radare/radare2/issues/2091

## Node groups

Being able to select multiple nodes in the graph and group them to colorize them and specify a name for them.

## Smarter lines in graphs

Avoid overlapping edges, currently the ascii art graphs does not overlap nodes, but some edge lines are passing thru.

## Save/restore graph state

This task is necessary when node grouping or layout have changed, this information can be stored in projects by just reusing the `agn` and `age` commands to recreate a graph and feeding the body of the nodes in base64.
