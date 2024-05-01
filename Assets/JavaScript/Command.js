function SingFunc(){
    let Email = document.getElementById("email");
    let Password = document.getElementById("Password");
    let SingMenu = document.getElementById("SingBlock");

    if (Email.value == null || Email.value == ""){
        Email.value = "";
        return alert("ERRO digite seu E-mail");
    }
    else if (Password.value == null || Password.value == ""){
        Password.value = "";
        return alert("ERRO digite sua senha");
    }
    else{
        Password.value = "";
        Email.value = "";
        return SingMenu.style.display = "none";
    }
}