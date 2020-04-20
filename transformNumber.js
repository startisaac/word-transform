
function game ( input ){
    outcome = [ ]
    for ( let i = 1; i <= input; i++) {
        if (i % 2 ==0 && i % 3 == 0 && i % 5 == 0){
            outcome.push("yu-gi-oh")
        }else if (i % 2 ==0 && i % 3 == 0){
                outcome.push("yu-gi")
        }else if (i % 3 ==0 && i % 5 == 0){
            outcome.push("gi-oh")
        }else if (i % 2 ==0 && i % 5 == 0){
            outcome.push("yu-oh")
        }else if(i % 2 == 0){
            outcome.push("Yu")
        }else if (i % 3 == 0){
            outcome.push("gi")
        }else if (i % 5 == 0){
            outcome.push("oh")
        }else {
            outcome.push(i)
        }
        
    }
    console.log(outcome)
    return outcome

   
}

