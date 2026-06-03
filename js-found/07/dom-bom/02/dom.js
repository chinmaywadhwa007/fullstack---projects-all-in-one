// this is an click event where we learn how click works 
let hold = document.getElementById('changeTextColor')
hold.addEventListener("click", function () {
    const para = document.getElementById("mypara")
    para.textContent = "let's starts javascript properly with fully focused ";
})



//example 2 transversing the dom

document.getElementById('citybtn').addEventListener('click', function () {
    let city = document.getElementById('cities')
    city.firstElementChild.classList.add("highlights")

})

// example 3 

document.getElementById('changeOrder').addEventListener('click', function () {
    document.getElementById('CoffeeType')
    CoffeeType.textContent = "expresso";
    CoffeeType.style.backgroundColor = "orange";
    CoffeeType.style.padding = "5px";
})

//example 4 


document.getElementById('addNewBtn').addEventListener('click', function () {
    const newItem = document.createElement("li")
    newItem.textContent = "eggs"

    // this is not use full until i created new element to use this id
    document.getElementById('shoopinglist').appendChild(newItem)
})

document.getElementById('removeTask').addEventListener('click', function () {
    document.getElementById('taskList')
    taskList.lastElementChild.remove()
})