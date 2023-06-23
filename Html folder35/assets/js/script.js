// 1) 
// выведите в консоли каждый элемент из строки ниже с помощью for
let str = 'My name is Samuil';

for(let i = 0; i < str.length; i++){
    console.log(str[i])
}
// 2)
//выведите в консоли каждый элемент из массива ниже с помощью for
let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length ; i++){
    console.log(arr[i])
}

// 3)
// создайте набор с помощью new Set()
const letters = new Set(["a","b","c"]);

// 4)
// добавьте в созданный ранее набор, элементы 'a', 'b', 'c' с помощью add()
let letters = new Set(["d","e","f"]);

letters.add('a');
letters.add('b');
letters.add('c');

console.log(letters);

// 5)
// выведите в консоли слово 'Element' для каждого элемента из массива с помощью forEach()
let arr = [1, 2, 3, 4, 5];

arr.forEach(function(value, index, array) {
  array[index] = 'Element';
});

console.log(arr);

// 6)
//выведите все значения из набора
let fruits = new Set(['apple', 'banana', 'mango']);

console.log(fruits)
// 7)
//выведите все ключи из набора
let fruits = new Set(['apple', 'banana', 'mango']);

for(let fruit of fruits){
    console.log(fruit)
}

// 8)
//выведите все ключи из набора
let fruits = new Set(['apple', 'banana', 'mango']);

for(let fruit of fruits){
    console.log(fruit)
}

// 9)
//создайте обьект с помощью new Map()
let inf = new Map([
    ["Alex", 30],
    ["John", 67],
    ["Jackson", 12],
    ["Mathew", 25]
])

console.log(inf)
// 10)
// добавьте в созданный ранее объект, с помощью set()
let inf = new Map([
    ["Alex", 30],
    ["John", 67],
    ["Jackson", 12],
    ["Mathew", 25]
  ]);
  
  let apple = "apple";
  let banana = "banana";
  let orange = "orange";
  
  inf.set(apple, 500);
  inf.set(banana, 300);
  inf.set(orange, 100);
  
  console.log(inf);

// 11)
//выведите в консоли значение apple с помощью get() из обьекта ниже
let fruits = new Map([
    ['apple', 5],
    ['banana', 10],
    ['mango', 30]
]);

console.log(fruits.get('apple'));

// 12)
//выведите в консоли количество элементов в мапе ниже
let fruits = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(fruits.size)

// 13)
//удалите элемент 'apple' из мапа ниже
let fruits = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits.delete('apple')
console.log(fruits)
// 14)
//очистите мап ниже
let fruits = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits.clear();
console.log(fruits);
// 15)
//проверьте находится ли 'apple' в мапе ниже
let fruits = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(fruits.has('apple'));
// 16)
// выведите все значения из объекта ниже
let fruits = new Set(['apple', 'banana', 'mango']);

for (let fruit of fruits) {
  console.log(fruit);
}

// 17)
// выведите все ключи из объекта ниже
let fruits = new Set(['apple', 'banana', 'mango']);

console.log(fruits);

// 18)
// выведите все ключи/значения из объекта ниже
let fruits = new Set(['apple', 'banana', 'mango']);

for (let fruit of fruits) {
  console.log(fruit);
}
