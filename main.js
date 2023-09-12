const covers = document.querySelectorAll(".cov");

covers.forEach(cover => {
  cover.addEventListener('click', () => {
    document.querySelector('.hide').classList.remove('hide');
    cover.classList.add('hide');
  })
})