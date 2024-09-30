console.log(" hello DOM")
console.log(document)
console.dir(document)

let heading = document.getElementsByTagName('h2')[0]

console.log(heading)

heading.innerText = 'Урок 9. Dom into '

let ul = document.getElementsByClassName('metod-list')[0]

// ul.style.listStyleType = 'none'

ul.className = 'metod-list'

console.log(ul[0])


let desc = document.getElementById('desc')

desc.className = 'desc'

console.log(desc)

let descInfo = document.querySelector('#desc-info')

descInfo.className = "desc-info"

console.log(descInfo)


let btn1 = document.querySelector('#btn-change-heading')

btn1.addEventListener('click',()=>{
    heading.style.color='red'
    heading.style.fontSize ='40px'
})

let btn2 = document.querySelector('#hide-list')

btn2.addEventListener('click',()=>{
ul.classList.toggle('hide')
})


let btn3 = document.querySelector('#btn-create-element')

btn3.addEventListener('click',()=>{
let newElement = document.createElement('p')
newElement.innerText ='Кажется я начинаю понимать что я делаю'
newElement.className = 'dom-eplaine'
document.body.append(newElement)
})