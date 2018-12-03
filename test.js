const express = require('express');
const app = express()

app.get('/',(req, res)=>{
  res.send('this is the Home Page')
})


app.get('/:url',(req, res)=>{
  function rps(){}
  //display user value
  let ending = req.params.url;

  //display ai value
  let ai = Math.floor(Math.random()*3)
  console.log(ai)

  if (ai == 0){
    ai = 'rock'
  }else if(ai == 1){
    ai = 'paper'
  }else{
    ai = 'scissors'
  }

  //display result
  let results
  if(ending == ai){
    results = "tie"
  }else if (ending == "rock" && ai =="scissors" ||
            ending == "scissors" && ai == "paper"||
            ending == "paper" && ai =="rock"){results ="win"}
            else{results = "loss"}

  const rockResult = [
    {"user":ending,"ai":ai,"result":results},
  ]

  res.send(rockResult)

})





app.listen(8000,()=>{
  console.log("it's working")
})
