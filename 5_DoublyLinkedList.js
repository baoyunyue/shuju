function DoublyLinkedList(){
   var Node = function(element){
   this.element = element;
   this.next =null;
   this.prev = null;  //在 Node类里有prev属性(一个新指针)   
    };
   var length = 0;
   var head = null;
   var tail =null;//保存对列表最后一 项的引用的tail属性。


   this.insert = function(position,element){
       //检查越界
       if (position >=0 && position<=length){
           var node = new Node(element),
           current = head,
           previous,
           index = 0;

           if(position === 0){
               if(!head){
                   head = node;
                   tail = node;
               }else{
                   node.next = current;
                   current.prev = node;//新增的
                   head = node;
               }
           }else if(position===length){//新增的
               current = tail;
               current.next = node;
               node.prev = current;
               tail =node;
           }else{
               while(index++<position){
                   previous = current;
                   current =current.next;
               }
               node.next = current;
               previous.next = node;
               current.prev =node;//新增的
               node.prev = previous;//新增的
           }
           length++;//更新列表的长度
           return true;
       }else{
           returnfalse;
       }
   };


   this.removeAt = function(position){
       if(position > -1 && position < length){
           var current =head,
           previous,
           index = 0;
           
           if(position === 0){
               head = current.next;
               if(length === 1){
                   tail = null;
               }else{
                   head.prev = null;
               }
           }else if(position === length-1){
               current =tail;
               tail =current.prev;
               tail.next =null;
           }else{
               while(index++ < position){
                   previous = current;
                   current = current.next;
                }
                   previous.next = current.next; 
                   current.next.prev = previous;
               }
               length--;
               return current.element;
           } else{
               return null;
           }
};
   }



let list = new DoublyLinkedList()
console.log(list.insert(0, 1))
console.log(list.insert(1, 2))
console.log(list.insert(2, 3))
console.log(list.removeAt(1))