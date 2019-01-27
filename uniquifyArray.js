uniquifyArray = (array) =>{
    let aux
    for(let x=0;x<array.length;x++){
      for(let y=0;y<array.length;y++){
        aux=array[x]
        y!=x && aux===array[y] ? array.splice(y,1):null
      }
    }
    console.log(array)
  }
  
  
  let words = ['crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring']
  
  uniquifyArray(words)