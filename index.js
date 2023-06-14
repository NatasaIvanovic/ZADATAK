const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");
const right = document.getElementById("right");
const rightOne = document.getElementById("right1");
const fols = document.getElementById("fols");
const folsOne = document.getElementById("fols1");




form.addEventListener("submit", (e) => {
    const errors = [];

    if(username.value.trim() === ""){
        username.style.borderColor = "red";
        errors.push("please, enter username")
        fols.style.display = "block";
    } else if(username.value.trim() === "new_user" ){
        username.style.borderColor = "green";
        errors.push("Successful login!")
        right.style.display = "block";
      


    } else {
        username.style.borderColor = "red";
        errors.push("please, enter valid username")
        fols.style.display = "block";
  
       
  
    }



    if(password.value.trim() === "" ){
        password.style.borderColor = "red";
        errors.push("please, enter password")
        folsOne.style.display = "block";
  
      

    } else if(password.value.trim() === "123456789" ){
        password.style.borderColor = "green"
        errors.push("Successful login!")
        rightOne.style.display = "block";
    


    } else{
        password.style.borderColor = "red";
        errors.push("please, enter valid password") 
        folsOne.style.display = "block";

       

    }
    


    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');

    }
})
