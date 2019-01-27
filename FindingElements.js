//Finding Elements
doesWordExist = (array,find) =>{
    let answer
    for(word of array){
      if(word===find ){
        answer=true
        break;
      }else{
         answer=false
      }
    }
    console.log(answer)
  }
  
  let words = ['machine','subset','trouble','starting','matter','eating','truth','disobedience']
  
  doesWordExist(words,"matter")