// explanation of this code line by line 
/* 
    select the button using  its id(btn)
then attach the event to it.
    when the button is clicked the text content change the text content of the element with the id text

*/


// addEventListener means listen to click events
document.getElementById("btn").addEventListener("click",
    // this is the call back function 
    () => {
        //updates the text inside the another element
        document.getElementById("text").innerHTML = "<b>chinmay wadhwa </b>"
    })
// innerText means is a property that gets or sets the visible text inside an element


document.getElementById("toggle").addEventListener
    //  "CLICK"  means this attaches as event listener,it means when this element clicked run this functiion automatically
    ("click", () => {
        // "document.body" refers to the entire <body> of your page

        document.body.classList.toggle("dark")
        /* 
            this is the most important part it checks if the class "dark" exists on the <body>;
            if not present it adds the "dark"
            if already present it removes the "dark"
        
        */
    })


