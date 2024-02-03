let usname = document.getElementById('usName')
// console.log(text.innerHTML)
let password = document.getElementById('usPassword')
let email=document.getElementById('usEmail')
// console.log(text1.value)
// let bla= document.querySelector('p')
function getVal() {

    fetch("http://localhost:3000/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, price: price,image: image,description: des,uuid: uuid })
    })
    // console.log(text1.value)
}
