console.log("Javascript Calculator By Durgesh Rajput");

document.getElementById('answer').readOnly = true; // you cant write anythinng in input directly

let screen  = document.getElementById('answer');
button = document.querySelectorAll('button');
let screenValue = '';

for(item of button) {
    item.addEventListener('click', (e) => { // click on button 
     txt = e.target.innerText; // variable of the text inside the button
     if(txt == 'X'){ // if the inner text in button is X 
        txt = '*'; // then declare variable value as *
        screenValue += txt; 
        screen.value = screenValue; // add this text into input 
     }
     else if(txt == 'C'){
        screenValue = '';
        screen.value = screenValue;
     }

     else if (txt == '='){
        screen.value = eval(screenValue); // eval() method  evaluates the string expression and returns its value
        // example of eval() is eval(1 + 1) = 2;
     }

     else {
     screenValue += txt;
     screen.value = screenValue;
     }
    })
}


document.addEventListener('keydown', function(event){
      if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')'){
        screenValue += event.key;
        screen.value = screenValue;
      }  
      if(event.keyCode == 13 || event.keyCode == 187){
        screen.value = eval(screenValue); // eval() method  evaluates the string expression and returns its value
      }

      else if(event.keyCode == 8 ){
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
      }

      else if(event.keyCode == 46) {
        screenValue = '';
        screen.value = screenValue;
      }
})