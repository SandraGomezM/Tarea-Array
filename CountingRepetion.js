//Counting Repetion
howManyTimes = (array,find) => {
    let cont=0
    array.map((word)=>{
      find===word? cont++:null
    })
    console.log("la palabra se repite -> " +cont+ " veces")
  }
  
  let words = ['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter']
  
  howManyTimes(words,"matter")