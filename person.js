let person = {
    names: 'Chikeziem Mba',
    phone: '08067543234',
    Address: '25 ukwa street emene'
};

class morning {
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.fullname} and I am ${this.age} years old in Nigeria`);
    }
}

module.exports = morning, person;