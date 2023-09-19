const MLs = document.querySelectorAll(".ML");
// const btn = document.querySelectorAll(".click")

console.log(MLs)

MLs.forEach(ML => {
  ML.addEventListener('click', () => {
    console.log('cliked')
    document.querySelector('.hide').classList.remove('hide');
    ML.classList.add('hide');
  })
})