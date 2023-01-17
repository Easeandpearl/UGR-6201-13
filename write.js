

// function validateForm() {
//     let x = document.forms[0]["fname","lname","email","service","day for appointment","time for appointment"].value;
//     if (x == "") {
//       alert("Information must be filled out");
//       return false;
//     }
// }
function myFunction() {
    document.getElementById("btn").submit();
} 

const forms = document.getElementsByClassName('forms')[0];
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const service = document.getElementById('service');
const date = document.getElementById('date');
const time = document.getElementById('time');



let popup = document.getElementById("popup");


function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

forms.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    openPopup();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText= '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const serviceValue = service.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();

    if (fnameValue === ''){
        setError(fname, 'First name is required');
    } else{
        setSuccess(fname);
    }

    if (lnameValue === ''){
        setError(lname, 'Last name is required');
    } else{
        setSuccess(lname);
    }

    if (emailValue === ''){
        setError(email, 'Email is required');
    } else{
        setSuccess(email);
    }

    if(serviceValue === ''){
        setError(service, 'Please include the service you need');
    } else{
        setSuccess(service);
    }

    if(dateValue === ''){
        setError(date, 'Specify the date for your service');
    } else{
        setSuccess(date);
    }

    if(timeValue === ''){
        setError(time, 'Specify time for your service');
    } else{
        setSuccess(time);
    }

}
