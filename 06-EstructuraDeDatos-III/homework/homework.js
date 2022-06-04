"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
  
}



BinarySearchTree.prototype.size = function(){
  let contuer = 1
  if(this.left){
    contuer++
    this.left.size()
  }
  if(this.right){
    contuer++
    this.right.size()
  }
 return contuer
}

 
BinarySearchTree.prototype.insert = function(value){
  const newNodo = new BinarySearchTree(value) 
  
    if(value < this.value){
      if(!this.left){
        this.left = newNodo
      }else{
        this.left.insert(value)
      }
    }
    else{
      if(!this.right){
        this.right = newNodo 
      }else{
        this.right.insert(value)
      }
    }
  
}


BinarySearchTree.prototype.contains = function(value) {
  let currentNode = this
  while(currentNode && currentNode.value !== value){
    if(value < currentNode.value){
      currentNode = currentNode.left
    }else if(value > currentNode.value){
      currentNode = currentNode.right
    }
  }if(!currentNode){
    return false
  }return true
}
// pre-order = root-letf-right
// in-order = left-root-right
// post-order = left-right-root
BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
  switch(order){
  case 'pre-order':
    cb(this.value)
    if(this.left !== null){
      this.left.depthFirstForEach(cb,order)
    }
    if(this.right !== null){
      this.right.depthFirstForEach(cb,order)
    }
    break

  case 'post-order':
    if(this.left !== null){
      this.left.depthFirstForEach(cb, order)
    }
    if(this.right){
      this.right.depthFirstForEach(cb,order)
    }
    cb(this.value)
      break

  default:
    if(this.left !== null){
      this.left.depthFirstForEach(cb,order)
    }
    cb(this.value)
    if(this.right){
      this.right.depthFirstForEach(cb,order)
    }
      break

  }
  
  }


BinarySearchTree.prototype.breadthFirstForEach = function(){

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
