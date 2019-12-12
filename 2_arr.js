/*
var fibonacci=[];
fibonacci[1] = 1;
fibonacci[2] = 1;
for(var i=3;i<21;i++){
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
}
for(var i=1;i<fibonacci.length;i++){
    console.log(fibonacci[i]);
}
*/

//添加
/*
var num=[0,1,2,3,4,5,6,7,8,9];
num[num.length]=10;
num.push(11);
num.push(12,13);
for (var i=num.length;i<=0;i--){
    num[i]=num[i-1];
    num[0]=-1;
}
num.unshift(-2);
num.unshift(-4,-3);
console.log(num)
//删除
num.shift();
num.splice(5,3,2,3,4);
console.log(num)
*/
//多维数组
/*
var averageTemp = [];
    averageTemp[0] = [72,75,79,79,81,81];
    averageTemp[1] = [81,79,75,75,73,72];
function printMatrix(myMatrix){
    for(var i =0;i<myMatrix.length;i++){
        for(var j=0;j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j]);
        }
    }
}
printMatrix(averageTemp);
*/
//数组合并
/*
let zero = 0
let positiveNumbers = [1, 2, 3]
let negitiveNumber = [-3, -2, -1]
let number = negitiveNumber.concat(zero, positiveNumbers)
console.log(number)
*/
/*
var isEven = function(x){
    console.log(x);
    return(x%2 == 0)?true:false;
};
*/
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//every迭代数组每个元素，直到返回false
//numbers.every(isEven);
//some迭代数组每个元素，直到返回true
//numbers.some(isEven);
//迭代整个数组forEach
/*numbers.forEach(function(x){
 console.log((x % 2 === 0));
});*/
//遍历，保存传入map方法的isEven函数的运行结果
//var myMap = numbers.map(isEven);
//console.log(myMap);

//遍历，filter返回新数组由使函数返回true的元素组成
//var evenNumbers = numbers.filter(isEven);
//console.log(evenNumbers);
//reduce 四个参数分别为 上次迭代返回值、当前值、当前元素的索引、当前元素所属的数组对象。
/*numbers.reduce(function(previous,current,index,arry){
    return previous+current;
});*/


//反序
//console.log(numbers.reverse());
//sort方法在对数组做排序时，把元素默认成字符串进行相 互比较。
//console.log(numbers.sort());
//sort使用自定义函数
/*console.log(numbers.sort(function(a,b){
    return a-b;
}));
*/
//相当于如下
/*function compare(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    return 0;
}
console.log(numbers.sort(compare));
*/
//自定义排序
/*var friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
    ];
    function comparePerson(a, b){
        if (a.age < b.age){
         return -1 }
        if (a.age > b.age){
            return 1
         }
        return 0; }
console.log(friends.sort(comparePerson));
*/
//字符串排序按照ASSCII
//var names =['Ana', 'ana', 'john', 'John'];
//    console.log(names.sort());
//传入一个忽略大小写的比较函数
/*var n=names.sort(function(a,b){
    if(a.toLowerCase() <b.toLowerCase()){
        return -1
    }
    if(a.toLowerCase()>b.toLowerCase()){
        return 1
    }
    return 0;
})   
console.log(n) 
*/
//搜索
//indexOf方法返回与参数匹配的第一个元素的索引
//console.log(numbers.indexOf(10));
//console.log(numbers.indexOf(100));
//indexOf方法返回与参数匹配的第一个元素的索引
//numbers.push(10);
//console.log(numbers.lastIndexOf(10));
//console.log(numbers.lastIndexOf(100));
//输出数组为字符串
//把数组里所有元素输出为一个字符串，可以用toString方法
console.log(numbers.toString());
//用一个不同的分隔符(比如-)把元素隔开，可以用join方法
var numbersString=numbers.join('-');
console.log(numbersString);