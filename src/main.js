import './scss/main.scss';

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const starsContainers = document.querySelectorAll('.stars');

  starsContainers.forEach(container => {
    const rating = parseInt(container.dataset.rating, 10);
    const stars = container.querySelectorAll('.stars__star');

    stars.forEach((star, index) => {
      if(index < rating) star.classList.add('stars--active');
    });
  });
});
