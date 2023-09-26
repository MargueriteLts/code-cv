const portfolio = document.querySelector(".portfolio-container");
const mobile = document.querySelector(".cov-mobile")
const btnmobile = mobile.querySelector(".btn-portfolio")
const comp = document.querySelector(".cov-comp")
const btncomp = comp.querySelector(".btn-portfolio")


console.log(portfolio)
console.log(mobile)
console.log(comp)
console.log(btnmobile)
console.log(btncomp)

btnmobile.addEventListener('click', () => {
  console.log('clicked portfolio on mobile')
  portfolio.classList.remove('display-none');
})

btncomp.addEventListener('click', () => {
  console.log('clicked portfolio on mobile')
  portfolio.classList.remove('display-none');
})

portfolio.addEventListener('click', () => {
  portfolio.classList.add('display-none');
})