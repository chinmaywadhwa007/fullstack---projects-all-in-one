const person = {
    name: "chinmay wadhwa",
    greet() {
        console.log(`hi my name is: ${this.name}`);

    }

}
person.greet()
const greetfunction = person.greet
greetfunction()
// what bind does --> create a new function where this is permanently fixed to  specific object 
// bind does not runn function immdetatly it only  return a new function
const bound = person.greet.bind({name:"cwadhwa009! "})
bound()