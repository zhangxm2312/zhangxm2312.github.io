---
title: 一个意料之外的bug
date: 2025-02-07 00:05:00 +0800
categories: [计算机, 主页]
tags: [网站]
---

在刚刚的commit [Website Upgrade (3rd)](https://github.com/cotes2020/jekyll-theme-chirpy/commit/fd0f692186b59fc1e0bbb76bd4a721b4e74405d9) 中网页出现了无明显提示的错误布局:

![出错的页面](/assets/img/postimg/DFD728E805DCF724EDE0A4859414F871.png)

在我回退commit并将其一个一个重新提交后发现bug出现在几乎不会被察觉的地方:在commit前`\assets\css\jekyll-theme-chirpy.scss`的代码片段为
{% raw %}
```scss
@use 'main
{%- if jekyll.environment == 'production' -%}
  .bundle
{%- endif -%}
';
```
{% endraw %}
但在保存提交后,代码变成了
{% raw %}
```scss
@use 'main
{%- if jekyll.environment == ' production ' -%}
  .bundle
{%- endif -%}
';
```
{% endraw %}
这是一个极其难以察觉的错误. 之所以发生是因为在VSCode保存前我(也是默认)的美化插件[Prettier Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)会自动格式化一次代码,在插件的识别中,`'main` ... `== '`被看作一个字符串,因此美化将字符串与后面的"变量"`production`之间加了一个空格,导致调用错误,从而网页布局错误(且没有任何报错).