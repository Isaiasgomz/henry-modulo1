/*Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    hashMethod(key){
    let hash = 0
    for (let index = 0; index < key.length; index++) {
        hash = (hash + key.charCodeAt(index) * index) % this.data.length
    }
    return hash
    }

    set(key ,value){
        const adress = this.hashMethod(key)
        if(!this.data[adress]){
            this.data[adress] = []
        }
        this.data[adress].push([key,value])
        return this.data
    }

    get(key){
        const adress = this.hashMethod(key)
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
}

const myHashTable = new HashTable(50)