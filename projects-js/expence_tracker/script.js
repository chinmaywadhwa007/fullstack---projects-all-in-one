

document.addEventListener('DOMContentLoaded', () => {

    //container
    const expense_c = document.getElementById('expense_container')
    //name placeholder
    const expense_name = document.getElementById('expance-name')
    //amount placeholder
    const amount_Id = document.getElementById('amount_holder')
    // form
    const formInput = document.getElementById('form_input')

    // actual form
    const inputData = document.getElementById('form_data')

    // button
    const submitBtn = document.querySelector('.submit')

    // expense list
    const expenseList = document.getElementById('expense-list')

    // total amount span
    const fullAmount = document.getElementById('total-amount')


    // for the empty array we want to store the amounts or expenses

    let expences = JSON.parse(localStorage.getItem('expences')) || []
    let TotalAmount = calciTotal()
    renderExpense()
    updateTotal()


    inputData.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = expense_name.value.trim()
        const amounts = parseFloat(amount_Id.value.trim())
        if (name !== "" && !isNaN(amounts) && amounts > 0) {
            // created object for storing data into array
            const newExpense = {
                id: Date.now(),
                name: name,
                amounts: amounts,

                date: new Date().toLocaleString() 
                 
                }
            expences.push(newExpense)
            // this is for to save it in the localstorage 
            SaveExpensesToLocal()
            renderExpense()
            updateTotal()

            // clearing input...
            expense_name.value = ""
            amount_Id.value = ""
        }
        // for the smaller value then the 0 
        if (amounts <= 0) {
            console.log("enter the bigger value to run the code");

        }

    })
    // this is just for entering enter button
    document.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            console.log("enter key pressed");

        }
    })
    // where we add the logic for the addition 
    function calciTotal() {

        return expences.reduce((sum, expences) => sum + expences.amounts, 0)

    }



    // save expenses to localstorage()

    function SaveExpensesToLocal() {
        localStorage.setItem('expences', JSON.stringify(expences))
    }

    // this function will update your expense to 0 
    function updateTotal() {
        TotalAmount = calciTotal()
        fullAmount.textContent = Math.floor(TotalAmount)
    }

    function renderExpense() {
        expenseList.innerHTML = ""
        expences.forEach(expense => {
            const li = document.createElement('li')
            li.innerHTML = `${expense.name} - ₹${expense.amounts} <br> <small>${expense.date}</small>
            <button class="delete-btn" data-id="${expense.id}">Delete</button>
            `;
            expenseList.appendChild(li)


        })
    }

    expenseList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {

            const expense_Id = parseInt(e.target.getAttribute('data-id'))
            console.log(expense_Id);

            expences = expences.filter(expense => expense.id !== expense_Id)
            SaveExpensesToLocal()
            renderExpense()
            updateTotal()

        }
    })

})