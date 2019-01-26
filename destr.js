//1.  Используя rest оператор и деструктуризацию, создать функцию, которая 
// принимает любое количество аргументов и возвращает объект, содержащий 
// первый аргумент и массив из остатка: func(‘a’, ‘b’, ‘c’, ‘d’)→ 
// { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

let arr = ([a, ...other]) => {
    console.log(a);
    console.log(other);
};
arr(['a', 'b', 'c', 'd', 'e']);


//2. Организовать функцию getInfo, которая принимает объект вида{ name: ..., 
// info: { employees: [...], partners: [ … ]  } }и выводит в консоль имя
// (если имени нет, показывать ‘Unknown’) и первые две компании из массива 
//partners:
//const organisation = {    name: 'Google',   
// info: { employees: [‘Vlad’, ‘Olga’], 
//partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };getInfo(organisation); → Name: Google Partners: Microsoft Facebooka

let obj = {
    name: 'Google',
    info: {
        employees: ['vlad', 'Olga'],
        partners: ['Micrposoft', 'Facebook', 'Xing']
    }
};

function getInfo() {
    if (obj.name == '') console.log('Unknown');
    const [partner1, partner2] = obj.info.partners;
    console.log(obj.name);
    console.log(partner1, partner2);
};
getInfo();