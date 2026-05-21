let outputscreen=document.getElementById("OU");
function display(num)
{
 outputscreen.value+=num;
 
}
function calculate()
{
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(error)
    {
        alert("Invalid");
    }
}
function Clear()
{
    outputscreen.value = '';
}
function dele()
{
    outputscreen.value= outputscreen.value.slice(0,-1);
}