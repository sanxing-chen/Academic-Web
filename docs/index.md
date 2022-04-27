---
title: Sanxing Chen - NLP
lang: en-US
---
<link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC" rel="stylesheet">

<!-- # <div><p style="font-variant: small-caps; display: inline;">Sanxing Chen</p></div> -->
<h3></h3>
<div><h1 style='background: unset; color: #012169;'>Sanxing</h1> <h1>Chen</h1>

</div>
<!-- <p style="font-family:'Noto Serif SC', serif; display: inline;">陈三星</p> -->

<style type="text/css"> 



</style>

<img src="./img/sketch.png" alt="img" id="myimg" style="float:right;transition: width 0.5s;opacity: 0.8;">

## Bio


I research, through a language processing lens, how to help computers to acquire knowledge and reason in the way human beings do.
Language is the [conduit](https://en.wikipedia.org/wiki/Conduit_metaphor) transmitting all kinds of knowledge between people.
I'm thus interested in grounded language learning,
especially in finding intuitive and theoretically sound algorithms to perform relational learning on knowledge and language representations.

I currently work as an applied scientist at Microsoft.
I did my master's studies at the University of Virginia, where I was a member of the [ILP Lab](https://uvanlp.org/) working with Prof. [Yangfeng Ji](http://yangfengji.net).
I've also spent time at Microsoft Research ([Beijing](https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/) and [Redmond](https://www.microsoft.com/en-us/research/group/deep-learning-group/)) since I was an undergraduate at [CUGB](https://en.cugb.edu.cn).


<!-- 
## News  :tada:

- **[Nov 01, 2021]** HittER paper is accpeted to EMNLP 2021 (oral presentation), check out our [paper](https://aclanthology.org/2021.emnlp-main.812/) and [code](https://github.com/microsoft/HittER)!
- **[Jun 27, 2021]** I'm moving to the Greater Seattle Area to join Microsoft as an applied scientist!
- **[Jan 06, 2021]** I'll be joining [MSR](https://www.microsoft.com/en-us/research/group/deep-learning-group/) as a research intern this spring!
- **[Dec 14, 2020]** All Ph.D. applications have been sent out, wish me luck!
- **[Nov 01, 2020]** I'll be volunteering at [EMNLP 2020](https://2020.emnlp.org/), and presenting at [COLING 2020](https://coling2020.org) virtually!
- **[Jun 12, 2020]** I'll be attending [AKBC 2020](https://www.akbc.ws/2020/), [ACL 2020](https://acl2020.org/) and [ICML 2020](https://icml.cc/Conferences/2020) virtually!
- **[Apr 24, 2020]** I'll be attending [ICLR 2020](https://iclr.cc) virtually!
- **[Jan 19, 2020]** I'll be with Microsoft Ads and [MSR](https://www.microsoft.com/en-us/research/group/deep-learning-group/) this summer!
- **[Dec 21, 2019]** I'm actively seeking R&D internship opportunities for summer 2020!
- **[Dec 10, 2019]** We submitted one paper to ACL 2020!
- **[Mar 28, 2019]** Got accepted to MSCS@[UMass](https://umass.edu)!
- **[Feb 27, 2019]** I'm going to rejoin MSRA in April, excited to see my old friends there!
- **[Feb 21, 2019]** Got accepted to MSCS@[UVa](http://virginia.edu)!
- **[Dec 16, 2018]** All MS/Ph.D. applications sent out!

## Experience

<experience>
<template #company>Microsoft Bing Ads</template>
<template #title>Applied Scientist</template>
<template #location>Bellevue, United States</template>
<template #date>Jul 2021 - Now</template>
</experience>

<experience>
<template #company>Microsoft Research</template>
<template #title>Research Intern</template>
<template #location>Home office, United States</template>
<template #date>Mar 2021 - June 2021</template>
<template #work>Large-scale knowledge graph encoding with <a href="https://sites.google.com/site/hcheng2site">Hao Cheng</a> and <a href="https://sites.google.com/view/buptxiaodong/home">Xiaodong Liu</a></template>
</experience>
<experience>
<template #company>Bing Ads & Microsoft Research</template>
<template #title>Data Scientist Intern</template>
<template #location>Home office, United States</template>
<template #date>May 2020 - Aug 2020</template>
<template #work>Relational learning and NLP with <a href="https://sites.google.com/view/buptxiaodong/home">Xiaodong Liu</a> and <a href="https://www.linkedin.com/in/jian-jiao-82897810">Jian Jiao</a></template>
</experience>
<experience>
<template #company>Microsoft Research Asia</template>
<template #title>Intern</template>
<template #location>Beijing, China</template>
<template #date>Mar 2019 - Jun 2019</template>
<template #work><a href="bert-time.pdf" target="_blank">Time expression recognition</a> with <a href="https://www.microsoft.com/en-us/research/people/guow/" target="_blank">Guoxin Wang</a> and <a href="https://www.microsoft.com/en-us/research/people/borjekar/" target="_blank">Börje Karlsson</a></template>
</experience>
<experience>
<template #company>Microsoft Research Asia</template>
<template #title>Intern</template>
<template #location>Beijing, China</template>
<template #date>Feb 2018 - Sep 2018</template>
<template #work><a href="https://github.com/Microsoft/Recognizers-Text" target="_blank">Generic types entity recognition</a> with <a href="https://www.microsoft.com/en-us/research/people/borjekar/" target="_blank">Börje Karlsson</a></template>
</experience>
-->

## Publications

<paper paper="https://aclanthology.org/2021.emnlp-main.812/" arxiv="https://arxiv.org/abs/2008.12813" code="https://github.com/microsoft/HittER">
<template #title>⚾️ HittER: Hierarchical Transformers for Knowledge Graph Embeddings</template>
<template #authors><strong>Sanxing Chen</strong>, Xiaodong Liu, Jianfeng Gao, Jian Jiao, Ruofei Zhang, Yangfeng Ji</template>
<template #venue>In EMNLP'2021 (Oral)</template>
<template #abs>

::: tip Abstract
This paper examines the challenging problem of learning representations of entities and relations in a complex multi-relational knowledge graph. We propose HittER, a **Hi**erarchical **T**ransformer model **t**o jointly learn **E**ntity-relation composition and **R**elational contextualization based on a source entity’s neighborhood. Our proposed model consists of two different Transformer blocks: the bottom block extracts features of each entity-relation pair in the local neighborhood of the source entity and the top block aggregates the relational information from outputs of the bottom block. We further design a masked entity prediction task to balance information from the relational context and the source entity itself. Experimental results show that HittER achieves new state-of-the-art results on multiple link prediction datasets. We additionally propose a simple approach to integrate HittER into BERT and demonstrate its effectiveness on two Freebase factoid question answering datasets.
:::

</template>
<template #bib>

``` tex
@inproceedings{chen-etal-2021-hitter,
    title = "{H}itt{ER}: Hierarchical Transformers for Knowledge Graph Embeddings",
    author = "Chen, Sanxing  and
      Liu, Xiaodong  and
      Gao, Jianfeng  and
      Jiao, Jian  and
      Zhang, Ruofei  and
      Ji, Yangfeng",
    booktitle = "Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing",
    month = nov,
    year = "2021",
    address = "Online and Punta Cana, Dominican Republic",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2021.emnlp-main.812",
    pages = "10395--10407",
}
```

</template>
</paper>

<paper paper="https://doi.org/10.18130/v3-mhyd-et41">
<template #title>Contextualizing Language Understanding with Graph-based Knowledge Representations</template>
<template #authors><strong>Sanxing Chen</strong></template>
<template #venue>Master's thesis, The University of Virginia, 2020</template>
<template #abs>

::: tip Abstract
Language understanding requires not only linguistic knowledge but also relies on knowledge that is external to textual symbols.
A vast amount of knowledge is stored in the form of graph-structured data in many application domains.
Despite a growing interest in developing knowledge-driven approaches in the community, how to build powerful representations of graph-structured knowledge and effectively incorporate them into language understanding models remains a challenging problem in natural language processing research.

This thesis explores the direction of contextualizing language understanding with graph-based knowledge representations.
I first demonstrate the challenges of building meaningful interactions between language representations and domain-specific knowledge representations in the task of cross-domain Text-to-SQL semantic parsing.
By citing this example, I point out the idea of fostering multiple connections between the two representations in their different levels of abstraction and utilize the idea to substantially improve two graph neural network-based semantic parsers.
To implement this idea in a more general form to benefits more language understanding tasks, I propose a new knowledge graph representation model that shares a similar Transformer architecture design with prevalent language models.
In the task of factoid question answering, I show that the proposed knowledge representations can be effectively integrated into state-of-the-art pre-trained language models via a simple cross-modality attention mechanism.
:::

</template>
<template #bib>

``` tex
@mastersthesis{chen2020contextualizing,
	title = {Contextualizing Language Understanding with Graph-based Knowledge Representations},
	school = {The University of Virginia},
	author = {Chen, Sanxing},
	year = {2020},
	langid = {english}
}
```

</template>
</paper>

<paper paper="https://www.aclweb.org/anthology/2020.coling-main.260" arxiv="https://arxiv.org/abs/2009.14809" code="https://github.com/sanxing-chen/linking-tale">
<template #title>A Tale of Two Linkings: Dynamically Gating between Schema Linking and Structural Linking for Text-to-SQL Parsing</template>
<template #authors><strong>Sanxing Chen</strong>, Aidan San, Xiaodong Liu, Yangfeng Ji</template>
<template #venue>In COLING'2020 (Oral)</template>
<template #abs>

::: tip Abstract
In Text-to-SQL semantic parsing, selecting the correct entities (tables and columns) to output is both crucial and challenging; the parser is required to connect the natural language (NL) question and the current SQL prediction with the structured world, *i.e.*, the database. We formulate two linking processes to address this challenge: *schema linking* which links explicit NL mentions to the database and *structural linking* which links the entities in the output SQL with their structural relationships in the database schema. Intuitively, the effects of these two linking processes change based on the entity being generated, thus we propose to dynamically choose between them using a gating mechanism. Integrating the proposed method with two graph neural network based semantic parsers together with BERT representations demonstrates substantial gains in parsing accuracy on the challenging Spider dataset. Analyses show that our method helps to enhance the structure of the model output when generating complicated SQL queries and offers explainable predictions.
:::

</template>
<template #bib>

``` tex
@inproceedings{chen2020tale,
    title = "A Tale of Two Linkings: Dynamically Gating between Schema Linking and Structural Linking for Text-to-{SQL} Parsing",
    author = "Chen, Sanxing  and
      San, Aidan  and
      Liu, Xiaodong  and
      Ji, Yangfeng",
    booktitle = "Proceedings of the 28th International Conference on Computational Linguistics",
    month = dec,
    year = "2020",
    address = "Barcelona, Spain (Online)",
    publisher = "International Committee on Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2020.coling-main.260",
    pages = "2900--2912"
}
```

</template>
</paper>

## Service

- Program committee member (reviewer): COLING'2020, NAACL'2021, ACL'2021, EMNLP' 2021, NLPCC' 2021, ARR (regularly)
- Volunteer: ACL'2020, EMNLP'2020

## Misc

- My name is pronounced as "sǣnɕə̄ŋ".
- I am originally from [Quanzhou](https://en.wikipedia.org/wiki/Quanzhou), China. It was one of the world's largest and most cosmopolitan seaports and now a [World Heritage Site](https://whc.unesco.org/en/list/1561). (Interestingly, UVA is also a [World Heritage Site](https://whc.unesco.org/en/list/442).)
- I started playing the violin when I was a little boy.


## Contact

:email: i [at] sxing [dot] xyz

:bird: @sanxing_chen

<a class="twitter-timeline" data-lang="en" data-width="390" data-height="600" data-theme="light" data-link-color="#e57200" href="https://twitter.com/sanxing_chen/likes?ref_src=twsrc%5Etfw">Tweets Liked by @sanxing_chen</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>