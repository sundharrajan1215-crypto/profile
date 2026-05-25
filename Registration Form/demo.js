const form=document.querySelector("#regis");
const email=document.querySelector("#email");
const username=document.querySelector("#username");
const password=document.querySelector("#password");
const Cpassword=document.querySelector("#cpassword");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    ValidInputs();
})
function ValidInputs()
{
    const emailVal=email.value.trim();
    const usernameVal=username.value.trim();
    const passwordVal=password.value.trim();
    const CpasswordVal=Cpassword.value.trim();
    if(usernameVal===''){
        SetError(username,"User name required");
    }
    else{
        SetSuccess(username);
    }
    if(emailVal===''){
        SetError(email,"email required");

    }
    else if(!validateEmail(email)){
        SetError(email,"please enter a valid email.");
    }
    else{
        SetSuccess(email);
    }
    if(passwordVal==='')
    {
        SetError(password,"password is required");
    }
    else if(passwordVal.length<8){
        SetError(password,"password must be atleast 8 characters");
    }
    else
    {
        SetSuccess(password);
    }
    if(CpasswordVal!==passwordVal)
    {
        SetError(Cpassword,"password doesn't match");
    }
    else if(CpasswordVal==='')
    {
        SetError(Cpassword,"password is required");
    }
    else
    {
        SetSuccess(Cpassword);
    }
}
function SetError(element,message)
{
  const InputGroup=element.parentElement;
  const errorElement=InputGroup.querySelector('.error');
  errorElement.innerText=message;
  InputGroup.classList.add('error');
  InputGroup.classList.remove('success');
}
function SetSuccess(element)
{
  const InputGroup=element.parentElement;
  const errorElement=InputGroup.querySelector('.error');
  errorElement.innerText='';
  InputGroup.classList.add('success');
  InputGroup.classList.remove('error');
}
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};


