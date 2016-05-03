# Groot
The (g)root of all projects - http://lukewhitehouse.co.uk/groot

Groot is a class-based declarative CSS Grid system, originally derived from the amazing work Nicolas Gallagher produced with [Griddle](https://github.com/necolas/griddle). I've been using Griddle for many years professionally and whilst I love the overall package, its not perfect and could do with a upgrade. I've started Groot with the intention of being that.

Groot prides itself on the following:

- **Declarative**: Opt-in, breakpoint specific classes for column sizings means you're in control. Gone are the days of all grids adhering to the same column sizes.
- **Modular**: Defaults to a BEM structured Grid System and keeps the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) in mind at all times.
- **Lightweight**: Don't worry about bloated code, only the code you need for your project is created. You're looking at ~4KB gzipped.
- **Configurable**: Ability to change any class names, gutter sizes or alignment defaults to your hearts desire. Prefer SMACSS or OOCSS? Don't sweat it.

## Installation

Groot is available through a number of package managers. Alternatively, you can always download/clone the project manually via [Github](http://github.com/lukewhitehouse/groot).

```sh
npm install --save-dev groot-sass
bower install --save groot-sass
```

## Usage

As this is a Sass based grid system, you’ll need to import the package using Sass’ `@import` function and then use the included mixin to setup your grid by using the `@include` function.

```scss
@import "/path/to/groot";
@include groot($columns, $extension);
```

The mixin takes two parameters:

- `$columns`: A space-separated list of integers, each of which results in the build of that particular grid.
- `$extension`: The suffix for the class. This is optional and is intended when you're setting up a Groot instance within a Media Query.

So, lets say we're creating 2 and 3 column grids. Here's what that would look like:

```scss
@import "/path/to/groot";
@include groot(2 3);
```

which will output the following classes to use in your HTML (assuming default configuration has been used, see next section for more info)...

```css
.grid__item--1-2 {}
.grid__item--2-2 {}
.grid__item--1-3 {}
.grid__item--2-3 {}
.grid__item--3-3 {}
```

If we then wanted these classes (read: these column sizes) to only be useable at a certain breakpoints, we can start to utilise the `$extension` suffix within a Media Query. Like so:

```scss
$bp3: 50em;

@import "/path/to/groot";

@media screen and (min-width: $bp3) {
    @include groot(2 3, 'bp3');
}
```

which will output the following classes to use in your HTML (again assuming default configuration)...

```css
@media screen and (min-width: 50em) {
    .grid__item--1-2-bp3
    .grid__item--2-2-bp3
    .grid__item--1-3-bp3
    .grid__item--2-3-bp3
    .grid__item--3-3-bp3
}
```


## Configuration

One of the main benefits of Groot is that you can tailor it to your needs. While Groot may have defaults for the configuration, you still have a lot of freedom to change these as you see fit.

Each of the variables should be declared above the import of Groot like so.

```scss
// Override default config here

@import "/path/to/groot";
@include groot($columns, $extension);
```

**Available options and defaults:**

Below is a list of all the configuration that comes baked into Groot. Don't like BEM? That's fine, go ahead and change it to whatevers hip and cool at the minute.

```scss
// Core
$gr-grid: "grid" !default;                           // Main grid container which holds all elements
$gr-item: "grid__item" !default;                     // Individual grid item/cell/unit/whatever you want to call it.
$gr-item-unit: "grid__item" !default;                // The class chained onto the same element as above which controls the sizing.

// Modifiers
$gr-grid-spaced: "grid--spaced" !default;            // Increase gutter size
$gr-grid-compact: "grid--compact" !default;          // Remove all gutters
$gr-grid-reversed: "grid--reversed" !default;        // Reverse direction of the grid. i.e. direction: rtl;
$gr-grid-centered: "grid--centered" !default;        // Centers the entire Grid, which grid items will inherit.
$gr-item-centered: "grid__item--centered" !default;  // Center an individual item, rather than all items.

// Sizing
$gr-gutter: 1em !default;                            // The size between each grid item. Can use any CSS unit of measurement.

// Grid Alignment
$gr-grid-direction: inherit !default;                // Initial direction of the $gr-grid
$gr-grid-align-x: inherit !default;                  // Initial horizontal alignment of the $gr-grid.

// Item Alignment
$gr-item-direction: inherit !default;                // Initial direction of the $gr-item
$gr-item-align-x: inherit !default;                  // Initial horizontal alignment of the $gr-item
$gr-item-align-y: top !default;                      // Initial vertical alignment of the $gr-item
```

## Modifiers

Groot comes with a few handy modifiers straight out of the box.


```css
/**
 * List of modifiers
 *
 * Remember that these show the default class names which can
 * be changed by reading the above section on Configuration.
 *
 */

.grid--spaced            // Double the gutter width between grid items
.grid--compact           // Remove the gutters between grid items
.grid--reversed          // Add this to the container grid to reverse direction of it.
.grid--centered          // Add this to the containing grid centers it and anything within (through CSS inheritance).
.grid__item--centered    // Adding this to a grid item centers only it, rather than all items.
```


## Examples

An [accompanying website](http://github.com/lukewhitehouse/groot-website) has been created to demonstrate Groot's capabilities and will eventually provide video tutorials on how to utilise Groot to its full capacity. For now, take a look at its source code.

## Compatability
Groot has been tried and tested within the latest browsers, but also works great for those older versions of IE that you may still need to support (I feel your struggle). Here's a full list of the browser/device combinations that Groot has been verified in. If you feel theres a problem with any of these, please [open an issue](https://github.com/lukewhitehouse/groot/issues) and we'll try to resolve it together.

| Desktop       | Mobile        |
| ------------- |---------------|
| Chrome        | iOS7+ | $1600 |
| Firefox       | Andriod 4.3+  |
| Safari        | Windows Phone |
| Opera         |               |
| Edge          |               |
| IE8*          |               |

> Whilst Groot does support IE8, there are caveats. IE8 doesn't support media queries and therefore you'll need to make sure you use something like [respond.js](https://github.com/scottjehl/Respond). However, I'd recommend if you need IE8 support that you give [Jake Archibold's Media Query Mixin](https://jakearchibald.github.io/sass-ie/) a read. Its great!

## Roadmap
Here's a quick roadmap on where I'd like to take Groot in the coming months.
- Screencasts: Showing detailed examples on how you can use Groot in your projects.
- LESS/Stylus support: Because not everyone uses Sass, right?

## Credits

With any project, theres always special thanks and recognition to be given:
- [Griddle](https://github.com/necolas/griddle): The inspriation for Groot.
- [Mixd](http://mixd.co.uk): Who introduced me to Griddle in the first place. If – like us – you work with WordPress then you may be interested in our Open Source project called [wp-deploy](https://github.com/Mixd/wp-deploy); a capistrano-powered deployment tool for WordPress.

## License

Apache License 2.0.

Copyright (c) 2016 Luke Whitehouse, https://github.com/lukewhitehouse/groot

http://choosealicense.com/licenses/apache-2.0/
