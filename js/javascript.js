




let img = document.querySelector('.col-8')

//let SpiderMan = img.innerHTML += '<img class=""  src="img/01.webp" alt="">';
//let Gatti = img.innerHTML += '<img class="d-none" src="img/02.webp" alt="">';
//let stawars = img.innerHTML += '<img class="d-none" src="img/03.webp" alt="">';
//let stivali = img.innerHTML += '<img class="d-none" src="img/04.webp" alt="">';
//let avengers = img.innerHTML += '<img class="d-none" src="img/05.webp" alt="">';
//const SpiderMan = ['img/01webp']

const myButton = document.getElementById('special-button');

let counter = 0;

myButton.addEventListener('click', function() {

    counter += 1;


    let img = document.querySelector('.col-8')
    
    if (counter == 1) {
        img.innerHTML += '<img id="Gatti" src="img/02.webp" alt="">';
        SpiderMan.style.display="none" 

        
    }
    else if (counter == 2){
        img.innerHTML += '<img id="StarWars" src="img/03.webp" alt="">';
        Gatti.style.display="none" 

    }
    else if (counter == 3){
        img.innerHTML += '<img id="Stivali" src="img/04.webp" alt="">';
        StarWars.style.display="none" 

    }
    else if (counter == 4){
        img.innerHTML += '<img id="Avengers" src="img/05.webp" alt="">';
        Stivali.style.display="none" 

    }
    
    
});




