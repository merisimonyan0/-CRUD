let usname = document.getElementById('usName')
// console.log(text.innerHTML)
let usAge = document.getElementById('usAge')
// console.log(text1.value)
// let bla= document.querySelector('p')
function getVal() {

    fetch("http://localhost:3000/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: usname.value, age: usAge.value })
    })
    // console.log(text1.value)
}