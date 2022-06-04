function HashTable() {
    this.numBuckets = 35
    this.array = new Array(this.numBuckets);
   }
  
   HashTable.prototype.hash = function(input){
     let suma = 0
     for(let i = 0; i < input.length; i++){
       suma = suma + input[i].charCodeAt();
       //
     }
     return suma % 35;
   }
  
   HashTable.prototype.set = function(key, value){
     let ubicacion = this.hash(key); // 4
     if(typeof key === 'string'){
       if(this.array[ubicacion] === undefined){
         this.array[ubicacion] = {};
         this.array[ubicacion][key] = value;
       }else{
        this.array[ubicacion][key] = value;
       }   
     }else{
      throw new TypeError('Se ingreso un dato erroneo');
     }
   }
  
   HashTable.prototype.get = function(key){
     let ubicacion = this.hash(key);
     if(this.hasKey(key)){
        return this.array[ubicacion][key];
     }
   }
  
   HashTable.prototype.hasKey = function(key){
    let posicion = this.hash(key);
    if(this.array[posicion][key] === undefined){
        return false;
      }else{
        return true;
    }
   }