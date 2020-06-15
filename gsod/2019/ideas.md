# Project Ideas

This year Radare2 project applied for participation in [Google Season of Docs](https://developers.google.com/season-of-docs), the program aiming to bring technical writers closer to the open source community, to raise the quality of documentation for the corresponding projects. For years
we maintain the reference manual - [radare2 book](https://radareorg.github.io/radare2book/index.html).
But as it is often the case, the writing is done by developers themselves, thus of substandard
quality and hard to read. We hope participation in GSoC will help our users for a better understanding
of the framework and grasp the vast feature set provided by the toolkit.

### INDEX

## Prepare formatting for printable book

The radare2 book is currently written using Markdown format. And we use GitBook for publishing.
There is a problem with both format itself, and current formatting - while it looks
sufficient for the online reading, it has a poor representation even as PDF file,
not to mention the printed version. These tasks focus on reformatting the book,
illustrations and references to be both suitable for electronic, and printing forms.

### Task
* Better split into the paragraphs.
* Use [mdBook](https://github.com/rust-lang-nursery/mdBook) Markdown.
* Rework screenshots and illustrations to be both suitable for printing and eBook ([#144](https://github.com/radare/radare2book/issues/144)).
* Improve generating the TOC/index and paging

## Rework the structure of the book

Currently, the book tries to cover many important features of the framework, but it lacks the
proper flow and structuring by related commands and features. This makes reading a pain and
confuses readers even more. At the same time, it makes hard to understand what is missing, or poorly
documented. It is a part of the task to shuffle things around to create a solid, structured flow,
and gather information on what is possibly missing.

### Task
* Refactor the structure of sections and chapters
* Gather related features together, e.g. [Graphs](https://github.com/radare/radare2book/issues/196)).
* Extract the "Crackmes" part from the book into the separate tutorial - [#199](https://github.com/radare/radare2book/issues/199).
* Extract information from the "Crackmes" tutorial that is missing in the book and add it.
* Setup "autobuilds" of the book, with spell-checking and other good documentation CI practices.
* To think about running some example snippets as autotests - [#76](https://github.com/radare/radare2book/issues/#76).

One of the good examples of a fine structured book for reverse engineering systematic manual is
[Reverse Engineering for Beginners](https://beginners.re). A similar format can be used in case of the radare2 book as well.

## Add the questions/exercises

While the main purpose of the book is to be a reference manual, it is essential to help readers
with better remembrance of an endless sea of radare2 commands and features. Thus every chapter (or
section - we should think about it more) should have a few questions or exercises to do, for
cementing the material from the chapter.

### Task
* Determine on what level we should add questions/exercises - chapters or sections.
* Add questions at the end of corresponding parts
* To think and provide at least one exercise for these parts

## Enhance the documentation for missing chapters

Radare2 is being so powerful and feature rich, that even authors forget some of the commands. So
it is crucial to document the missing pieces. While they are not presented in the book itself, it is
often "documented" in various tweets, blog posts, and presentation slides. We already determined a huge
chunk of what is missing, but some things we surely not aware of. Thus the task will involve
following provided links, reading them, trying to reproduce with a local radare2 instance (we will
help with setting it up), and adding into the book. This task requires heavy dig into the command
line, gathering sand all of internet and developers' minds, constant interaction with developers.

### Task
* Skim through [section](https://github.com/radare/radare2book/labels/section) and
    [chapter](https://github.com/radare/radare2book/labels/chapter) issue labels and make a plan on adding corresponding information.
* Follow the plan, and add the missing pieces gradually.
* Check the [paragraph](https://github.com/radare/radare2book/labels/paragraph) issue labels and add
    the missing pieces gradually.
* Reread the book, and upgrade the parts with changed commands, command syntax or an API.

