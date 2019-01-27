//Calculate the Average
averageNumbers = (arrayN,text) => {
    let sum=0
    arrayN.map((number)=>{
      sum+=number
    })
    sum/=arrayN.length
    console.log(text+sum)
  }
  averageWordLength = (arrayW) => {
    let lengths = []
    arrayW.map((word)=>{
      lengths.push(word.length)
    })
    averageNumbers(lengths,"Promedio de longitudes de palabras\t")
  }
  
  
  let numbers = [2, 6, 9, 10, 7, 4, 1, 9]
  averageNumbers(numbers, "Promedio de numeros\t")
  
  let words = ['seat','correspond','linen','motif','hole','smell','smart','chaos','fuel','palace']
  averageWordLength(words)