---
title: Paper Notes
date: 2020-01-30 01:30:00
updated: 2020-01-30 01:30:00
comments: 0
categories: 
tags: []
permalink: paper-note-intro
---

Keeping track of papers is a really important part of academic life. 
I have been thinking a lot about how to find the right papers to read, how to read paper efficiently and also how to record my thoughts while reading the paper for future reference. Any of the above-mentioned questions is non-trivial, any minor improvement on it can make substantial benefit to your research.
I'll try to elaborate on the last part here.

## Granularity

There're two kinds of notes in terms of granularity you may take during reading a paper.

One goes into the very details. Researchers are usually very critical when reading other people's works. When they read the paper carefully, they may have comments about every sentence in the paper. I highlight interesting things, underline questionable things and randomly leave marginal comments. This kind of note grab the most of the information from the paper but is relatively short term memory. After several days, you may have no idea about those highlighting and underlining. But that doesn't mean it's useless, it helps you understand the paper in the reading time and remind you something (even not everything) after that. Sometimes, people even write a review article or make slides (give a presentation), which can be also considered as detailed, low-level notes.

The other form of note records the high-level idea of the paper. It could be a summary of the paper, the biggest question you have when reading the paper, the impression the paper gives you. Some day, this note is the only memory you have about the paper. But I'd like to think it as a key to retrieve the memory you buried deep in your mind.

While people take notes to maintain a long term memory, lots of us end up keeping only low-level notes and overlook the importance of high-level notes.

## Category

> Our ineptitude in getting at the record is largely caused by the artificiality of systems of indexing. When data of any sort are placed in storage, they are filed alphabetically or numerically, and information is found (when it is) by tracing it down from subclass to subclass ...
> **The human mind does not work that way. It operates by association.** With one item in its grasp, it snaps instantly to the next that is suggested by the association of thoughts, in accordance with some intricate web of trails carried by the cells of the brain. It has other characteristics, of course; trails that are not frequently followed are prone to fade, items are not fully permanent, memory is transitory.
>
>
>\
> From *"As we May Think"* by Vannevar Bush

Now that we have the note we took and want to keep it for the future. Although we naturally want it to be organized, we need a deeper understanding in terms of "why we want that" to further answer the question "in what way we can do it". The answer to the former question derives from the use cases you got. For me, an ideal use case is that when I encounter a need of reference to a paper I seem to previously read, I want to get **as much context as I can** based on some **vague memory fragment** I have about the specific paper.

The fundamental idea of organizing the notes (or other information) is to exploit their structural properties and categorize them. Apparently, we don't want to separate the note and its corresponding paper, thus organizing the notes you keep is organizing the papers you read.

Ordering files alphabetically can be certainly helpful when you have a great memory of the title of the paper you want to look up. This is the case if you a fan of hardcopy papers. To make my life easier, I only keep electronic ones and use a search tool on my computer.

Categorizing papers by the types of problems they were trying to address is an intuitive and powerful way. It's actually what libraries and book stores do to organize books. But design a type/class system is non-trivial if you want to consider the relationship between types.

Categorizing papers by the dates you read them is also useful. The underlying reason is that people usually read related papers within a certain period.

## My Setup

After a long time of exploring, I end up using a combo of OneNote, Zotero, and PDF Expert in macOS. I keep my low-level notes directly on the PDF file using PDF Expert and refer it as an attachment in Zotero. In Zotero, you can have a hierarchical type system (although I only use one level type because of lazy). Zotero also automatically renames my PDF file following a standard so that I can search them via Alfred easily when I happen to know some keyword in the title. I use Dropbox to sync the entire attachment directory of Zotero so that I can sometimes check some papers on my iPad via the search function in Dropbox's iOS app. Overall, I'm pretty happy with my low-level note-taking system.

I use OneNote to do all kinds of note-taking and benefit from its lots of advantages. But somehow I failed to find a good way to manage paper notes in it. The biggest and unique advantage of OneNote is that it has a flexible text area that's very handy for prototyping an idea and keeping random thoughts. But when I keep high-level paper notes I want them to be well-formatted and organized so that it can be a joy when I refer back in the future. OneNote doesn't have a template system at all. The other reason is that when I organized the paper notes by topic, I cannot easily browse them by time order. And a paper cannot be placed into two topics in OneNote. One other feasible way is to use the tagging function, but it weirdly operated on a per line level (which is only useful for todo list). So I need to find a new system that I can review my notes or search for a note afterward.

### The GitHub Experiment

Among all those out-of-box options I realize, GitHub's issue system seems worth a try. It has several pros and one con (for now), as follows:

Pros:
- Full function markdown editor
- Markdown template support
- A Good search function (can be further indexed by search engines)
- Sufficient tagging system
- Handful API
- Mobile webpage
- Activity monitor

Cons:
- Limited permission control (I want it to be read-only)

So I spent one night to design a paper note template and created a webpage for browsing the paper notes in the time order. Let's see how far I can go in this direction.

## Acknowledgement

My opinion about [reading](https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html) and [organizing](https://www.cs.jhu.edu/~jason/advice/how-to-organize-your-files.html) paper is heavily influenced by professor Jason Eisner's advice which I luckily came across at the very beginning of my research life.