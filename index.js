console.log("Hello World!")

const list = document.getElementById("hobby-list")
const form = document.getElementById("hobby-form")
const input = document.getElementById("hobby-input")

const sleepBtn = document.getElementById("sleep")
const eatBtn = document.getElementById("eat")
const drinkBtn = document.getElementById("drink")

const eatNum = document.getElementById("eat-number")
const sleepNum = document.getElementById("sleep-number")
const drinkNum = document.getElementById("drink-number")

function addDrink() {
    let current = +drinkNum.textContent
    drinkNum.textContent = current + 8

}

function addFood() {
    let current = +eatNum.textContent
    eatNum.textContent = current + 500
}

function goToBed() {
    if(+drinkNum.textContent >= 64 ) {
        drinkNum.textContent = '0'
        eatNum.textContent = '0'
        let current = +sleepNum
        sleepNum.textContent = current + 1
    } else {
        alert("Can't go to bed, drink more water")
    }
    }
  

function handleSubmit(event){
    event.preventDefault()

    let newHobby = input.value 
    console.log(newHobby)
    let newItem = document.createElement('li')
    newItem.textContent = newHobby
    list.appendChild(newItem)

}

form.addEventListener('submit', handleSubmit )
drinkBtn.addEventListener('click', addDrink)
eatBtn.addEventListener('click', addFood)
sleepBtn.addEventListener('click', goToBed)