// 1. დაწერეთ ფუნქცია რომელსაც გადაეცემა ტექსტის ტიპის ცვლადი და დააბრუნებს ობიექტის
//    სადაც უნიკალურ ასოებს თითოეული რა რაოდენობით გვხდება იქნება ასახული.

let checkLetterCount = (text) => {
    let txt = text.replace(/ /g, '');
    let countObj = {};
    for (let i = 0; i < txt.length; i++) {
        countObj[txt[i]] = ((countObj[txt[i]]) ? countObj[txt[i]] : 0) + 1;
    }
    return countObj
}

// console.log(checkLetterCount('material'))

// 2. შექმენით კლასი Employee რომელსაც აქვს ველები სახელი, გვარი, ხელფასი, პოზიცია.
//    ასევე ჰქონდეს მეთოდი toString რომელც დააბრუნებს ყველა მონაცმეს, getFullName
//    რომელიც სახელს და გავრს დააბრუნებს.
//    ასევე შექმენით კლასი Manager რომელიც იქნება Employee შვილობილი და დამაყებით ექნება ორი ველი
//    დეპარტამეტნი და ბონუსი. გადაუტვირთეთ Manager კლასს toString() მეთოდი, რომელსაც დაემატება სხვა ველები
//    და ასევე დამატებით getSalary მეთოდი რიმელიც ძირითად ხელფასს დაუმატებს ბონუსს და დააბრუნებს ამ მნიშვნელობას.


class Employee {
    name;
    surName;
    salary;
    position;

    constructor(name, surName, salary, position) {
        this.name = name;
        this.surName = surName;
        this.salary = salary;
        this.position = position;
    }

    toString() {
        return {
            name: this.name,
            surname: this.surName,
            salary: this.salary,
            position: this.position
        };

    }

    getFullName() {
        return {
            name: this.name,
            surname: this.surName
        };
    }
}

let newEmp = new Employee('sandro', 'bakhutashvili', 100000, 'developer')
// console.log(newEmp.toString());
// console.log(newEmp.getFullName());

class Manager extends Employee {
    department;
    bonus;

    constructor(department, bonus) {
        super('irakli', 'gogichaishvili', 1000000000, 'Manager')
        this.department = department;
        this.bonus = bonus;
    }

    toString() {
        return {
            name: this.name,
            surname: this.surName,
            salary: this.salary,
            position: this.position,
            department: this.department,
            bonus: this.bonus
        };
    }

    getSalary() {
       return 'Full Salary = ' + (this.salary + this.bonus);
    }
}

let manager = new Manager('Web', 1000);
// console.log(manager.toString());
// console.log(manager.getSalary());

// 3. დაწერეთ ფუნქცია რომელიც ერთი ობიექტის მნიშვნელობებს დააკოპირებს მეორე ობიექტში.
//    (არ გამოვიყენოთ უკვე ჩაშენებული Object.assign)


let car = {
    brand: 'mercedes',
    model: 'c-class',
    type: 'sedan',
    releaseDate: 2000,
}

let carDetails = {};

for (let obj in car) {
    carDetails[obj] = car[obj]
}

// console.log(car)
// console.log(carDetails)

