# Python Guide 
#### By Dipsy Wong


### Overview 
Python is a scripting language, need an interpreter but not compiler, so it exist in text format but not an executable file.
### Syntax Characteristic 
Python does not require semicolon to separate different statements. Scope is started with colon `:` and defined by 4 space or 1 tab. 
(We will discuss scope later) Beginners of python are easily mess these syntax characteristics.
### Get started 
When start learning a new programming language, the first program is always hello world 
```python
print(“hello world”) 
```
Simple.

### Variables 
A variable is like a box. It stores thing in it, with a tag outside to reach it. Like `x = 1` it is a box with a tag `x` and storing `1` in it. 
Apart from numbers, variable can also store string.
For example `mystr="hello"`

We can also print out value of variables
```python
x = 1
print(x) 
mystr = "hello"
print(mystr)
```
result:
```
1
hello
```

### Calculation 
Python follows mathematical calculation. You can have calculations like `x = 1+2+34(1+3).`
There is order of operation (Operators Precedence) in python

|   | Operator                                 | Description                       |
|---|------------------------------------------|-----------------------------------|
| > | `()`                                     | parenthesis (highest precedence )|
| > | `**`                                     | exponentiation                    |
| > | `+x` `-x`                                | unary-plus unary-minus            |
| > | `*` `/` `%` `//`                         | multiply divide modulus divide    |
| > | `+` `-`                                  | addition subtraction              |
| > | `<` `<=` `>=` `>` `==` `!=`              | comparison-operators and equality-operators|
| > | `in` `not in` | Membership-operators              |
| > | `not`                                    | logic-not                         |
| > | `and`                                    | logic-and                         |
| > | `or`                                     | logic-or (lpwest precedence )     |

