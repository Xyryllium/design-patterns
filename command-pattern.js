//without command pattern
// class Calculator {
//     constructor() {
//         this.value = 0
//     }

//     add(valueToAdd) {
//         this.value = this.value + valueToAdd
//     }

//     subtract(valueToSubtract) {
//         this.value = this.value - valueToSubtract
//     }

//     multiply(valueToMultiply) {
//         this.value = this.value * valueToMultiply
//     }

//     divide(valueToDivide) {
//         this.value = this.value / valueToDivide
//     }
// }

//with command pattern
class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract
    }

    execute(currentValue) {
        return currentValue - this.valueToSubtract
    }

    undo(currentValue) {
        return currentValue + this.valueToSubtract
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}

class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide
    }
}

const addCommand = new AddCommand(10)
const newValue = addCommand.execute(20)

console.log(newValue)
console.log(addCommand.undo(newValue))