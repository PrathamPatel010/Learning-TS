// const small = 1;
// const medium = 2;
// const large = 3;
// PascalCase
// enum Size {
//     Small = 1,
//     Medium = 2,
//     Large = 3,
// }
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
var MySize = Size.Large;
console.log(MySize);
