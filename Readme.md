# Homepage2

> Author: Dipsy Wong ([dipsywong98](//github.com/dipsywong98))

My second generation personal website~

Using only Vue.js, Pug and SCSS, trying to use minimal dependencies,
and practicing my CSS skill on creating various beautiful web frontend effects.

I hope my code looks will and will not burn your eyes :)

## Developing

```shell script
# development server
npm run serve

# build a static site
npm run build

# deploy to github pages
npm run deploy
``` 

## Changing data

If you somehow want to clone my personal site as your own, feel free~

What you may want to change the content of works and blogs,
or you may want to add extra sections. The following will show you how to.

### Content of works

You can change the content of `public/works.yml` or `public/blog.yml`,
both of them are of same structure. For each item, there are some fields

```yml
- title: # title of the work
  titleLink: # optional link on the title
  liveLink: # optional link which shows a blue triangle at the top right
  brief: # optional short description
  story: # optional long description,
         # with just the presence of story key will read the md file from
         # public/works/<title>.md
         # else you can specify a URl to the md file
  time: # optional time string show when this is done
  tags: # optional list of tags for searching
    - Python # language tag have a default color 
```

In `App.vue`, in the template `Works(category="blog")` specifies `blog.yml` shall be read.
Similarly for `works.yml` 

## Some useful components

### RippleFullScreen

By clicking on this component, a ripple appears and show some inner content which was
hidden or haven't loaded yet. Then click x at top right corner or press ESC to close.

|slot|functionality|
|----|----|
|outside|The content of the square which clicking the square trigger the ripple|
|inside| The content of the ripple|

|props|functionality|
|----|----|
|ripple|set true to enable the ripple effect, false disable. Default true|

|event|description|
|---|---|
|animate|ripple just started to expand|
|active| ripple just stopped expanding|

Sometimes you may click the components inside the ripple container, but you dont want
that trigger the ripple. You can add `prevent-ripple-full-screen` class to such components.

Example:

```pug
RippleFullScreen(@animate="onRippleAnimate()" @active="onRippleAnimate()" :ripple="ripple")
  template(slot="outside")
    .work-ripple-outside click me!
  template(slot="inside")
    p I say hello in the inside
```

### ChipInput

It has auto complete and chip editing property.

|props|description|
|---|---|
|availables|All possible values for auto complete|
|value|the chips, two way binded|

|event|description|
|---|---|
|input|some chip are inputed|
