    function animal(name){
        // this means refers to create new object being created
        this.name = name // creates a property inside object  
    }

    // every function has a prototype object used to share methods 
    animal.prototype.sound = function(){
        return "some sounds!!" // then we will create for sound
        // means all oject created from animal can use sound

    }
    // this is know as child constructor
    function dog(name,breed){
        //animal parent functtion
        animal.call(this,name) // used a borrow function 
        // this is the  current dog constructor
        this.breed=breed // adds new property only for dog
        // whole meaning run animal function inside dog and attach name to this oject
    }



// this is where inheritance method works 
    //object.create()creates new object 
    //animal.prototype parent method will store here
    dog.prototype=Object.create(animal.prototype) 
    dog.prototype.bark = function (){
        return "woofs!!!!"
    }
// means dog will now inherits all the method of animal

    // what does new keyword does here

    /* create an empty objects{}
    this points to that object 
    calls dog()function 
    return object
    */
    let d2 = new dog("blacky","indie") // then it will create the new varible with the use of new keyword

    // console.log(d2.name);
    // console.log(d2.sound());
    // console.log(d2.bark());


    function animal(name){
        this.name=name;
    }
    animal.prototype.sound = function(){
        return "some sounds"
    }
    function dog(name,breed){
        animal.call(this,name)
        this.breed=breed
    }

    dog.prototype=Object.create(animal.prototype)
    dog.prototype.bark = function(){
        return "woofss!!"
    }

    let b2 = new dog("whity","indie")
    console.log(b2.name);
    console.log(b2.sound());
    console.log(b2.bark());
    
    