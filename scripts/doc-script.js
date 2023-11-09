const timelineFormatPre = document.querySelector('code.timeline-format-pre');
timelineFormatPre.textContent = `<div class="container vertical">

  <span class="line"></span>

  <div class="card">
    <span class="signal"></span>

    <h2 class="card-title">title for your card</h2>
    <!-- card content, can be anything, you can style it on your own -->
  </div>

  <!-- more cards with the same format -->

</div>
`

const defaultCSSVariablesPre = document.querySelector('code.default-css-variables-pre');
defaultCSSVariablesPre.textContent = `:root {
  --overlay: #363c4b;
  --gray: #dcf4ff;
  --muted: #dddddd43;
  --gap-from-line: 4rem;
  --line-dimension: 1px;
  --signal-dimension: 1rem;
  --box-padding: var(--gap-from-line);
}`

const menuButton = document.querySelector(".menu-button");
const menuContainer = document.querySelector(".menu-container");

menuButton.addEventListener("click", function () {
  menuContainer.classList.toggle('shown');
});

addEventListener("click", (e) => {
  if(menuContainer.classList.contains('shown') && e.target !== menuButton && e.target !== menuButton.querySelector('*')) menuContainer.classList.remove('shown');
});
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') menuContainer.classList.remove('shown');
});

const sections = document.querySelectorAll('.docs section');

sections.forEach((section) => {

  const className = section.classList;
  const sectionEl = document.createElement('div');
  sectionEl.classList.add('section-map');
  sectionEl.innerHTML =
    `<div class="section-map-info">
    <span class="badge">S</span>
    <span class="section-map-name">${className}</span>
  </div>`

  const headers = section.querySelectorAll('h1, h2, h3, h4');
  headers.forEach((header) => {

    const headerEl = document.createElement('div');
    headerEl.classList.add('section-map-header');
    headerEl.setAttribute('data-header', header.tagName.replace('H', ''));

    headerEl.innerHTML =
      `<span class="badge">${header.tagName.replace('H', '')}</span>
    <span class="section-map-name">${header.textContent}</span>`;

    sectionEl.appendChild(headerEl);
    headerEl.addEventListener('click', () => {
      const offsetTop = header.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });

  });

  sectionEl.addEventListener('click', () => {
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });

  menuContainer.appendChild(sectionEl);

});