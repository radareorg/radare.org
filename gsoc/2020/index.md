# Introduction

The [radare]( http://rada.re/ ) project started in February of 2006 aiming to provide a free and simple command line interface for an hexadecimal editor supporting 64 bit offsets to search within and recover data from hard-disks.
Since then, the project has grown with the new aim of providing a complete framework for analyzing binaries with some basic \*NIX concepts in mind like everything is a file, small programs that interact together using stdin/out, and keep it simple.
[Radare2](https://github.com/radareorg/radare2) is a complete [LGPL](https://opensource.org/licenses/lgpl-license) rewrite of the original project to remove design issues of the first iteration, and to make it more modular and easier to script and maintain. Radare2 features a testsuite that aims to cover as many cases as possible in order to catch regressions.

Radare2 is composed of an hexadecimal editor as central point, with several assemblers/disassemblers, code analysis capabilities, scripting features, visualization of code and data through graphs and other means, a visual mode, easy UNIX integration, a diffing engine, a shellcode compiler, and much more.

![graph](http://radare.today/images/graph.png)

# Previous Years

Starting from 2014, we hosted our own version of Radare Summer of Code (RSoC). These were some of the successful projects:

 - Various console interface improvements
 - FLIRT and YARA signatures support for radare2
 - Loading PDB debug information
 - Structures support (like in 010 Editor)
 - Objective C metadata parsing from Mach-0 to expose classes and symbols

More information can be found on the [RSoC](http://rada.re/rsoc) page.

Each year since 2015, we have participated in Google Summer of Code and accomplished many important
tasks:

 - [Radeco](https://github.com/radareorg/radeco) decompiler (closed in favor of [r2ghidra](https://github.com/radareorg/r2ghidra-dec))
 - Improved Windows OS and relevant file formats support
 - Reversible debugging (also known as timeless debugging)
 - Remote GDB and LLDB support
 - Function argument detection
 - Types inference
 - Improved console interface
 - Fixed endless amounts of bugs

If you have questions or comments, visit our IRC channel #radare on Freenode or our Telegram ([telegraph#radare](https://t.me/radare)) channel.

# Mentors

Members of radare2 and Cutter core teams have volunteered to guide students for GSoC’20. They were already guiding the students for GSoC'18 - GSoC’15, RSoC'16, RSoC’15 and RSoC’14. Please feel free to reach out to any of them in case you need any help in selecting a project.

- Sergi Alvarez IRC: pancake -- [@trufae](https://twitter.com/trufae)
- Anton Kochkov IRC: xvilka -- [@akochkov](https://twitter.com/akochkov)
- Julien Voisin IRC: jvoisin -- [dustri.org](https://dustri.org)
- Florian Märkl tg: @thestr4ng3r -- [@thestr4ng3r](https://twitter.com/thestr4ng3r)
- Antide Petit IRC/tg: xarkes -- [@xarkes\_](https://twitter.com/xarkes_)
- Itay Cohen tg: @Megabeets [@Megabeets\_](https://twitter.com/Megabeets_)
- Giovanni Dante Grazioli tg: @deroad [@der0ad\_](https://twitter.com/der0ad)
- And many others

# Development methodology

Currently, all repositories are hosted on GitHub [main](https://github.com/radareorg/) organization account, bugs are tracked on GitHub [issues](https://github.com/radareorg/radare2/issues) too. We are mostly using [HackMD](https://hackmd.io), IRC, and Telegram ([telegraph#radare](https://t.me/radare)) for communication.
We have a testsuite (that is running on [Travis CI](https://travis-ci.org/radareorg/radare2/), [AppVeyor](https://ci.appveyor.com/project/radareorg/radare2) and SourceHut) to test and verify that all the features are still working and that a pull requests or commits don't break anything, and to find regressions.
We encourage contributors to write test cases and documentation in order to verify the implementation and ensure that everything fits well together. There is also a [Coverity](https://scan.coverity.com/projects/416) instance to catch obvious defects. For complex bugs and examples we're using [ASCIInema](http://asciinema.org/) for recording the sessions.

See also our guides for corresponding projects:
- Radare2 [Contributing Guide](https://github.com/radareorg/radare2/blob/master/CONTRIBUTING.md) and [Developers Intro](https://github.com/radareorg/radare2/blob/master/DEVELOPERS.md)
- Cutter [Contributing Guide](https://github.com/radareorg/cutter/blob/master/CONTRIBUTING.md) and [Developers Intro](https://cutter.re/docs/code.html)

For those who want to get introduced to the radare2 codebase and practices, we recommend to pick one of the easy issues for [radare2](https://github.com/radareorg/radare2/labels/good%20first%20issue) or [cutter](https://github.com/radareorg/cutter/labels/good%20first%20issue) to start with.

# License

Radare2 is modular: this means that it aims to make all the elements and features easily reusable from other projects. The choice of [LGPL3](https://www.gnu.org/licenses/lgpl.html) as a license is the minimum requirement to get code merged in r2. Contributors can choose Apache, BSD, MIT, Public Domain, or other similar licenses. The reason to exclude GPL as a valid license for the project is because we aim to support proprietary software that uses r2, while protecting our free codebase.

# Instructions for students

It is a requirement that students who want to apply to the radare2 project for the Google Summer of Code 2020 should submit a small pull request accomplishing one of the [microtasks](http://radare.org/gsoc/2020/tasks.html) as part of their application. Though you can also choose any of the GitHub issues for radare2 if they are big enough to be a qualification task, and still small enough to be finished no more than in a couple of weeks.

## Programming languages

Most of radare2 is written in C and hence we expect students to be familiar with C programming language. For some of our tasks or microtasks, such as [collaborative RE](http://radare.org/gsoc/2020/ideas.html) or [r2pm](https://github.com/radareorg/r2pm), students should know the Go programming language. For the [Cutter](http://radare.org/gsoc/2020/ideas.html) tasks, students should know C++ and Qt framework basics.

## Recommended steps

1. Read Google's instructions for participating
2. Grab any of the project from [list of ideas](http://radare.org/gsoc/2020/ideas.html)  that you're interested in (or propose your own).
3. Write a first draft proposal using Google Docs and [our template](https://docs.google.com/document/d/1kDPGgr_D5tQuYLQi_gEGlkuQ-DlU8GH5kDBqZbVSC7I/edit?usp=sharing) and ask one of the mentors or administrators to review it with you.
4. Submit it using Google's web interface.

## Student proposal guidelines

1. Keep it simple enough to fit in no more than a couple of pages. Try to be clear and concise in your writing.
2. Try to split GSoC period into tasks, and each task into subtasks. It helps us to understand how you plan to accomplish your goals, but more importantly, it'll help you to understand the task deep enough before starting, and prioritize important things to do first.
3. Please, note, how much time a day/week you are able to spend on this project.
4. Specify your timezone, since so we can assign you a mentor in the same one, to ease communication.
5. Submit your proposal early, not in the last minute!
6. Be sure to choose a “backup” idea (the second task you want to do), so that conflicts (two students for one task) can be resolved.


