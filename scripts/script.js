const container = document.querySelector('.container');

const selectModes = document.querySelectorAll('.select-mode');
selectModes.forEach((selectMode) => {
  selectMode.addEventListener('click', () => {
    selectModes.forEach((selectMode) => {
      selectMode.classList.remove('selected');
    });
    if (selectMode.classList.contains("select-v")) {
      container.classList.remove('horizontal');
      container.classList.add('vertical');
    } else {
      container.classList.remove('vertical');
      container.classList.add('horizontal');
    }
    selectMode.classList.add("selected");
  });
});

const endButton = document.querySelector('.end-button');
endButton.addEventListener('click', () => {
  window.location.href = 'https://github.com/chill31/timeline';
});

const hideAfterScroll = false; // change this to true if you want the cards to hide after they are scrolled away. Basically, the card will be hidden again when you scroll away from it even after one time the animation has been played. 

const allCards = document.querySelectorAll('.container .card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      if (hideAfterScroll) {
        entry.target.classList.remove('active');
      }
    }
  });
}, {
  threshold: .7 // change this according to how much the card should be visible for the animation to start
});

allCards.forEach((card) => {
  cardObserver.observe(card);
});

const showHideStylesButton = document.querySelector('.show-hide-button');
const hideStylesButton = document.querySelector('.hide-styles-button');
const stylesWrapper = document.querySelector('.styles-wrapper');
const stylesWrapperInputs = document.querySelectorAll('.styles-wrapper input');

hideStylesButton.addEventListener('click', () => {
  stylesWrapperInputs.forEach((input) => input.setAttribute('tabindex', '-1'));
  stylesWrapper.classList.remove('active');
});

stylesWrapperInputs.forEach((input) => {
  input.value = input.getAttribute('value');
  input.betterInputOptions = {
    allowNegative: false,
    allowDecimal: true,
    allowScientificNotation: false,
    valueAsNumber: 0, // refrain from changing this
    resetValues: false
  };
});

let shown = false;
showHideStylesButton.addEventListener("click", () => {
  stylesWrapper.classList.toggle('active');
  if (shown) {
    showHideStylesButton.textContent = 'Show Styles';
    stylesWrapperInputs.forEach((input) => input.setAttribute('tabindex', '-1'));
  }
  if (!shown) {
    showHideStylesButton.textContent = 'Hide Styles';
    stylesWrapperInputs.forEach((input) => input.removeAttribute('tabindex'));
  }

  return shown = !shown;
});

const saveButton = document.querySelector('.save-styles-button');
saveButton.addEventListener('click', () => {
  stylesWrapperInputs.forEach((input) => {

    const unit = input.getAttribute('data-unit');

    if(input.getAttribute('data-variable') === '--muted') {

      const alphaInput = document.querySelector('.muted-alpha-input');
      const alpha = alphaInput.value;

      const mutedInput = document.querySelector(':not(.muted-alpha-input)[data-variable="--muted"]');
      const hex = mutedInput.value;

      const converted = convertHexToRGBA(hex, alpha);

      container.style.setProperty(input.getAttribute('data-variable'), `rgba(${converted.r}, ${converted.g}, ${converted.b}, ${converted.a})`)

    } else {

      container.style.setProperty(input.getAttribute('data-variable'), `${input.value}${unit ?? ''}`);

    }

  })
});

function convertHexToRGBA(hex, alpha) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: parseFloat(alpha)
  } : null;
}