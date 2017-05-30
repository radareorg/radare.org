# Project Ideas

### INDEX

## Completing decompiler (Radeco)
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

## Implementing Symbolic Execution (Rune)
To properly decompile or performing another kind of program analysis it's vital to understand some
possible paths, which radare2 unable to resolve statically.
This is where the rescue of symbolic executions comes to help.
There is an existing project - rune, which provides a basic sceleton for this task, so it should be
relatively easy to add the missing parts to it.

### Tasks
 - Proper conversion of ESIL (or better RadecoIL) into SMT constraints
 - Fixing corresponding bugs in ESIL/RadecoIL parser
 - Architecture-specific constraints (x86 and ARM)
 - OS/API specific constraints (particularily memory and I/O)
 - Integrating with r2pipe to feed information back to radare2 and/or radeco
 - Writing tests for implemented functionality
 - Implementing multithreaded path exploration

### Skills
Knowledge of SMT basics and program analysis (or an interest to learn these quickly).
Basic knowledge of Rust (And willingness to learn to more during the RSoC)
Some knowledge of intermediate languages and existing SMT solvers and symbolic execution frameworks

### Difficulty
Advanced

### Benefits for the student
- General idea about symbolic execution
- Usage of the Intermediate Languages
- Binary code analysis

### Benefits for the project
Finally, radare2 will have its own symbolic execution, which can later be used for improving analysis in radare2 and radeco, and implementing concolic execution (dynamic symbolic execution) capabilities.

### Assess requirements for midterm/final evaluation
For the midterm evaluations, the student is expected to have completed the C/pseudo code emitter and obtain the first set of results.
The final evaluation requires students to have improved the quality of the generated code and have a working type inference system.

### Mentors
- crowell
- xvilka

### Links/Resources

- [Rune](https://github.com/sushant94/radeco-lib)
- [Radeco-lib](https://github.com/radare/radeco-lib)
- [Papers about decompilation](https://drive.google.com/drive/folders/0B1X32SwXTZPuYWwxWW5BNi1oWDA?usp=sharing)


