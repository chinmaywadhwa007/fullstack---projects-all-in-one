let computer = { cpu: 35 } // this is an base object  which has one property cpu:25 
let lenovo = {
    screen: "HD",
    __proto__: computer
} // linkinng objects (prototype chain ) if lenovo doesn't have something go and check computer if they have the value 
let tomHardwere = {};
// console.log(`lenovo`,lenovo.__proto__);


let genaricCar = { tyres: 4 }

let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genaricCar)

console.log(`tesla`, Object.getPrototypeOf(tesla));
