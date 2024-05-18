// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1, name: "Pratham", retire: (date: Date) => {
//         console.log(date);
//     }
// };

// console.log(employee);

// employee.name = "Pratham Patel";

// console.log(employee);

// Using Types
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: "Pratham Patel",
    retire(date: Date) {
        console.log(date);
    },
}