# CSS Cheat Sheet

## Structure

### Selectors

* Universal Selector `* {}`
* Type Selector `h1, h2 ,h3 {}`
* Child Selector `ul > li {}`
* Descendant Selector `p a {}`
* Class Selector `.class {}`
* ID Selector `#id {}`
* Adjacent Sibling Selector `h1 + p {}`
* General Sibling Selector `h1 ~ p {}`
* Attribute Selector `[attribute="SomeValue"] {}`

### Pseudo Selectors & Elements

* Mouse Over Selector `a:hover {}`
* Active Link Selector `a:active {}`
* Focus Selector `input:focus {}`
* Visited Links Selector `a:visited {}`
* Link Selector `.class:link {}`/
* First Line Selector `p::first-line {}`
* First Letter Selector `p::first-letter {}`
* First Child Selector `p:first-child {}`
* Last Child Selector `p:last-child {}`
* Only Child Selector `p:only-child {}`
* :nth-child Selector `p:nth-child() {}`
* First Element of its Parent Selector `p:first-of-type {}`
* Checked elements selector  `input:checked {}`
* Disabled elements selector `input:disabled {}`
* Enabled elements selector `input:enabled {}`
* Elements that have no Children Selector (including text nodes) `p:empty {}`
* Not a Specified Element Selector `:not(p) {}`
* Before Element `.class::before {}`
* After Element `.class::before {}`

### Media queries

* Media query: `@media screen |  print | (max-width: xx) | (min-width: xx){}`
* Hiding elements:
    
    ```
    @media only screen and (max-width: 600px) {
        div.example {
            display: none;
        }
    }
    ```

* Typical breakpoints:

    ```
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {...}

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {...}

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {...}

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {...}

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {...}
    ```

### Sizes

* Width `width: 500px | 50%`
* Height `height: 500px | 50%`

## Features

### Background

* Background Image `background-image: url()`
* Background Repeat `background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat`
* Background Color `background-color: #2AA9E0 | linear-gradient(to bottom right, red, yellow);`
* Background Position `background-position: top | right | bottom | left | center`
* Background Attachment `background-attachment: scroll | fixed | local | initial | inherit`

### Border

* Border Color `border-color: #2AA9E0`
* Border Radius `border-radius: 5px 10px 30px 20px; /* different corenrs */`
* Border Style `border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`
* Border Width `border-width: 10px`

### Box

* Box Sizing `box-sizing: border-box | content-box`
* Margin `margin: 2px 4px 6px 8px | 0 auto`
* Padding `padding: 2px 4px 6px 8px`
* Border Color `border-color: #2AA9E0`
* Border Radius `border-radius: 5px 10px 30px 20px; /* different corenrs */`
* Box Shadow `box-shadow: 0 0 10px #3d56b9`
* Border Style `border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`
* Border Width `border-width: 10px`

### Display 
* Display: sets whether an element is treated as a block or inline element `display: block | inline | inline-block | flex | inline-flex | grid | inline-grid | flow-root`

### Position

* Position `position: static | relative | absolute | fixed | sticky`
* Position Properties `top | right | bottom | left`
* Float Element `float: left | right | none`
* Clear Floating Elements `clear: none | left | right | both`
* Z Index `z-index: 3 | auto | inherit`

### Text Styling

* Font Family `font-family: 'Open Sans', sans-serif`
* Font Size `font-size: 12px | 0.8em | 80%`
* Font Style `font-style: normal | italic | oblique`
* Font Variant `font-variant: normal | small-caps`
* Font Weight `font-weight: normal | bold | bolder | lighter | 100 - 900`
* Horizontal Alignment `text-align: left | right | center | justify`
* Indent First Line `text-indent: 25px`
* Letter spacing `letter-spacing: 1px | 1em | 10%`
* Line Height `line-height: normal | 3em | 34%`
* Space Between Characters `letter-spacing: normal | 4px`
* Text Align Last `text-align-last: auto | left | right | center | justify | start | end | initial | inherit`
* Text Color `color: blue | #FEFEFE`
* Text Decoration `text-decoration: none | underline | overline | line-through`
* Text Justify `text-justify: auto | inter-word | inter-character | none | initial | inherit`
* Text Overflow `text-overflow: clip | ellipsis | string | initial | inherit`
* Text Shadow `text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit`
* Text Transform `text-transform: capitalise | lowercase | uppercase`
* Vertical Alignment `vertical-align: baseline | 10px | sub | super | top | text-top | middle | bottom | text-bottom | initial`
* Word Spacing `word-spacing: 1px | 1em | 10%`

### List

* List Type `list-style-type: disc | circle | square | none`
* List Position `list-style-position: inside | outside`
* List Image `list-style-image: url()`

