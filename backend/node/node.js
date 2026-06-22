// file module will intereact with the files and folder in your computer 
const { log } = require('console')
const fs = require('fs')
const filePath = ("../node.txt")

const command = process.argv[2]
const arguments = process.argv[3]
if (command === 'add') {
    AddTask(arguments)
} else if (command === 'list') {
    listTask()
} else if (command === 'remove') {
    removeTask(parseInt(arguments))
} else {
    console.log("command not found ");

}
