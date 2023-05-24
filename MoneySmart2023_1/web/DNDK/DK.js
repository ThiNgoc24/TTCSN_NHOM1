function myFunction1(){
    let a = document.getElementById("inputPW");
    let b = document.getElementById("lock");
    let c = document.getElementById("unlock");
    if(a.type === "password"){
        a.type = "text";
        b.style.display = "none";
        c.style.display = "block";
        c.style.color = "#3D70FF"
    }
    else{
        a.type = "password";
        b.style.display = "block";
        c.style.display = "none";
    }
}
var form = document.querySelector('form');
var pw = document.getElementById('inputPW');
var cfpw = document.getElementById('input-acpPW');
var username = document.getElementById('inputUsername');

function getClassNameError(input){
    return document.querySelector(`#${input.id} + .alert`);
}

function checkLengthInput(input, min, max){
    input.value = input.value.trim();
    if(input.value.length < min){
        getClassNameError(input).innerHTML = `Phải có ít nhất ${min} kí tự`;
        return false;
    }

    if(input.value.length > max){
        getClassNameError(input).innerHTML = `Không được vượt quá ${max} kí tự`;
        return false;
    }

    else{
        getClassNameError(input).innerHTML = "";
        return true;
    }
}

function checkCfPw(pw, cfpw){
    if(pw.value !== cfpw.value){
        getClassNameError(cfpw).innerHTML = "Mật khẩu không trùng khớp";
        return false;
    }else{
        getClassNameError(cfpw).innerHTML = "";
        return true;
    }
}
    
form.addEventListener('submit', function(e){
    e.preventDefault();
    let isCheckLengthUsername = checkLengthInput(username, 6, 26);
    let isCheckLengthPassword = checkLengthInput(pw, 6, 26);
    let checkAcp = checkCfPw(pw, cfpw);
})
