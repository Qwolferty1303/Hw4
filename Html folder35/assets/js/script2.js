// 1)
// Добавление суффиксов:
// Напишите функцию, которая возвращает функцию, которая преобразует свой ввод, добавляя в конце определенный суффикс.
console.log('*'.repeat(20) + '1)' + '*'.repeat(20));
function addSuffix(suffix){
    return function(input) {
        return input+suffix
    }
}

const addExclamation = addSuffix('!')
console.log(addExclamation('Hi'))

const addQuestion = addSuffix('?')
console.log(addQuestion('How are you'))

const addTion = addSuffix('tion')
console.log(addTion('na'))

// 2)
// Массив кратных:
// Создайте функцию, которая принимает два числа в качестве аргументов (num, length) и возвращает массив, кратный num чисел, до тех пор пока длина массива не достигнет length.
console.log('*'.repeat(20) + '2)' + '*'.repeat(20));
function generateMultiples(num, length) {
    const result = [];
    let multiple = num;
  
    while (result.length < length) {
      result.push(multiple);
      multiple += num;
    }
  
    return result;
}

console.log(generateMultiples(2, 5));
console.log(generateMultiples(3, 4)); 

// 3)
// Вернуть ключи и значения объектов:
// Создайте функцию, которая принимает объект и возвращает ключи и значения в виде отдельных массивов. Возвращает ключи, отсортированные в алфавитном порядке, и их соответствующие значения в том же порядке.
console.log('*'.repeat(20) + '3)' + '*'.repeat(20));
function getKeysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
  }

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const [keys, values] = getKeysAndValues(person);
console.log(keys);
console.log(values);

// 4)
// Целое число в диапазоне:
// Создайте функцию, которая проверяет, находится ли число по середине в пределах левого и правого числа. Вернуть false, если n не целое число.
console.log('*'.repeat(20) + '4)' + '*'.repeat(20));
function isMiddleNumber(left, right, n) {
    if (!Number.isInteger(n)) {
      return false;
    }
  
    return n > left && n < right;
}

console.log(isMiddleNumber(5, 10, 7));
console.log(isMiddleNumber(1, 100, 50));
console.log(isMiddleNumber(0, 10, 10));
console.log(isMiddleNumber(0, 10, 5.5));

// 5)
// Счетчик целых цифр:
// Создайте функцию, которая считает количество цифр целого числа.
console.log('*'.repeat(20) + '5)' + '*'.repeat(20));
function countDigits(number) {
    if (!Number.isInteger(number)) {
      return 'PLease write an integer number';
    }
  
    const digits = Math.abs(number).toString();
    return digits.length;
}

console.log(countDigits(12345));
console.log(countDigits(-9876));
console.log(countDigits(0));
console.log(countDigits(3.14));
