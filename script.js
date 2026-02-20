const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const yearTarget = document.getElementById('year');

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selected === 'all' || category === selected;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});
