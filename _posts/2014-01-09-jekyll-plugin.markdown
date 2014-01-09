---
layout: post
title: Jekyll Plugin
date: 2014-01-09 22:30:00
categories: hack
---

I'm testing a jekyll you tube plugin I found [here](https://gist.github.com/joelverhagen/1805814).
It runs well on local preview:
{% highlight bash %} $ jekyll server {% endhighlight %}
but after I push it on github I received a Page build failure email.

A fast search and I found that github pages does not support [unsafe plugins](https://help.github.com/articles/pages-don-t-build-unable-to-run-jekyll).

Before push your new post to github is a good practice to build you site in safe mode and check for errors:
{% highlight bash %} $ jekyll build --safe {% endhighlight %} 

Of course in that case the plugin is really unnecessary so I've removed the plugin and add the html code myself as suggested by gitthub.

Here is the result, my "little" sister playing for  Lucca  Philharmonic Orchestra:
<p><iframe width="560" height="420" src="http://www.youtube.com/embed/tO13X2hEWK0?color=white&theme=light"></iframe> </p>



