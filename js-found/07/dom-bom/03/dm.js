// example 6  eventhandling in the dom 

document.getElementById('clickMe').addEventListener('mouseover', () => {
    alert("chaicode")
})


// example 7 dom delgation
document.getElementById('teaList').addEventListener('click', function (event) {
    if (event.target && event.target.matches("#Tea-item")) {
        alert(" you selected: " + event.target.textContext)
    }
})

// example 8 form handling 

document.getElementById('Feedback-Form').addEventListener('submit', (event) => {
    event.preventDefault();
    const Feedback = document.getElementById('Feedback-input')
    console.log(Feedback);
    document.getElementById('feedbackDisplay').textContent = `feedback is ${Feedback.value} `

})

// example 9

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('domStatus').textContent="domm fully loaded here..!"
})

//example 10 css manupilation 

document.getElementById('togglebtn').addEventListener('click',()=>{
   const change = document.getElementById('descriptation-text')
   change.classList.toggle("highlights")
})