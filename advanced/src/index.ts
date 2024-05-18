// type Draggable = {
//     drag: (inch: number) => void
// }
// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag(inch: number) {
//         console.log(inch);
//     },
//     resize() {

//     }
// }

// textBox.drag(10);

// Exact values
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;

// type Metric = 'cm' | 'inch'
// let metric: Metric = 'cm';

// handle null values
// function greet(name: string | null) {
//     if (name)
//         console.log('Hello', name);
//     else
//         console.log('Holaa');
// }

// greet(null);

// Optional Chaining
// type Customer = {
//     birthday: Date,
// }

// function getCustomer(id: number): Customer | null | undefined {
//     if (id === 0)
//         return null;
//     else
//         return { birthday: new Date() }
// }

// let customer = getCustomer(1);
// // if (customer)
// //     console.log(customer.birthday);
// console.log(customer?.birthday?.getFullYear());

// Optional Call
let log: any = null;
log?.();
log = () => {
    console.log('Hello');
}
log?.();