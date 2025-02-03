---
title: 使用Chirpy模板撰写文章的技巧
description: 使用中一些需要注意的地方
date: 2025-02-03 20:15:00 +0800
categories: [杂谈]
tags: [主页]
pin: false
math: true
mermaid: true
---

## 文章的头信息(frontmatter)

文章作为`.md`文件存在`/_posts`中, 每个`.md`文件需要有一段头信息(frontmatter), 可参照[撰写新帖子](https://pansong291.github.io/chirpy-demo-zhCN/posts/write-a-new-post/), 其中更改作者`author`可见[Author Information](https://chirpy.cotes.page/posts/write-a-new-post/#author-information).

```markdown
---
title: TITLE
description: DESCRIPTION # 可选
author: # 默认是social.name
date: YYYY-MM-DD HH:MM:SS +0800 # 时间和时区可选
categories: [TOP_CATEGORIE, SUB_CATEGORIE] 
tags: [TAG]
toc: true # 目录
comment: true # 评论区
pin: true # 置顶
math: true # 数学模式, 由MathJax支持
mermaid: true # Markdown的一种扩展, 用于画图
cdn: url # 只能作为img的根目录,所以对我作用不大
---
```

## 模板独有的类型提示

`markdown`中引文以`> `在行首出现, Chirpy提供了一些提示(但我不一定记得用):

```markdown
> 显示 `tip` 类型提示的例子。
{: .prompt-tip }

> 显示 `info` 类型提示的例子。
{: .prompt-info }

> 显示 `warning` 类型提示的例子。
{: .prompt-warning }

> 显示 `danger` 类型提示的例子。
{: .prompt-danger }
```

> 显示 `tip` 类型提示的例子。
{: .prompt-tip }

> 显示 `info` 类型提示的例子。
{: .prompt-info }

> 显示 `warning` 类型提示的例子。
{: .prompt-warning }

> 显示 `danger` 类型提示的例子。
{: .prompt-danger }

## 内嵌pdf

我用了`<iframe>`在网站中内嵌pdf文件,一般是如下形式：

```markdown
<iframe 
    src="https://cdn.jsdelivr.net/gh/user/repo@version/file/"
    frameborder="0" width="100%" height="600px">
</iframe>
```

其中用了js Delivr的CDN，其他链接也可以放。