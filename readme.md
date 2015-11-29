# Groot
The root of all projects.

Groot is a class-based CSS Grid system derived from the amazing work Nicolas Gallagher produced with [Griddle](https://github.com/necolas/griddle). I've been using Griddle for many years professionally and whilst I love the overall package, its not perfect and could do with a upgrade. I've started Groot with the intention of being that.

Groot prides itself on the following:

- Flexibility: Complete control to fit it into your own workflow or framework.
- Modular: Defaults to a BEM structured Grid System and keeps the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) in mind at all times.
- Configurable: Ability to change any class names, gutter sizes or alignment declarations to your hearts desire.
- Lightweight: With its opt-in columns, you're looking at around 5kb minified and gzipped

## Installation

Groot is available through a number of package managers, including:

```sh
npm install --save-dev groot
bower install --save groot
```

Alternatively, you could always download/clone this repo and use it in your own way.

## Usage

Groot is pretty easy to get to grips with. Once you've imported to the Groot system, use the `groot` mixin provided to build out the grids you need.

```scss
@import "groot";
@include groot($columns, $extension);
```

It takes two parameters:

- `$columns`: A space-separated list of integers, each of which results in the build of that particular grid.
- `$suffix`: The suffix for the class. This is optional and is intended when you're setting up a Groot instance within a Media Query.


## Configuration
While Groot may have defaults for the configuration, you still have a lot of freedom in how you'd like to setup your version.

Each of the following variables should be declared **above** the import of Groot.

**For example:**

```scss

// Override default config here

@import "groot";

// Include mixin here
```

**Available options and defaults:**

Avaiable confirgurations can be seen by visiting the [`_variables.scss`](https://github.com/lukewhitehouse/groot/blob/master/assets/app/scss/_variables.scss) file. Here's a list for your convenience:

```scss
// Core
$gr-grid: "grid" !default;                           // Main grid container which holds all elements
$gr-item: "grid__item" !default;                     // Individual grid item/cell/unit/whatever you want to call it.
$gr-item-unit: "grid__item" !default;                // The class chained onto the same element as above which controls the sizing.

// Modifiers
$gr-grid-spaced: "grid--spaced" !default;           // Increase gutter size
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

Here's a list of the modifier's are their default class names. You can see examples of all these by going to the [examples](https://github.com/lukewhitehouse/groot#examples) section of the README.

##### `.grid--spaced`
Add this to the containing grid and the gutters width will be doubled.

##### `.grid--compact`
Add this to the containing gird and the gutters will be removed.

##### `.grid--reversed`
Add this to the container grid to reverse direction of it.

##### `.grid--centered`
Add this to the containing grid centers it and anything within (through CSS inheritance).

##### `.grid__item--centered`
Adding this to a grid item centers only it, rather than all items.


## Examples

An [accompanying website](http://github.com/lukewhitehouse/groot-website) has been created to demonstrate Groot's capabilities and how to correctly use it.

- [Basic Usage](): How to create a basic grid without any modifications of any kind and using the system defaults.
- [Altered Defaults](): Same as the basic usage, but with changes to the default variables.
- [Nesting](): Gridception yo. Example grid with other grid's inside of it.
- [Modifiers](): An example of each of the default modifiers, as [described above](https://github.com/lukewhitehouse/groot#modifiers).

## Compatability
Groot has been tried and tested within the latest browsers, but also works great for those older versions of IE that you may still need to support (I feel your struggle). Here's a full list of the browser/device combinations that Groot has been verified in. If you feel theres a problem with any of these, please [open an issue](https://github.com/lukewhitehouse/groot/issues) and we'll try to resolve it together. (Any + icon refers to latest version of that browser)

Mac/Windows:
- Chrome
- Firefox
- Safari
- Opera
- Edge
- IE8+ *

Mobile:
- iOS7+
- Android 4.3+
- Windows Phone

> * Whilst Groot does support IE8, there are caveats. IE8 doesn't support media queries and therefore you'll need to make sure you use something like [respond.js](https://github.com/scottjehl/Respond#respondjs). However, I'd recommend if you need IE8 support that you give [Jake Archibold's Media Query Mixin](http://jakearchibald.github.io/sass-ie/) a read. Its great! Here's an example of [Groot working in IE8](http://github.com/lukewhitehouse/groot-website/examples/ie8.html) without any media queries.

## Credits

Groot has been produced primarily by Luke Whitehouse, however, special thanks have to be given to the following:
- [Griddle](https://github.com/necolas/griddle): The inspriation for Groot.
- [Mixd](http://mixd.co.uk): Who introduced me to Griddle in the first place. If – like us – you work with WordPress then you may be interested in our Open Source project called [wp-deploy](https://github.com/Mixd/wp-deploy); a capistrano-powered deployment tool for WordPress.

## License

MIT License (MIT)

Copyright (c) 2015 Luke Whitehouse, https://github.com/lukewhitehouse/groot

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
