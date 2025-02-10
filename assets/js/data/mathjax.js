---
layout: compress
# WARNING: Don't use '//' to comment out code, use '{% comment %}' and '{% endcomment %}' instead.
---

{%- comment -%}
  See: <https://docs.mathjax.org/en/latest/options/input/tex.html#tex-options>
{%- endcomment -%}

MathJax = { 
  loader: {load: ['[tex]/ams', '[tex]/configmacros']},
  startup: {
    ready() {
      {%- comment -%} Adjust the default script scaling parameters {%- endcomment -%}
      const math = MathJax._.core.MmlTree.MmlNodes.math.MmlMath;
      math.defaults.scriptminsize = '12px';
      math.defaults.scriptsizemultiplier = .8;

      {%- comment -%} Create the usual MathJax objects {%- endcomment -%}
      MathJax.startup.defaultReady();

      {%- comment -%} Add a TeX jax pre-filter to add \displaystyle{...} around in-line material {%- endcomment -%}
      MathJax.startup.document.inputJax[0].preFilters.add((data) => {
        if (!data.math.display) {
          data.math.math = '\\displaystyle{' + data.math.math + '}';
        }
      });
    }
  },
  tex: {
    {% comment %} extensions to use {% endcomment %}
    packages: {'[+]': ['base', 'ams','physics', 'newcommand', 'configmacros']},
    {%- comment -%} start/end delimiter pairs for in-line math {%- endcomment -%}
    inlineMath: [ ['$', '$'], ['\\(', '\\)'] ],
    {%- comment -%} start/end delimiter pairs for display math {%- endcomment -%}
    displayMath: [ ['$$', '$$'], ['\\[', '\\]'] ],
    {%- comment -%} use \$ to produce a literal dollar sign {%- endcomment -%}
    processEscapes: true,
    {% comment %} process \begin{xxx}...\end{xxx} outside math mode {% endcomment %}
    processEnvironments: true,
    {% comment %} process \ref{...} outside of math mode {% endcomment %}
    processRefs: true,
    {%- comment -%} equation numbering {%- endcomment -%}
    tags: 'ams',
    {%- comment -%} path to customized macros {%- endcomment -%}
    macros: {
      "br": ["{\\!\\left(#1\\right)}", 1],
      "cbr": ["{\\left\\{#1\\right\\}}", 1],
      "abr": ["{\\left<#1\\right>}", 1],
      "bbr": ["{\\left[#1\\right]}", 1],
      "abbr": ["{\\left(#1\\right]}", 1],
      "babr": ["{\\left[#1\\right)}", 1],
      "abs": ["{\\left|#1\\right|}", 1],
      "norm": ["{\\left\\|#1\\right\\|}", 1],
      "floor": ["{\\left\\lfloor#1\\right\\rfloor}", 1],
      "ceil": ["{\\left\\lceil#1\\right\\rceil}", 1],
      "R": "{\\mathbb{R}}",
      "N": "{\\mathbb{N}}",
      "Z": "{\\mathbb{Z}}",
      "C": "{\\mathbb{C}}",
      "F": "{\\mathbb{F}}",
      "kfield": "{\\Bbbk}",
      "K": "{\\mathbb{K}}",
      "Q": "{\\mathbb{Q}}",
      "Pprime": "{\\mathbb{P}}",
      "Ccat": "{\\mathsf{C}}",
      "Grp": "{\\mathsf{Grp}}",
      "Ab": "{\\mathsf{Ab}}",
      "Ring": "{\\mathsf{Ring}}",
      "Set": "{\\mathsf{Set}}",
      "Mod": "{\\mathsf{Mod}}",
      "Vect": "{\\mathsf{Vect}}",
      "Alg": "{\\mathsf{Alg}}",
      "Comm": "{\\mathsf{Comm}}",
      "i": "{\\mathrm{i}}",
      "id": "{\\mathrm{id}}",
      "e": "{\\mathrm{e}}",
      "d": "{\\mathrm{d}}",
      "D": "{\\partial}",
      "Span": "{\\mathrm{span}}",
      "Obj": "{\\mathrm{Obj}}",
      "Mor": "{\\mathrm{Mor}}",
      "Cen": "{C}",
      "opcat": "{^{\\mathrm{op}}}",
      "hyphen": "{\\textrm{-}}",
      "ds": "{\\displaystyle}",
      "ve": "{\\varepsilon}",
      "rev": "{^{-1}\\!}",
      "T": "{^{\\mathsf{T}}}",
      "H": "{^{\\mathsf{H}}}",
      "adj": "{^\\lor}",
      "dual": "{^\\vee}",
      "hint": ["{\\small (#1)}", 1],
      "why": "{\\textcolor{red}{(Why?)}}",
      "tbc": "{\\textcolor{red}{(To be continued...)}}",
      "Hom": "\\operatorname{Hom}",
      "End": "\\operatorname{End}",
      "Iso": "\\operatorname{Iso}",
      "Aut": "\\operatorname{Aut}",
      "Inn": "\\operatorname{Inn}",
      "inv": "\\operatorname{Inv}",
      "GL": "\\operatorname{GL}",
      "SL": "\\operatorname{SL}",
      "GF": "\\operatorname{GF}",
      "Arg": "\\operatorname{Arg}",
      "re": "\\operatorname{Re}",
      "im": "\\operatorname{im}",
      "grad": "\\operatorname{grad}",
      "lcm": "\\operatorname{lcm}",
      "sgn": "\\operatorname{sgn}",
      "conv": "\\operatorname{conv}",
      "supp": "\\operatorname{supp}",
      "Log": "\\operatorname{Log}",
      "card": "\\operatorname{card}",
      "Res": "\\operatorname{Res}",
      "tr": "\\operatorname{tr}",
      "rank": "\\operatorname{rank}",
      "charfield": "\\operatorname{char}",
      "codim": "\\operatorname{codim}",
      "coim": "\\operatorname{coim}",
      "coker": "\\operatorname{coker}",
      "Spec": "\\operatorname{Spec}",
      "lhs": "\\operatorname{LHS}",
      "rhs": "\\operatorname{RHS}"
    }
} };