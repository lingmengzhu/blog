let add = (x) => x + 10;
let multiply = (y) => y * 10;
// let compose = function () {
//     let args = [].slice.call(arguments);
//     return function (x) {
//         return args.reduceRight((total, current) => {
//             return current(total);
//         }, x);
//     };
// };
const compose =
    (...args) =>
    (x) =>
        args.reduceRight((res, cb) => cb(res), x);
let calculate = compose(multiply, add);
console.log('calculate', calculate(4));
