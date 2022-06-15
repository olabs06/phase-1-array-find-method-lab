// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

function checkWin(win) {
    return win.result ==="W"
 
  }
function superbowlWin(record) {
    
    const result = record.find(checkWin);
    if (!result){
        return undefined
    } else {
        return result.year
        
    }
    
}




//   The function should receive 1 argument, anfirst Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined