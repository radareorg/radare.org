# Introduction

The [radare](http://rada.re/) project started in February of 2006 aiming to provide a free and simple command line interface for an hexadecimal editor supporting 64 bit offsets to search within and recover data from hard-disks.
Since then, the project has grown with the new aim of providing a complete framework for analyzing binaries with some basic \*NIX concepts in mind like everything is a file, small programs that interact together using stdin/out, and keep it simple.
[Radare2](https://github.com/radare/radare2) is a complete [LGPL]( https://opensource.org/licenses/lgpl-license ) rewrite of the original project to remove design issues of the first iteration, and to make it more modular and easier to script and maintain. Radare2 features a testsuite that aims to cover as many cases as possible in order to catch regressions.

Radare2 is composed of an hexadecimal editor as central point, with several assemblers/disassemblers, code analysis capabilities, scripting features, visualization of code and data through graphs and other means, a visual mode, easy unix integration, a diff engine, a shellcode compiler, and much more.

![graph](http://radare.today/images/graph.png)

# Previous Years

Starting from 2014, we hosted our own version of Radare Summer of Code (RSoC). These were some of the successful projects:

 - FLIRT and YARA signatures support for radare2
 - Loading PDB debug information
 - Structures support (like in 010 Editor)
 - ObjC metadata parsing from Mach-0 to expose classes and symbols

More information can be found on the [RSoC](http://rada.re/rsoc) page.

Each year since 2015, we have participated in Google Summer of Code and accomplished many important
tasks:

 - [radeco](https://github.com/radare/radeco) decompiler (still ongoing)
 - improved Windows OS and relevant file formats support
 - reversible debugging (also known as timeless debugging)
 - remote GDB and LLDB support
 - function argument detection
 - types inference
 - improved Web and console interfaces
 - fixed endless amounts of bugs

If you have questions or comments, visit our IRC channel #radare on Freenode.

# Mentors

Members of radare2 core team have volunteered to guide technical writers for GSoD’19. They were already guiding the students for GSoC'18 - GSoC’15, RSoC'16, RSoC’15 and RSoC’14. Please feel free to reach out to any of them in case you need any help in selecting a project.

- Sergi Alvarez IRC: pancake -- [@trufae](https://twitter.com/trufae)
- Anton Kochkov IRC: xvilka -- [@akochkov](https://twitter.com/akochkov)
- Maxime Morin tg: @Maijin -- [@Maijin212](https://twitter.com/Maijin212)
- Itay Cohen tg: @Megabeets [@Megabeets\_](https://twitter.com/Megabeets_)

# Development methodology

Currently, all repositories are hosted on GitHub [main](https://github.com/radare/) organization and [community](https://github.com/radareorg) accounts, bugs are tracked on GitHub [issues](https://github.com/radare/radare2/issues) too. We are mostly using [HackMD](https://hackmd.io), IRC, and Telegram ([telegraph#radare](https://t.me/radare)) for communication.
We have a [testsuite](https://github.com/radare/radare2-regressions) (that is running on [Travis CI](https://travis-ci.org/radare/radare2/), [AppVeyor](https://ci.appveyor.com/project/radare/radare2) and our [Jenkins](http://ci.rada.re/) instance) to test and verify that all the features are still working and that a pull requests or commits don't break anything, and to find regressions.
We believe some test cases can inspire for writing documentation.

For those who want to get introduced to the radare2 book, we recommend to pick one of the [easy](https://github.com/radare/radare2book/labels/good%20first%20issue) issues to start with.

# License

Radare2 book is distributed and developed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) license. Radare2 itself is under [LGPL3](https://www.gnu.org/licenses/lgpl.html).

## Required experience

Most of radare2 workflow happens in the command line. And the target domain is software reversring. So some experience with UNIX-like command line is expected. And basic knowledge about process of software debugging can be helpful as well.

## Recommended steps

1. Read [Google's instructions](https://developers.google.com/season-of-docs/docs/tech-writer-guide) for participating
2. Grab any of the project from [list of ideas](https://radare.org/gsod/2019/ideas.html)  that you're interested in (or propose your own).
3. Write your application and submit it using Google's web interface.

## Application proposal guidelines

1. Try to split GSoD period into tasks, and each task into subtasks. It helps us to understand how you plan to accomplish your goals, but more importantly, it'll help you to understand the task deep enough before starting, and prioritize important things to do first.
2. Please, note, how much time a day/week you are able to spend on this project.
3. Specify your timezone, since so we can assign you a mentor in the same one, to ease communication.
4. Submit your proposal early, not in the last minute!


