var buttonNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonNumber; i++ ){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ 
        
     
var buttonInnerHtml = this.innerHTML;    


    switch (buttonInnerHtml) {

        case "w":
            var tom1 = new Audio('./sounds/right-foot-creep.mp3') 
            tom1.play()
        break;
     
        case "a":
             var tom2 = new Audio('./sounds/aminake.mp3') 
             tom2.play()
        break;

        case "s":
             var tom3 = new Audio('./sounds/huh.mp3') 
             tom3.play()
        break;

        case "d":
            var tom4 = new Audio('./sounds/toilet-ananas-nasdas.mp3') 
            tom4.play()
        break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3') 
            snare.play()
        break;

        case "k":
            var kickbass = new Audio('./sounds/kick-bass.mp3') 
            kickbass.play()
        break;
        
        case "l": 
             var crash = new Audio('./sounds/wake-up-to-reality.mp3') 
             crash.play()
        break;
        
        
        
        
        default: console.log(buttonInnerHtml)
    }

    
    })}




