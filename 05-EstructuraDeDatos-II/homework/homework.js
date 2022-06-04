"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  }

function Node(value) {
  
    this.value = value,
    this.next = null;
 }

LinkedList.prototype.add = function(value) {
      const nodo = new Node(value);
      let currentValue = this.head;
      if (!currentValue) {
        this.head = nodo
        
      }
      
      else{

      
      while (currentValue.next) {
        currentValue = currentValue.next;
      }
      currentValue.next = nodo;
      return nodo
    }
    }

LinkedList.prototype.remove = function(){
      
  if(!this.head){
    return null
  }

  if(this.head.next === null){
    let valuedeUnicoNodo = this.head.value
    this.head =null
    return valuedeUnicoNodo
  }

  let current = this.head
  while(current.next.next){
    current = current.next
    }
    let ultimoValor = current.next.value
    current.next  = null
    return ultimoValor

    }

LinkedList.prototype.search = function (valorOcb){
      if(!this.head) return null
      if(typeof valorOcb === 'function'){
        if(valorOcb(this.head.value)){

          return this.head.value
        } 
      }
      else{
        if(valorOcb === this.head.value){
          return this.head.value
        }
      }
      
      let currentValue = this.head
      while(currentValue.next){
        currentValue = currentValue.next

        if(typeof valorOcb === 'function'){
         if(valorOcb(currentValue.value )){

           return currentValue.value
         }
  
        }else{
          if(valorOcb === currentValue.value){
            return currentValue.value
          }
        }

      }
      return null
      
    }

    
  





/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable () {
  this.numBuckets = 35;
  this.data = []
  }

  HashTable.prototype.hash = function(key){
  let hashed = 0
  for (let index = 0; index < key.length; index++) {
      hashed = (hashed + key.charCodeAt(index) * index) % this.numBuckets
  }
  return hashed
  }

 HashTable.prototype.set = function (key ,value){
      const adress = this.hash(key)
      if(!this.data[adress]){
          this.data[adress] = []
      }
      this.data[adress].push([key,value])
      return this.data
  }

  HashTable.prototype.get = function(key){
      const adress = this.hash(key)
      const currentBucket = this.data[adress]
      if(currentBucket){
          for (let index = 0; index < currentBucket.length; index++) {
              if(currentBucket[index][0] === key){
                  return currentBucket[index][1]
              } 
          }
      }
      return undefined
  }
  HashTable.prototype.hasKey = function (key){
    let position = this.hash(key)
    if(this.data[position][key] === undefined){
      return false
    }else{
      return true
    }
  }



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
