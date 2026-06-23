// so this is  the file module wher we can perform todo task by using the files 
//This  is a simple file-based Todo wor flow. It stores tasks inside node.txt as JSON.
const fs = require('fs')


const filePath = ('./node.txt')


//<---load task--->//
const loadTask = (load) => {
    try {

        const databuffer = fs.readFileSync(filePath)
        const dataJson = databuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return [];
    }
}
//<---save task--->//
const saveTask = (tasks) => {
    const dataJson = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJson)
}
//<--- add task--->//
const addTask = (task) => {
    const tasks = loadTask()
    tasks.push({ task })
    saveTask(tasks)
    console.log('task added ✅', task);

}
//...>list task...>//
const listTask = () => {
    const tasks = loadTask()
    console.log("\nTodo List");
    console.log("---------");
    if (tasks.length === 0) {
        console.log("no data found...!");
        return;
    }
    tasks.forEach((tasks, index) => {
        const status = tasks.completed ? "✅" : "❌"
        console.log(`${index + 1} - ${tasks.task}`);

    });
}
//<...remove task...>//
const removeTask = (index) => {
    const tasks = loadTask()
    if (index < 1 || index > tasks.length) {
        console.log("invalid task number ");
        return;


    }
    const removeTask = tasks.splice(index - 1, 1);
    saveTask(tasks);
    console.log("removed task:", removeTask[0].task);

}
//...<update task>...//
const updateTask = (index, newTask) => {
    const tasks = loadTask();
    tasks[index - 1].task = newTask
    saveTask(tasks)
    console.log("task updated");

}

// 1st we have to build commond for commanding those backend stuff 
const commond = process.argv[2]

const arguments = process.argv[3]
if (commond === 'add') {
    addTask(arguments)
}

else if (commond === 'list') {
    listTask()
}

else if (commond === 'remove') {
    removeTask(parseInt(arguments))
}

else if (commond === 'update') {
    const index = parseInt(process.argv[3]);
    const newTask = process.argv.slice(4).join(" ");

    updateTask(index, newTask);
}

else {
    console.log('commond not found');

}

