var sales = 123456789;
// let course = "Typescript"
// let isPublished = true
// let level: any;
// console.log({ sales, course, isPublished, level });
// function render(document: any) {
//     console.log(document);
// }
// function calculateTax(income: number, taxYear = 2022) {
//     if (taxYear <= 2022) {
//         return income * 1.2;
//     }
//     return (income * 1.3).toFixed(2);
// }
// console.log(calculateTax(50000, 2023));
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10Kg'));
