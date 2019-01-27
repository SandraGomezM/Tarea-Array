//Finding Longest Word
findLongestWord = (words) => {
    let longest=[]
    words.map((word)=>{
      longest.push(word.length)
    })
  
    let aux
    for(let i=1;i<longest.length;i++){
      for(let d=0;d<longest.length-1;d++){
        if(longest[d]>longest[i]){
          aux=longest[d]
          longest[d]=longest[i]
          longest[i]=aux
        }
      }
    }
    longest.reverse()
    console.log(longest[0])
  }
  
  let words = ['mystery','aviator','crocodile','pearl','orchard']
  
  findLongestWord(words)