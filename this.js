//1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 3,
    height: 2,
    getSquare: function() {
        return (this.width * this.height);
    }
};
console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 10,
    discount: '15%',
    getPrice: function() {
        return this.price;
    },
    getPriceWithDiscount: function() {
        return (this.price - (this.price / 100 * parseFloat(this.discount)));
    }
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const inc = {
    height: 10,
    increasing: function() {
        return ++this.height;
    }
};
console.log(inc.increasing());



// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    value: 2,
    double: function() {
        return (this.value * this.value);
    },
    plusOne: function() {
        return ++this.value;
    },
    minusOne: function() {
        return --this.value;
    },
    showRes: function() {
        this.value;
    }
};

//console.log(numerator.double().plusOne().minusOne().showRes());
console.log(numerator.value);



// 5. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const obj = {
    price: 2,
    quantity: 3,
    getPrice: function() {
        return this.price * this.quantity
    }
};
console.log(obj.getPrice());


// 6. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const obj2 = {
    price: 2,
    quantity: 3,
    getPrice: function() {
        return this.price * this.quantity
    }
};

let obj3 = obj2;
obj3.price = 5;
obj3.quantity = 5;
console.log(obj3.getPrice());


// 7. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = {
    width: 5,
    height: 10
};
getSquare = function() { return this.width * this.height };


console.log(getSquare(sizes));

// 8.  
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.//