"use strict"
let btn = document.getElementById('loginbtn');
let alert1 = document.getElementById('alert1');
let alert2 = document.getElementById('alert2');

function forName(value){
    if((value.length < 6) || (value.length>10)){
        alert1.innerHTML = "Name should be min 6 & max 10 character.";
        btn.classList.add('forInvalid');
        btn.classList.remove('forValid');
        alert1.style.color='red';
   
    }else{
        alert1.innerHTML = "Your name is valid!"
        btn.classList.remove('forInvalid');
        btn.classList.add('forValid');
        alert1.style.color='green';
    }
}

function forPass(value){
    let uppercase = new RegExp(/([A-Z])/g);
    let lowercase = new RegExp(/([a-z])/g);
    let number = new RegExp(/([0-9])/g);
    let special = new RegExp(/([!@#$%^&*()_+`;:'"\|,<.>/?])/g);


    if(value.match(uppercase) && value.match(lowercase) && value.match(number) && value.match(special)){
        alert2.innerHTML = "Valid password!";
        alert2.style.color = 'green';
        btn.classList.add('forValid');
        alert1.style.color='green';
       
    }else{
        alert2.innerHTML = "Password must be mixed with uppercase,lowercase,number and a special character!";
        alert2.style.color = 'red';
        btn.classList.add('forInvalid');
        btn.classList.remove('forValid');
    }
}





function forInput2(input2){
    if(input2 == ''){
        alert2.innerHTML = "This field is required!";
        return true;
    }
    return false;
}
btn.onclick = ()=>{
    let input = document.getElementById('email').value;
    let input2 = document.getElementById('password').value;

    let check= forInput2(input2);

    if(input == ''){
        alert1.innerHTML = "This field is required!";
    }
    if(!input == '' && check != true){
        btn.innerHTML = 'Success!';
    }

}

