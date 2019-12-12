function LinkedList(){
    var Node = function(element){
        //Node类表示要加入列表的项。它 包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点 项的指针。
        this.element = element;
        this.next = null;
    };
    var length = 0;//LinkedList类也有存储列表项的数量的length属性
    var head = null;//存储第一个节点的引用。为此，可以把这个引用存储在一个 称为head的变量中

    this.append = function(element){
        //向列表尾部添加一个新的项
        var node = new Node(element),//把element作为值传入，创建Node项
            current;//我们需要一个指向列表中 current项的变量
        if(head ===null){
            head =node;//head元素为null(列表为空——行{3})，就意味着在向列表添加第一个元素。因此要 做的就是让head元素指向node
        }
        else{
            current=head;//我们只有第一个元素的引用，因此需要循环访问列表,直到找到最后一项
            while(current.next){
                current = current.next;
            }
            current.next = node;//然后要做的就是让当前(也就是最后一个)元素的next指针指向想要添 加到列表的节点
        }
        length++;// //更新列表的长度
    };
    

    this.insert = function(position,element){
        //向列表的特定位置插入一个新的项
        if (position>=0 && position <=length){
            var node = new Node(element),
            current = head,
            previous,
            index = 0;
            
            if(position === 0){//在第一个位置添加
                node.next = current;
                head = node;
            }
            else{
                //在列表中间或尾部添加一个元素。首先，我们需要循环访问列表， 找到目标位置
                while (index++<position){
                    previous = current;
                    current = current.next;
                }
                //先需要把新项(node)和当前项链接起来，然后需要改变previous和current之间的链接。我们还需要让previous.next 指向node.
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }else{
            return false;//如果越界了， 就返回false值，表示没有添加项到列表中
        }
    };
    this.removeAt = function(position){
        //从列表的特定位置移除一项。
        //检查越界值
        if(position >-1 && position<length){
            var current = head,
            previous,
            index=0;
            //移除第一项
            if(position ===0){
                //如果把head赋为 current.next，就会移除第一个元素。
                head = current.next;
            }else{
                //需要依靠一个细节来迭代列 表，直到到达目标位置(我们会使用一个用于内部控制和递增的index变量):current 变量总是为对所循环列表的当前元素的引用。我们还需要一个对当前元素的前一个元 素的引用;它被命名为previous。
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                //将previous与current的下一项连起来，跳过current，从而移除它
                previous.next = current.next;
            }
            length--;
            return current.element;

        }
        //如果不是有效位置就返回null
        else{
            return null;
        }
    };
    //我们已经有一个移除给定位置的一个元素的removeAt方法了。现在有了indexOf方法，如 果传入元素的值，就能找到它的位置，然后调用removeAt方法并传入找到的位置
    this.remove = function(element){
        //从列表中移除一项
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function(element){
        //返回元素在列表中的索引。如果列表中没有该元素则返回-1
        var current = head,
            index = -1;//index变量来计算位置数
        
        while(current){
            if(element === current.element){
                return index;//检查当前元素是否是我们要找的。如果是，就返回它的位置
            }
            index++;//如果不是，就继续计数
            current = current.next;//如果列表为空，或是到达列表的尾部(current = current.next将是null)，循环就不 会执行
        }    
        return -1;//如果没有找到值，就返回-1。
    };
    this.isEmpty = function(){
        //如果链表中不包含任何元素，返回true
        return length ===0;

    };
    this.size = function(){
        //返回链表包含的元素个数。
        return length;
    };
    this.toString = function(){
        //由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的
        //toString方法，让其只输出元素的值。
        var current = head,//把current 变量当作索引
        string='';//初始化用于拼接元素值的变量(
        while(current){
            string = current.element;//然后我们就得到了元素的内容，将其拼接到字符串中
            current = current.next;//继续迭代下一个元素
            
        }
        return string;
    };
    this.getHead = function(){
        return head;
    }
    this.print = function(){};
    
}

 let list = new LinkedList()
 list.append(12);
 list.append(13);
 list.append(14);
 console.log(list.removeAt(1));
 console.log(list.insert(2,333));
 console.log(list.remove(14));
 console.log(list.isEmpty());
 console.log(list.size());
 
