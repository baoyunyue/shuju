
function BinarySearchTree(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;

    var insertNode = function(node,newNode){
        if(newNode.key<node.key){
            if(node.left ===null){
                node.left = newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right ===null){
                node.right = newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    };

    var inOderTraverseNode = function(node,callback){
        if(node !== null){
            inOderTraverseNode(node.left,callback);
            callback(node.key);
            inOderTraverseNode(node.right,callback);
        }
    };

    var preOrderTraverseNode = function(node,callback){
        if(node !==null){
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    };

    var postOderTraverseNode = function (node,callback){
        if(node !== null){
            postOderTraverseNode(node.left,callback);
            postOderTraverseNode(node.right,callback);
            callback(node.key);
        }
    };

    var minNode = function (node){
        if(node){
            while (node && node.left !== null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    var maxNode = function (node){
        if(node){
            while (node && node.right !== null){
                node = node.right;
            }
            return node.key
        }
        return null;
    };

    var searchNode = function(node,key){
        if(node ===null){ // (2)
            return false;
        }
        if(key<node.key){ //(3)
            return searchNode(node.left,key); //(4)
        }else if(key > node.key){ //(5)
            return searchNode(node.right,key);//(6)
        }else{
            return true; //(7)
        }
    };

    var removeNode = function(node,key){
        if(node === null){//(2)
        return null;
    }
    if (key<node.key){//(3)
        node.left =removeNode(node.left,key);//(4)
        return node;//(5)
    }else if(key>node.key){//(6)
        node.right = removeNode(node.right,key);//(7)
        return node;//(8)
    }else{
        //第一种情况-一个叶节点
        if(node.left === null && node.right === null){//(9)
            node = null;//(10)
            return node;//(11)
        }
        //第二种情况-一个只有一个子节点的节点
        if(node.left === null){//(12)
            node = node.right;//(13)
            return node;//(14)
        } else if (node.right === null){//(15)
            node = node.left;//(16)
            return node;//(17)
        }

        //第三种情况-一个有两个子节点的节点
        findMinNode =function (node)  {
            while (node.left) {
              node = node.left
            }
            return node
          }
        var aux = findMinNode(node.right);//(18)
        node.key = aux.key;//(19)
        node.right = removeNode(node.right,aux.key);//(20)
        return node;//(21)
    }
};
    



    this.insert = function(key){
        var newNode = new Node(key);
        if(root === null){
            root =newNode;
        }
        else{
            insertNode(root,newNode);
        }
    };
    this.inOderTraverseNode = function(callback){
        inOderTraverseNode(root,callback);
    };
    this.preOrderTraverseNode = function(callback){
        preOrderTraverseNode(root,callback);
    };
    this.postOderTraverseNode = function(callback){
        postOderTraverseNode(root,callback);
    };
    this.min = function(){
        return minNode(root);
    };
    this.max = function(){
        return maxNode(root);
    };
    this.search = function(key){
        return searchNode(root,key);//(1)
    };
    this.remove = function(key){
        root = removeNode(root,key);//传入root和要移除的键作为参数,root被赋值为removeNode方法的返回值
    }
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
function printNode(value){
    console.log(value);
}
//tree.inOderTraverseNode(printNode);
//tree.preOrderTraverseNode(printNode);
//tree.postOderTraverseNode(printNode);
//console.log(tree.min());
//console.log(tree.max());
//console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
//console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
console.log(tree.search(3))
console.log(tree.remove(15))
console.log(tree.search(4))
console.log(tree.search(15) ? 'Key 15 found.' : 'Key 15 not found.');