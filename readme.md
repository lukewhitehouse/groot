# Groot
The root of all projects, from the team at [Mixd](http://www.mixd.co.uk).

Groot is a class-based CSS Grid system derived from the amazing work Nicolas Gallagher produced with [Griddle](https://github.com/necolas/griddle). As a company, Mixd used Griddle for many years and whilst we love it, it needed fixing. We aim Groot to be that fix.

Groot prides itself on the following:

- Flexibility: Complete control to fit it into your own workflow or framework.
- Modular: Defaults to a BEM structured Grid System
- Configurable: Ability to change any class names, gutter sizes or alignment declarations to your hearts desire.
- Lightweight: With its opt-in columns, you're looking at around 5kb minified and gzipped.

## Installation

Groot is available through a number of package managers, including:

```sh
npm install --save-dev groot
bower install --save groot
gem install --save groot
```

Alternatively, you could always download/clone this repo and use it in your own way.

## Usage

If you've used [Griddle](https://github.com/necolas/griddle) before, you'll see that the syntax is very similar. If you've not used it before, don't fear. Groot is pretty easy to get to grips with.

Once you've imported to the Groot system, use the `groot` mixin provided to build out the grids you need.

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
// Alter Config here
@import "groot";
// Include mixin here
```

**Available options and defaults:**

```scss
// Namespace Options
$gr-grid: "grid";             // The Grid's class namespace.
$gr-item: "grid__item";       // Grid Item's class namespace.
$gr-unit: "grid__item";       // Grid Unit's class namespace.

// Sizing
$gr-gutter: 1em;              // The space between each Grid Item.

// Grid alignment
$gr-grid-direction: inherit;  // Controls the *direction* CSS property for the Grid.
$gr-grid-align-x: inherit;    // Controls the *text-align* property for the Grid.

// Item alignment
$gr-item-direction: inherit;  // Controls the *direction* CSS property for the Grid Item.
$gr-item-align-x: inherit;    // Controls the *text-align* property for the Grid Item.
$gr-item-align-y: top;        // Controls the *vertical-align* property for the Grid Item.
```

## Modifiers


## Examples


## Credits

This framework is under constant development by the [Mixd](http://mixd.co.uk) team. Like it? Hate it? Let us know on [Twitter](http://twitter.com/mixd).

If – like us – you work with WordPress then you may be interested in our other Open Source project called [wp-deploy](https://github.com/Mixd/wp-deploy) a capistrano-powered deployment tool for WordPress.
