function PriorityQueue() {
    var items = [];
    function QueueElement (element, priority){ // {1}
        this.element = element;
        this.priority = priority;
}
this.isEmpty = function(){
    return items.length == 0;
};
    this.enqueue = function(element, priority){
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()){
            items.push(queueElement); 
        } else {
            var added = false;
            for (var i=0; i<items.length; i++){
                 if (queueElement.priority <
                 items[i].priority){
                    items.splice(i,0,queueElement); 
                    added = true;
                    break; 
                } }
                if (!added){ 
                    items.push(queueElement);
    } }
    };
    this.print = function(){
    console.log(items);
};
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();