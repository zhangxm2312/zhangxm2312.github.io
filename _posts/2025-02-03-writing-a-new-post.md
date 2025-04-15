---
title: 使用Chirpy模板撰写文章的技巧
description: 使用中一些需要注意的地方
date: 2025-02-03 20:15:00 +0800
categories: [计算机, 主页]
tags: [网站]
---

## 文章的头信息(Front Matter)

文章作为`.md`文件存在`/_posts`中, 每个`.md`文件需要有一段头信息(frontmatter), 可参照[撰写新帖子](https://pansong291.github.io/chirpy-demo-zhCN/posts/write-a-new-post/), 其中更改作者`author`可见[Author Information](https://chirpy.cotes.page/posts/write-a-new-post/#author-information). 关于更深入的内容可参照[Front Matter](https://jekyllrb.com/docs/front-matter/) 和 [Posts](https://jekyllrb.com/docs/posts/).

事实上, 在如下Front Matter中仅有`title`与`date`是必选项.

```markdown
---
layout: # 在Chirpy模板中默认为post
permalink: # 最终导向的URL
title: TITLE
description: DESCRIPTION # 可选
author: # 默认是social.name
date: YYYY-MM-DD HH:MM:SS +0800 # 时间和时区可选
categories: [TOP_CATEGORIE, SUB_CATEGORIE] 
tags: [TAG]
excerpt_separator: # 摘录段落
published: # 是否公开
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

## 内嵌

### pdf

我用了`<iframe>`在网站中内嵌pdf文件,一般是如下形式：

```html
<iframe 
    src="https://cdn.jsdelivr.net/gh/user/repo@version/file/"
    frameborder="0" width="100%" height="600px">
</iframe>
```

其中用了js Delivr的CDN，其他链接也可以放。

### 视频

详见[Write a New Post](https://chirpy.cotes.page/posts/write-a-new-post/#video). 对于平台视频可使用如下语法:
{% raw %}
```liquid
{% include embed/{Platform}.html id='{ID}' %}
```
{% endraw %}
其中`{Platform}`是平台名称(支持Youtube, Twitch和Bilibili), `{ID}`是视频ID.

对于一般的视频和音频可以直接用:
{% raw %}
```liquid
{% include embed/video.html src='{URL}' %}
{% include embed/audio.html src='{URL}' %}
```
{% endraw %}


### 图片

使用
```markdown
![My helpful screenshot](/assets/img/postimg/screenshot.jpg)
```

## 脚注

需要写
```markdown
正文[^footnote],正文
```
而在正文最后可以写反向脚注:
```markdown
[^footnote]: 这是一个脚注
```