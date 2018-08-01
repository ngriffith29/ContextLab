$(document).ready(function () {
//Variables 
var num2 = 0
var count = 0
var friendName = ["Jenna", "Clay", "Morgan", "Rachel", "Paul"]
var locations = ["The backyard", "Pantry", "Basement", "Living Room", "Kitchen", "Master Bathroom", "Pool", "Front Porch", "Back Porch", "Driveway"]
var weapons = ["Ar-15", "Russian Hackers", "Garrote Wire", "Pen Dagger", "Lapel Spike", "Concealment Key",
"Shotgun", "Suicide Glasses", "Bulgarian Umbrella", "Pistol", "Machine Gun", "Bowling Ball", "Butcher Knife", 
"Chain", "Brass Knuckles","Mowing Blades", "Hatchet","Baseball Bat", "caddle proder", "weed wacker", "Chain saw"]

//Function Declarations\


//Function below creates 100 h3s
    function create100(num) {       
        for(var i = 0; i<num; i++){
           createH3([i])
           
        }        
    }   

    //function below creates 100 h3s and counts them up by ++
    function createH3 (){
        var h3 = $('<h3></h3>').text(`Accusation ${count += 1}`)
            $("body").append(h3)
    }
    //Function Creates the indexes for the 3 arrays
   function indexes (){ for(let i = 0; i<num2; i++){



    }
   }
//Below are all my function calls
create100(100)

//Event listner

$('h3').on("click", function (){
   
   alert(`I accuse ${friendName[Math.floor(Math.random() * 5)]} with the
   ${weapons[Math.floor(Math.random() * 20)]} in the ${locations[Math.floor(Math.random() * 10)]}!`)


})


})


