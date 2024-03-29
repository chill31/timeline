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