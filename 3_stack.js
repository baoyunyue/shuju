function Stack(){
    var items=[];
    //添加新元素,添加元素到栈顶
this.push = function(element){
    items.push(element);
};
//移除栈里的元素,移 出的是最后添加进去的元素
this.pop = function(){
    return items.pop();
};
//返回栈顶的元素
this.peek = function(){
    return items[items.length-1];
};
//栈为空的话将返回true
this.isEmpty = function(){
    return items.length == 0;
};
//获取栈长度
this.size = function(){
    return items.length;
}
//把栈清空
this.clear = function(){
    items = [];
};
//把栈里的元素都输出到控制台
this.print = function(){
    console.log(items.toString());
};
}

var stack = new Stack();
console.log(stack.isEmpty()); //输出为true
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
stack.print(); //输出[5, 8]
function divideBy2(decNumber){
    var remStack = new Stack(),
    rem,
    binaryString='';

    while(decNumber>0){
        rem = Math.floor(decNumber%2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/2);
    }
    while(!remStack.isEmpty()){
        binaryString+=remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));
