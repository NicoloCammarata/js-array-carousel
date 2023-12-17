




const carosello = [
    Gatti = '<img id="Gatti"  src="./img/02.webp" alt="">',
    StarWars = '<img id="StarWars" class="d-none" src="img/03.webp" alt="">',
    Stivali = '<img id="Stivali" class="d-none" src="img/04.webp" alt="">',
    Avengers = '<img id="Avengers" class="d-none" src="img/05.webp" alt="">',
    SpiderMan = '<img id="SpiderMan" class="d-none" src="./img/01.webp" alt="">'
]

let newImg = document.getElementById('foto')




for (let i = 0; i < carosello.length; i++){

        

    
    if (i == 0) {
        newImg.innerHTML += carosello[i];
        console.log(newImg) 

        
    }
    else if (i == 1){
        newImg.innerHTML += carosello[i];
 

    }
    else if (i == 2){
        newImg.innerHTML += carosello[i];
 

    }
    else if (i == 3){
        newImg.innerHTML += carosello[i] ;


    }
    else if (i == 4){
        newImg.innerHTML += carosello[i];


    }
     
    console.log(i)
}

let myButton = document.getElementById('special-button');
allimg = document.querySelectorAll("img")
console.log(allimg)



function win (){
    
    allimg[counter].classList.add("d-none");
        
    counter ++;
        
    allimg[counter].classList.remove("d-none");

    console.log(win)

    

    

     
}



setTimeout (win, 3000);
setTimeout (win, 6000);
setTimeout (win, 9000);
setTimeout (win, 12000);











    




let counter = 0;

myButton.addEventListener('click', function() {


    

    if (counter < (allimg.length - 1)) {
        allimg[counter].classList.add("d-none");

        counter ++;

        allimg[counter].classList.remove("d-none");
    
        
        
    }
    
    

    
    
    
    
    
});
    


let leftButton = document.getElementById('button-left');

console.log(leftButton)


leftButton.addEventListener('click', function() {

    if (counter > 0) {
        allimg[counter].classList.add("d-none");

        counter --;

        allimg[counter].classList.remove("d-none");
    
        
        
    }

    
    
    
    
    
});



