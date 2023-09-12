const covers = document.querySelectorAll(".cov");

console.log(covers)

covers.forEach(cover => {
  cover.addEventListener('click', () => {
    console.log('cliked')
    document.querySelector('.hide').classList.remove('hide');
    cover.classList.add('hide');
  })
})