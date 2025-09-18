# back to the roots

<div class="container">

We are proud to announce r2con2025!

<img src="r2roots.jpg" width="150" style="float:left">

Welcome back to your favorite conference around the radare reverse engineering framework!

This time you don't have to worry about booking flights or hotels, it will be purely online, join the chats and watch the stream!

* **Event Date**: October 24, 25
* **Closing** [CFP](mailto:r2con@radare.org): October 12th
* **Location**: [Online](https://discord.gg/WjdHNaYk) YouTube/Discord

Stay tuned!

## Schedule

### Latest news in r2land

(pancake) - 30m

Lots of things has changed in a year, reading git log can be boring and release notes are usually not explicative enough to catch all the juicy improvements the whole radare2 ecosystem provides. This talk will cover you up and you will learn all the stuff you missed as well as spoiling some of the future plans in the roadmap

### Debugging emulated processes with mwemu

(sha0) - 30m

Windows process emulation was already possible with mwemu, and in most of cases was very effective for emulating small group of functions, decrypting stuff, etc. However full-emulation of the malware was something like an utopia. Latest improvements by mwemu team alow the reverser do analysis with radare2 from inside the emulated process. This is useful for inspecting memory data chunks, but also code analysis, functions recognizement, decompilers, ai, or any of the zillions of radare2 features.

### When Worlds Collide: r4ghidra

(buherator) - 30m

R4Ghidra is a full rewrite of the radare2 commandline parser and the most representative commands in pure Java. Yeah that sounds weird, but how does having all your favorite commandline oneliners and scripts to work inside Ghidra without depending on external binaries? What if radare2 can talk to your current Ghidra project and get all the metadata in sync? We will Highlight the challenges and opportunities of reverse engineering tool integration based on lessons learned from r4ghidra development.

### Reverse Engineering Solana Programs with radare2

(ulexec + secoalba) - 30m

An Introduction to the Solana runtime and the sBPF architecture with the brand new sBPF plug-in in radare2

### Chameleon: polymorphic engine for position independent shellcode

(gum3t) - 30m

Chameleon is a polymorphic engine for `x86_64` position-independent shellcode that has been created out of the need to evade signature-based detections in red team environments.

### Accessing radare2 from anywhere, anytime

(AbhiTheModder) - 15m

Introduction to r2web, which brings the webassembly builds radare2 to the browser while still being totally client-side, enabling quick, setup-free reverse engineering for education, collaboration, and lightweight analysis. We'll also cover current limitations and future plans for cross-platform improvements.

### Refreshing the state of parsing disassembly

(satk0) - 15m

Parsing disassembly has been always a quick and dirty way to extract information from the code, but also to improve the readability replacing inmediates with symbolic information like local variables or function names. This feature has been also very useful for translating any architecture into pseudocode which let high level decompilers like Decai to handle lots of targets with very little effort. During the transition from 5.9 to 6.0, radare2 changed the way these APIs work and improved the state of the art by introducing plugins and generic APIs to help developers reduce code complexity and maintainability while producing more solid results.

### Vibereversing binaries with r2mcp

(pancake) - 30m

AI is rapidly transforming the way we work, and MCPs open the door for agents to seamlessly use tools and tackle complex problems. They not only help users learn new tools without digging through documentation but also provide a powerful way to accelerate reverse engineering workflows across diverse toolchains.

### Devirtualizing VM-Based Obfuscation in Android

(Ahmethan Gultekin) - 30m

In this presentation we’ll dive into how virtual machines tick, how VM-based obfuscation is applied in Android apps, and how r2 can be used to crack open those layers and devirtualize them.

### Emulating, Dumping, and Detecting RASP Checks with Radare2

(apkunpacker) - 30m

Practical use of radare2 to emulate and dump libraries in real-world scenarios, along with techniques to efficiently detect and analyze RASP checks during RE

### Crack Rust with r2ai

(cryptax) - 30m

Have you ever reversed Rust binaries? No? Lucky you! Simple code turns into 600+ functions, and many of its concepts have impact on the way to reverse it: println is a macro, strings are fat pointers, compiler uses monomorphization... So, how can we solve a Rust CrackMe? We are going to use r2ai - r2's Artificial Intelligence plugin. It helps, but we'll nevertheless need practice and brains ;P

### Rapid Insights for Malware Analysts

(seifreed) - 30m

Presenting `r2inspect`: a framework for static malware analysis built on top of radare2 and r2pipe, providing accurate detection of obfuscated strings, cryptographic signatures, exploit mitigation analysis, and more

### Using r2 to Uncover Mobile App Weaknesses

(grepharder) - 30m

In this talk we'll dice into common mobile app weaknesses from the OWASP MASWE catalogue and demonstrates how to uncover them in practice. Using radare2 and other essential tools from the OWASP MASTG, we will solve reverse engineering challenges and validate MASTG tests step by step. All challenges will be available as APK and IPA files for hands-on practice. Will we also use AI to tackle some of these challenges? Maybe.

### TocTou Maps

(pancake) - 30m

Accessing buffers is always tricky—especially when mmap comes into play. This talk dives into a subtle bug in radare2 that uncovered a series of non-portable syscalls and broader portability issues. Along the way, we’ll explore how operating systems manage memory and how these details can lead to vulnerabilities in modern software. If you’re curious about low-level memory handling and hidden pitfalls, this is a session you won’t want to miss.

### Closing

(pancake) - 10m

So long and thanks for the tofu!

--pancake
</div>
