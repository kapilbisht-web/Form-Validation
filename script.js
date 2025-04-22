var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('Submit');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length ==0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone(){
    var phone=document.getElementById('contact-phone').value;

    if(phone.length==0){
        phoneError.innerHTML='Phone no .is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML='Phone no.should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid'
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left= required - message.length;
    if(left>0){
        messageError.innerHTML=left+'more characters required';
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}
function validatedForm(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='fill all the required field'
        setTimeout(function(){
            submitError.style.display='none';
        },2000);
        return false;

    }
}
