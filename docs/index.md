---
title: Sanxing Chen - UVa CS
lang: en-US
---
<link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC" rel="stylesheet">

<!-- # <div><p style="font-variant: small-caps; display: inline;">Sanxing Chen</p></div> -->
<h3></h3>
<div><h1 style='background: unset; color: #e57200;'>Sanxing</h1> <h1>Chen</h1></div>
<!-- <p style="font-family:'Noto Serif SC', serif; display: inline;">陈三星</p> -->

<style type="text/css"> 



</style>


## Bio

<img src="./img/uva.jpg" alt="img" id="myimg" style="float:right;border-radius: 0 12% 0 0;transition: width 0.5s;opacity: 0.8;">

I'm a second-year master student in computer science at the [University of Virginia](https://engineering.virginia.edu/departments/computer-science), where I work with Prof. [Yangfeng Ji](http://yangfengji.net) in the [NLP group](https://uvanlp.org/).

My long-term research interest lies primarily in helping computers to learn natural languages in the way humans do.
Language is the [conduit](https://en.wikipedia.org/wiki/Conduit_metaphor) which bridges different forms of knowledge.
So, by itself, it doesn't necessarily contain all the information.
That's why I'm currently focusing on grounded language learning,
especially in finding intuitive algorithms to perform relational learning on graphs and texts.

**I'm actively looking for Ph.D. and research internship opportunities starting Spring 2021. <a href="CV.pdf" target="_blank">[CV]</a>**

<!-- I was lucky to be exposed to a few NLP research studies early at college.
For instance, I worked on domain adaptation for machine translation with Prof. [Xiaohui Ji](https://www.researchgate.net/scientific-contributions/69798625_Xiaohui_Ji).  -->

## News  :tada:

- **[Jun 12, 2020]** I'll be attending [AKBC 2020](https://www.akbc.ws/2020/), [ACL 2020](https://acl2020.org/) and [ICML 2020](https://icml.cc/Conferences/2020) virtually!

<!-- 
- **[Apr 24, 2020]** I'll be attending [ICLR 2020](https://iclr.cc) virtually!
- **[Jan 19, 2020]** I'll be with Microsoft Ads and [MSR](https://www.microsoft.com/en-us/research/group/deep-learning-group/) this summer!
- **[Dec 21, 2019]** I'm actively seeking R&D internship opportunities for summer 2020!
- **[Dec 10, 2019]** We submitted one paper to ACL 2020!
- **[Mar 28, 2019]** Got accepted to MSCS@[UMass](https://umass.edu)!
- **[Feb 27, 2019]** I'm going to rejoin MSRA in April, excited to see my old friends there!
- **[Feb 21, 2019]** Got accepted to MSCS@[UVa](http://virginia.edu)!
- **[Dec 16, 2018]** All MS/Ph.D. applications sent out! -->

## Experience

<experience>
<template #company>Bing Ads & Microsoft Research</template>
<template #title>Research Intern</template>
<template #location>Home office, United States</template>
<template #date>May 2020 - Aug 2020</template>
<template #work>Relational learning and NLP with Dr. <a href="https://sites.google.com/view/buptxiaodong/home">Xiaodong Liu</a> and Dr. Jian Jiao</template>
</experience>
<experience>
<template #company>Microsoft Research Asia</template>
<template #title>Research Intern</template>
<template #location>Beijing, China</template>
<template #date>Mar 2019 - Jun 2019</template>
<template #work><a href="bert-time.pdf" target="_blank">Time expression recognition</a> with <a href="https://www.microsoft.com/en-us/research/people/guow/" target="_blank">Guoxin Wang</a> and Dr. <a href="https://www.microsoft.com/en-us/research/people/borjekar/" target="_blank">Börje Karlsson</a></template>
</experience>
<experience>
<template #company>Microsoft Research Asia</template>
<template #title>Research Intern</template>
<template #location>Beijing, China</template>
<template #date>Feb 2018 - Sep 2018</template>
<template #work><a href="https://github.com/Microsoft/Recognizers-Text" target="_blank">Generic types entity recognition</a> with Dr. <a href="https://www.microsoft.com/en-us/research/people/borjekar/" target="_blank">Börje Karlsson</a></template>
</experience>

## Publications

<paper arxiv="https://arxiv.org/abs/2008.12813">
<template #title>⚾️ HittER: Hierarchical Transformers for Knowledge Graph Embeddings</template>
<template #authors><strong>Sanxing Chen</strong>, Xiaodong Liu, Jianfeng Gao, Jian Jiao, Ruofei Zhang, Yangfeng Ji</template>
<template #venue>Pre-print</template>
<template #abs>

::: tip Abstract
This paper examines the challenging problem of learning representations of entities and relations in a complex multi-relational knowledge graph. We propose **HittER**, a **Hi**erarchical **T**ransformer model **t**o jointly learn **E**ntity-relation composition and **R**elational contextualization based on a source entity’s neighborhood. Our proposed model consists of two different Transformer blocks: the bottom block extracts features of each entity-relation pair in the local neighborhood of the source entity and the top block aggregates the relational information from the outputs of the bottom block. We further design a masked entity prediction task to balance information from the relational context and the source entity itself. Evaluated on the task of link prediction, our approach achieves new state-of-the-art results on two standard benchmark datasets FB15K-237 and WN18RR.
:::

</template>
<template #bib>

``` tex
@article{chen2020hitter,
    title={HittER: Hierarchical Transformers for Knowledge Graph Embeddings},
    author={Sanxing Chen and Xiaodong Liu and Jianfeng Gao and Jian Jiao and Ruofei Zhang and Yangfeng Ji},
    journal={arXiv preprint arXiv:2008.12813},
    year={2020}
}
```

</template>
</paper>
<paper arxiv="https://arxiv.org/abs/2009.14809" code="https://github.com/sanxing-chen/linking-tale">
<template #title>A Tale of Two Linkings: Dynamically Gating between Schema Linking and Structural Linking for Text-to-SQL Parsing</template>
<template #authors><strong>Sanxing Chen</strong>, Aidan San, Xiaodong Liu, Yangfeng Ji</template>
<template #venue>To appear at COLING'2020</template>
<template #abs>

::: tip Abstract
In Text-to-SQL semantic parsing, selecting the correct entities (tables and columns) to output is both crucial and challenging; the parser is required to connect the natural language (NL) question and the current SQL prediction with the structured world, *i.e.*, the database. We formulate two linking processes to address this challenge: *schema linking* which links explicit NL mentions to the database and *structural linking* which links the entities in the output SQL with their structural relationships in the database schema. Intuitively, the effects of these two linking processes change based on the entity being generated, thus we propose to dynamically choose between them using a gating mechanism. Integrating the proposed method with two graph neural network based semantic parsers together with BERT representations demonstrates substantial gains in parsing accuracy on the challenging Spider dataset. Analyses show that our method helps to enhance the structure of the model output when generating complicated SQL queries and offers explainable predictions.
:::

</template>
<template #bib>

``` tex
@inproceedings{chen2020tale,
    title={A Tale of Two Linkings: Dynamically Gating between Schema Linking and Structural Linking for Text-to-SQL Parsing},
    author={Sanxing Chen and Aidan San and Xiaodong Liu and Yangfeng Ji},
    booktitle = "Proceedings of the 28th International Conference on Computational Linguistics",
    year={2020}
}
```

</template>
</paper>

## Service

- Program committee member (reviewer): COLING'2020
- Secondary reviewer: TPAMI'2020
- Volunteer: ACL'2020

## Misc

- My name is pronounced as "sǣnɕə̄ŋ".
- I come from [Quanzhou](https://en.wikipedia.org/wiki/Quanzhou).
- I started playing the violin when I was a little boy.


## Contact

:email:

- sc3hn [at] virginia [dot] edu
- staychan [dot] cn [at] gmail [dot] com

:bird:

<a class="twitter-timeline" data-lang="en" data-width="390" data-height="600" data-theme="light" data-link-color="#e57200" href="https://twitter.com/sanxing_chen/likes?ref_src=twsrc%5Etfw">Tweets Liked by @sanxing_chen</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>