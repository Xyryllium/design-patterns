//without using builder pattern
// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, age, phone, address) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }

// const user = new User('Bob', undefined, undefined, new Address('12345', 'Main St.'))

//using builder pattern
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, {age, phone, address} = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

const user = new User('Bob', {age: 10, address: new Address('1', 'street')})

console.log(user);
