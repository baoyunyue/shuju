function Queue() {
    var items = [];
    this.enqueue = function(element){
        items.push(element);
};
    this.dequeue = function(){
        return items.shift();
};
    this.front = function(){
        return items[0];
};
    this.isEmpty = function(){
        return items.length == 0;
};
    this.clear = function(){
        items = [];
};
    this.size = function(){
        return items.length;
};
    this.print = function(){
    console.log(items.toString());
}; }



var queue = new Queue(); 
console.log(queue.isEmpty()); //输出true
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print(); console.log(queue.size()); //输出3 
console.log(queue.isEmpty()); //输出false 
queue.dequeue();
queue.dequeue();
queue.print();



