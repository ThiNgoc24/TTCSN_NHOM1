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