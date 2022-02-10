function validate() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    if(name==""){
        alert(" Please enter name ");
        return false;
    }
    if(mobile="")
    {
        alert("Mobile is a required field");
        return false;
    }
    else if(isNaN(mobile) || mobile.length != 10){
        alert("Mobile must be a 10 digit number");
        return false;
    }
    else{
        alert("Data submitted successfully");
    }
}