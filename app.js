"use strict";

let count = 0

let getNewCount = () => {
  let url = "https://xbhfm2l8qe.execute-api.us-east-1.amazonaws.com/Prod/counter"
  let dynamoData = null
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("data from DynamoDB: ", data)
    count = data["newCount"]
    // console.log("count after update: ", count)
    let countElem = document.getElementById("visit-count"); 
    countElem.innerHTML = count;
  })
  .catch((err) =>{
    return err
  })
    
}

getNewCount()

