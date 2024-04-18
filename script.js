const btn = document.querySelector('.btn')
const menuItems = document.querySelector('.menu-items')
const crossbtn = document.querySelector('.crossbtn')
const aquirebtn = document.querySelector('.acquire-btn')
const acquireItems = document.querySelector('.acquire-items')
const engagebtn = document.querySelector('.engage-btn')
const engageItems = document.querySelector('.engage-items')

btn.addEventListener('click', () => {
   menuItems.classList.toggle('show')
   btn.classList.toggle('hidebtn')
   crossbtn.classList.toggle('showbtn')
})

crossbtn.addEventListener('click',() => {
    console.log('clicked')
    menuItems.classList.toggle('show')
    crossbtn.classList.toggle('showbtn')
    btn.classList.toggle('hidebtn')
})

aquirebtn.addEventListener('click',() => {
  acquireItems.classList.toggle('showaquire')
  aquirebtn.classList.toggle('rotateacquirebtn')
})

engagebtn.addEventListener('click',() => {
  engageItems.classList.toggle('showengage')
  engagebtn.classList.toggle('rotateengagebtn')
//   console.log('clicked')
})