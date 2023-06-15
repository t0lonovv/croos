const btn = document.querySelector('button')
const text =document.querySelector('h1')
const hero  = document.querySelector(".hero")


text.style.color = '#06f1dd'
text.style.display = 'none'
btn.style.fontSize = '30px'
btn.style.color = '#070505'
hero.style.display = 'none'

btn.addEventListener('click', () => {
 text.style.display = 'block'
    btn.style.display = 'none'
hero.style.display = 'block'
})


btn.addEventListener("mouseover", () => {
    btn.style.fontSize = '80px'
    btn.style.color = '#f205b3'

})

btn.addEventListener('mouseleave', () => {
    btn.style.fontSize = '30px'
    btn.style.color = '#070505'

})


hero.addEventListener("mouseover", () => {
    hero.style.fontSize = '50px'
    hero.style.color = '#04ebf7'
})


hero.addEventListener('mouseleave', () => {
    hero.style.fontSize = '30px'
    hero.style.color = '#000'
})



btn.addEventListener('click', () => {
    hero.style.display = 'block'
    hero.style.fontSize = '30px'
    btn.style.display = 'none'
})


hero.addEventListener('click', () => {
    hero.style.display = 'none'
    btn.style.display = 'block'
    text.style.display = 'none'
})



btn.style.position = 'relative'
btn.style.left = '500px'
btn.style.top = '500px'
text.style.position = "relative"
text.style.top = "500px"
text.style.left = "500px"
hero.style.position = 'relative'
hero.style.top = '500px'
hero.style.left = '500px'


