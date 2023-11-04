# Timeline
this timeline is created with basic HTML, CSS and JS, with no external libraries at all.
If you haven't seen, this is the file structure:

```go
- index.html
- style.css
- script.js
- README.md // this file
```

## Creating your own
Assuming you want this kind of timeline in your project, it's pretty simple and your custom theme can be integrated easily into the timeline.

Firstly, copy the styles into your project css file. Then, organize the styles according to you and put the css variables at the top.

```css
:root {
  --background: rgb(43, 50, 65);
  --overlay: rgba(255, 255, 255, .05);
  --links: rgba(55, 193, 255, 1);
  --gray: rgb(220, 244, 255);
  --muted: rgba(221, 221, 221, 0.263);
  --color: white;
  --outline: white;
  --font: Inter, sans-serif;
}
```
the above styles are the basic theme, and you can use your own colors.

There are a few things you might not want, like the imported font and body styles, so you can just go ahead and remove those.

> `NOTE: if you are removing the body styles, the timeline will not be centered and stuff, so just make sure you have a way to position the timeline container.`

after the body styles, there are also a few default stylings for the whole page, so you can also remove those styles.

---

This was just the CSS part, for the HTML, you will want this structure for your timeline:

```html
<!-- can be horizontal also instead of vertical -->
<div class="container vertical">

  <span class="line"></span>
  <div class="card">
    <span class="signal"></span>
    <h2 class="card-title">Your Card Title</h2>
    <!-- your card content -->
  </div>

</div>
```
the `.line` and `.signal` elements are necessary for the timeline and the circles on the timeline. If you do not want those, remove their respective styles from the CSS and the elements from the HTML.

---
finally, the javascript part. The javascript is only necessary if you want the animations when the card is on the visible viewport. The only thing the `script.js` file does is add a class from the card which then makes it appear by the CSS styles.

> `NOTE: if you are not taking the javascript file, you need to remember to remove the CSS style from the card which makes it visibility hidden`

```css
.card {
  ....;
  opacity: 0;
  pointer-events: none;
}
```
remove the above styles and you're set to go.<br>
If you do want the animations, just take the script, styles, and HTML structure as it is.