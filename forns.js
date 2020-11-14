// var smail = document.getElementById("semail");
// var spswd = document.getElementById("password1");
// var spswd2 = document.getElementById("password2");
// var phone = document.getElementById("phone");
// dddd
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var mob = document.getElementById("mob");
var cnpwd=document.getElementById("cnpwd");
// let error = document.getElementById("error");
// let name = document.getElementById("name");
// let pass = document.getElementById("pass");

function jvalidate()
{
    var checkmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var pswr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var mobno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    

    if(checkmail.test(email.value)!="1")
    {
        
        window.alert("Email Is Invalid");
        return false;
    }
    else if(pwd.value=="")
    {
        window.alert("INSERT YOUR PASSWORD");
        return false;
    }
    else
    {
        // window.alert("validation Success");
        return true;
    }
    
}