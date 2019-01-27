//Calculating a Sum
sumArray = (arrayN) => {
    let sum=0
    arrayN.map((number)=>{
      sum+=number
    })
    console.log(sum)
  }
  let numbers = [6, 12, 1, 2, 11, 16, 12, 2, 8, 30]
  
  sumArray(numbers)