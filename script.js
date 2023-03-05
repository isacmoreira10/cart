let display = document.querySelector('#display')
let results = document.querySelector('#results')
let name = document.querySelector('#name')
let amount = document.querySelector('#amount')
let value = document.querySelector('#price')
let cartItems = []


function add() {
    let item = {
        name: name.value,
        amount: Number(amount.value),
        value: Number(value.value)
    }
    cartItems.push(item)

    output()
    total()
}

function output() {
    let stringCart = ''
    for (let index = 0; index < cartItems.length; index++) {
        const htmlElement = `<div class="itens-p">
        <img src="Vector.png" class="image">
        <p class="name">${cartItems[index].name}</p>
        <p class="amount">${cartItems[index].amount + 'x'}</p>
        <p class="value">${' R$' + cartItems[index].value + ' ,00 '}</p>
        </div>`
        stringCart += htmlElement
    }
    display.innerHTML = stringCart
}

function total() {
    let count = 0
    for (let i = 0; i < cartItems.length; i++) {
        count = count + (cartItems[i].value * cartItems[i].amount)
    }

    const total = `<div class="total">
    <p class="count">${'R$' + [count] + ',00'}</p>
    </div>`
    results.innerHTML = total

}