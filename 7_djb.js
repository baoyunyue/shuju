function HashTable(){
    var table = [];
    var djb2HashCode = function (key) {
        var hash = 5381; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash = hash * 33 + key.charCodeAt(i); //{3}
        }
        return hash % 1013; //{4}
    };

    var ValuePair = function(key,value){
        this.key =key;
        this,value = value;
        this.toString = function(){
            return'['+this.key+'-'+this.value+']'
        }
    };

    

    this.put = function(key,value){
        var position = djb2HashCode(key);
        console.log(position+'-'+key);
        table[position] = value;
    };
    

    
    this.get = function (key){
        return table[djb2HashCode(key)];
    };
    
   

    
    this.remove = function(key){
        table[djb2HashCode(key)]=undefined;
    };
    

   
    this.print = function() {
        for (var i = 0; i < table.length; ++i) { //{1}
            if (table[i] !== undefined) {        //{2}
                console.log(i + ": " + table[i]);//{3}
    } }
     };
     

}

/*
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
*/

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');
