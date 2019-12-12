function Set(){
    //我们使用对象而不是数组来表示集合
    var items={}

    //如果值在集合中，返回true，否则返回false。
    //所有JavaScript对象都有hasOwnProperty方法。这个方法返回一个表明对象是否具有特定属性的布尔值。
    this.has = function(value){
        return items.hasOwnProperty(value);
    };
    //对于给定的value，可以检查它是否存在于集合中。如果不存在，就把value添加到集合中，返回true，表示添加了这个值。如果集合中已经有这个值，就返回false，表示没有添加它。
    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };

    this.remove = function(value){
        //在remove方法中，我们会验证给定的value是否存在于集合
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };
    
    //如果想移除集合中的所有值，可以用clear方法
    this.clear = function(){
        items = {};
    };
    //JavaScript的Object类有一个keys方法，它返回一个包含给定对象所有属性的数组。在这种情况下，可以使用这个数组的length属性来返回items对象的属性个数
    this.size = function(){
        return Object.keys(items).length;
    };
    //提取items对象的所有属性，以数组的形式返回
    this.values = function(){
        return Object.keys(items);
    };

    this.union = function(otherSet){
        var unionSet = new Set();

        var values = this.values();
        for(var i=0; i<values.length;i++){
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };

    this.intersection = function(otherSet){
        var intersectionSet = new Set();

        var values = this.values();
        for(var i=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };

    this.difference = function(otherSet){
        var differenceSet = new Set();

        var values = this.values();
        for(var i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };

    this.subset = function(otherSet){
        if(this.size()>otherSet.size()){
            return false;
        }else{
            var values = this.values();
            for(var i=0;i<values.length;i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    };

}

/*
var set = new Set();
set.add(1); 
console.log(set.values()); //输出["1"] 
console.log(set.has(1)); //输出true 
console.log(set.size()); //输出1
set.add(2);
console.log(set.values()); //输出["1", "2"]
 console.log(set.has(2)); //true 
 console.log(set.size()); //2
set.remove(1); 
console.log(set.values()); //输出["2"]
set.remove(2); 
console.log(set.values()); //输出[]

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
console.log(unionAB.values());

var intersectionAB = setA.intersection(setB);
    console.log(intersectionAB.values());

var differenceAB = setA.difference(setB);
    console.log(differenceAB.values());    

*/ 
var setA = new Set();
setA.add(1);
setA.add(2);
var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.subset(setB));
console.log(setA.subset(setC));