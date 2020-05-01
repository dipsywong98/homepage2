# A challenging programming boolean algebra question

## Background

So.... I have been seeing people boring during quarantine and many challenges pop out, I decided to challenge you with a programming math question, which is originated from a programming technique I developed when I was a secondary school student. (You can just skip to the question)

At that time I was making games using twf (an unofficial name I gave to the game making feature inside [Twilight Wars](https://twilightwars.gamelet.online/), a Taiwan online flash game, where twf is the file extension it used), I developed quite a number of techniques to bypass its limitations and optimize the flow, and made a website [twftechniques](https://sites.google.com/site/twftechnique/) with my friends. In particular, there was a hack to do branching in twf since there was no `if-else` support until very late stage. For example when we are placing an NPC `ch0001` depending on some boolean value `x`, that is `x` either `0` or `1`, we can do it by

```
A.0 = (0,0)
A.1 = (1,1)
move ch0001 to A.{x}
```

Twf will replace the `{x}` with the actual value of `x`, so when `x` is `0`, it will move `ch0001` to `(0,0)`, and when `x` is `1`, it will move `ch0001` to `(1,1)`. See, no `if` is needed, but we achieved branching here!

However, twf only supported arithmetic operators on integers, we could not do arithmetics on comparison result nor logic calculation, there is no such thing `bool b = z && (x > y) || (j != k)` in twf, not even `bool b = x == y` , unlike what we can do in modern programming language. Therefore I developed some techniques to do boolean algebra in terms of integers and ordinary arithmetics only, and this is the origin of the question.

## The question

For all integers $a,b$ between $[-2^{31}, 2^{31}]$, with the operators $+,-,\times, a^b,/,\setminus,\div$ are defined as follows:
$$
\newcommand{\ceil}[1]{\lceil #1 \rceil}
\newcommand{\floor}[1]{\lfloor #1 \rfloor}
\begin{aligned}
a+b&=\max(-2^{31}, \min(a+_\mathbb{Z}b, 2^{31}))\\
a-b&=\max(-2^{31}, \min(a-_\mathbb{Z}b, 2^{31}))\\
a\times b&=\max(-2^{31}, \min(ab, 2^{31}))\\
a^b&=\max(-2^{31}, \min(\floor{\underbrace{aaa\dots a}_b}, 2^{31}))\\
a / b&=\max(-2^{31}, \min(\ceil{\frac{a}{b}}, 2^{31}))\\
a\setminus b&=\max(-2^{31}, \min(\floor{\frac{a}{b}}, 2^{31}))\\
a\div b&=\max(-2^{31}, \min(\operatorname{round}({\frac{a}{b}}), 2^{31}))\\
\end{aligned}
$$
where operators with subscript $\mathbb{Z}$ denote the default operator of integers.  the result of the operators will give a result as an integer within the range $[-2^{31}, 2^{31}]$. For example the operators behave like the following table

| $a$       | $b$      | $a+b$    | $a-b$      | $a\times b$ | $a^b$    | $a/b$    | $a\setminus b$ | $a \div b$ |
| --------- | -------- | -------- | ---------- | ----------- | -------- | -------- | -------------- | ---------- |
| 0​         | 0        | 0        | 0          | 0           | 0        | $2^{31}$ | $2^{31}$       | $2^{31}$   |
| 2         | 4        | 6        | -2         | 8           | 16       | 1        | 0              | 1          |
| 1         | 3        | 4        | -2         | 3           | 1        | 1        | 0              | 0          |
| 2         | -4       | -2       | 6          | -8          | 0        | 0        | -1             | 0          |
| $2^{31}$  | $2^{31}$ | $2^{31}$ | 0          | $2^{31}$    | $2^{31}$ | 1        | 1              | 1          |
| $-2^{31}$ | $2^{31}$ | 0        | $- 2^{31}$ | $- 2^{31}$  | $2^{31}$ | -1       | -1             | -1         |

The question is using any constant between $[-2^{31},2^{31}]$ and operators defined above, construct all comparison and logic operators on integers between $[-2^{31},2^{31}]$ that will output $0,1$ only, which represent a false or true result respectively. The operators to construct are $\equiv,\not\equiv,<,\le,\ge,>,\neg,\lor,\land$, which represent equals, not equals, less than, less than or equal, greater than or equal, greater than, logic not, logic or and logic and respectively, that is

$$
\begin{aligned}
a\equiv b &= \begin{cases} 1&(a=b)\\0&(\text{otherwise})\end{cases}\\
a\not\equiv b &= \begin{cases} 1&(a\neq b)\\0&(\text{otherwise})\end{cases}\\
a < b &= \begin{cases} 1&(a\text{ less than }b)\\0&(\text{otherwise})\end{cases}\\
a \le b &= \begin{cases} 1&(a\text{ less than or equal }b)\\0&(\text{otherwise})\end{cases}\\
a \ge b &= \begin{cases} 1&(a\text{ greater than or equal }b)\\0&(\text{otherwise})\end{cases}\\
a > b &= \begin{cases} 1&(a\text{ greater than }b)\\0&(\text{otherwise})\end{cases}\\
\neg a &= \begin{cases} 1&(a=0)\\0&(\text{otherwise})\end{cases}\\
a \lor b &= \begin{cases} 1&(a\neq 0 \text{ or } b\neq 0)\\0&(\text{otherwise})\end{cases}\\
a \land b &= \begin{cases} 1&(a\neq 0 \text{ and } b\neq 0)\\0&(\text{otherwise})\end{cases}\\
\end{aligned}
$$

For example the operators should behave like the following table

| $a$  | $b$  | $a\equiv b$ | $a\not \equiv b$ | $a < b$ | $a \le b$ | $a \ge b$ | $a > b$ | $\neg a$ | $a\lor b$ | $a \land b$ |
| ---- | ---- | ----------- | ---------------- | ------- | --------- | --------- | ------- | -------- | --------- | ----------- |
| 0    | 0    | 1           | 0                | 0       | 1         | 1         | 0       | 1        | 0         | 0           |
| 0    | -2   | 0           | 1                | 0       | 0         | 1         | 1       | 1        | 1         | 0           |
| -2   | 2    | 0           | 1                | 1       | 1         | 0         | 0       | 0        | 1         | 1           |
| -10  | -10  | 1           | 0                | 0       | 1         | 1         | 0       | 0        | 1         | 1           |

There should be more than one answer, although I think this is not a easy question. I will make another post on the answers. Lastly, I wish you good luck and stay safe~