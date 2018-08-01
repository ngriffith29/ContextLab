$(document).ready(function () {
//Variables 
var count = 0
//Function Declarations\
//Function below creates 100 h3s
    function create100(num) {       
        for(var i = 0; i<num; i++){
           createH3([i])
           
        }        
    }   
    //function below creates 100 h3s and counts them up by 1
    function createH3 (){
        var h3 = $('<h3></h3>').text(`Accusation ${count += 1}`)
            $("body").append(h3)
    }
//Below are all my function calls
create100(100)  



})


