const MLscomp = document.querySelector(".cov-comp");
const MLcomp = MLscomp.querySelectorAll(".ML");

console.log(MLcomp)

MLcomp.forEach(ML => {
  ML.addEventListener('click', () => {
    console.log('clicked-comp')
    MLscomp.querySelector(".hide").classList.remove('hide');
    ML.classList.add('hide');
  })
})

const MLsmobile = document.querySelector(".cov-mobile");
const MLmobile = MLsmobile.querySelectorAll(".ML")

MLmobile.forEach(ML => {
  ML.addEventListener('click', () => {
    console.log('clicked-mobile')
    MLsmobile.querySelector(".hide").classList.remove('hide');
    ML.classList.add('hide');
  })
})