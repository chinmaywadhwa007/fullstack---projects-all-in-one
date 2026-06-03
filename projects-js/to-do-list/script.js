// this means wait until the page loads and then runs the js

document.addEventListener('DOMContentLoaded', () => {

    // grabbing elements from HTML
    const todo = document.getElementById('todo-input')
    const add_task_btn = document.getElementById('addbtn')
    const itemList = document.querySelector('.list')

    // get tasks to localStorage (means it store to the broeser internally )
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    // const tasks = JSON.parse(localStorage.getItem('tasks')) || [] this means u can't assign task again again if u are using the const 

    // render old saved tasks
    tasks.forEach(task => rendertask(task))

    // add task button
    add_task_btn.addEventListener('click', () => {

        const taskText = todo.value.trim() // it will  trim the extra task 

        // prevent empty task
        if (taskText === "") return
// from here the crud operation start create update delete render this are the crud operator
        // create new task object
        // we make crete operator  using object where all the enteris will goes down 
        const newTask = {
            id: Date.now(),
            Text: taskText,
            completed: false
        }

        // add into array this will push into new array 
        tasks.push(newTask)

        // render on screen immediately
        rendertask(newTask)

        // save into localStorage
        saveToLocal()

        // clear input after the input it will empty the task bar after every click
        todo.value = ""

        console.log(tasks)
    })

    // this is by entering method  here we can use the enter key to work
    todo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            add_task_btn.click()
        }
    })



    // render function
    function rendertask(task) {

        const li = document.createElement('li')

        li.setAttribute('data-id', task.id)

        // if already completed
        if (task.completed) {
            li.classList.add('completed')
        }

        li.innerHTML = `
            <span>${task.Text}</span>
            <button>Delete</button>
        `

        // toggle completed
        li.addEventListener('click', (e) => {

            // if button clicked don't toggle
            if (e.target.tagName === 'BUTTON') return

            task.completed = !task.completed

            li.classList.toggle('completed')

            saveToLocal()
        })


        // delete task
        li.querySelector('button').addEventListener('click', (e) => {

            e.stopPropagation()

            // find task index
            const index = tasks.findIndex(t => t.id === task.id) //but with that u are sigining the task again and again thats why we can't use the const there due to strictness of the variable 




            // remove from array
            // logic or note will come here filter(). creates new array so variable must allow the reassignment--->let that's why we use that 
            tasks = tasks.filter(t => t.id !== task.id)

            // remove from UI
            li.remove()

            // save updated array
            saveToLocal()
        })

        // add li into ul
        itemList.appendChild(li)
    }



    // save to localStorage
    function saveToLocal() {

        localStorage.setItem('tasks', JSON.stringify(tasks))

        console.log("saving....")
    }

})