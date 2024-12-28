let form=document.getElementById("form")
form.addEventListener(("submit"),()=>{

    event.preventDefault()
    let email=form.email.value;
    let password=form.password.value;

    if(email=="empher@gmail.com" && password=="empher@123"){
        alert("Login success ")
        window.location.href='quiz.html'
    }
    else{
        alert("invalid ")
    }
})