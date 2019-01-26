// Переделать функцию с использованием функции - стрелки(в методе reduce
//      тоже использовать arrow
//         function):
//     function sum() {
//         const params = Array.prototype.slice.call(arguments);
//         if (!params.length) return 0;
//         return params.reduce(function(prev, next) { return prev + next; });
//     }

// sum(1, 2, 3, 4); // 10sum(); // 0

function sum() {
    const params = Array.prototype.slice.call(arguments);
    if (!params.length) return 0;
    return params.reduce(function(prev, next) {
        return prev + next;
    })
};

console.log(sum(1, 2, 3, 4));

const sum2 = (...props) => {
    const params2 = Array.prototype.slice.call(props);
    if (!params2.length) return 0;
    params2.reduce((prev2, next2) => {
        (prev2 + next2);
    });
};

console.log(sum2(1, 9, 5));