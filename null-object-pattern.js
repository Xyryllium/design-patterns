//without null object design pattern
class User {
    constructor(id, name, role) {
      this.id = id
      this.name = name
      this.role = role
    }
  
    isAdmin() {
      return this.role === 'Admin'
    }
  }
  
  const users = [
    new User(1, 'John', 'Admin'),
    new User(2, 'Doe', 'Editor'),
    new User(3, 'Mary', 'Subscriber')
  ]
  
  function getUser(id) {
    return users.find(user => user.id === id)
  }
  
  function printUser(id) {
    const user = getUser(id)
  
    let name = 'Guest'
    if (user != null && user.name != null) name = user.name
    console.log('Hello ' + name)
  
    if (user != null && user.isAdmin != null && user.isAdmin()) {
      console.log('You have Admin access')
    } else {
      console.log('You are not allowed here')
    }
  }

//using null object pattern

class User {
    constructor(id, name, role) {
        this.id = id
        this.name = name
        this.role = role
      }
    
      isAdmin() {
        return this.role === 'Admin'
      }
  }
  
  class NullUser {
    constructor() {
      this.id = -1
      this.name = 'Guest'
    }
  
    isAdmin() {
      return false
    }
  }
  
  const users = [
    new User(1, 'John', 'Admin'),
    new User(2, 'Doe', 'Editor'),
    new User(3, 'Mary', 'Subscriber')
  ]
  
  function getUser(id) {
    const user = users.find(user => user.id === id)
    
    /* Checking if user is null before returning and returning NullUser object if user is null */
    if (user == null) {
      return new NullUser()
    } else {
      return user
    }
  }
  
  function printUser(id) {
    const user = getUser(id)
    console.log('Hello ' + user.name)
  
    if (user.isAdmin()) {
      console.log('You have Admin access')
    } else {
      console.log('You are not allowed here')
    }
  }
