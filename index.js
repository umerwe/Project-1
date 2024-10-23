let heroList = document.getElementById('hero-list');
let heroText = document.getElementById('hero-text');
function alertName(){
    alert('This Website is developed by Umer Farooq Shahi');
}
function alertNumber(){
    alert(123);
}
function showVariableName(){
    heroList.innerHTML = 
    `<li>A variable name can't contain any spaces.</li>
     <li>Through a variable name can't be any of JavaScript keywords, it can contain keywords.Forexample,userAlert and myVar.</li> 
     <li>Capital letter are fine,but be careful Variable names are case sensitive. A rose is not a Rose. If you assign the string 'Floribundas' to the variable rose and then ask Javascript for the value assigned to Rose, you will come up empty.</li>`
}
function showCamelCase(){
    heroList.innerHTML = 
    `<li>goodProgrammer</li>
    <li>softSolutions</li>
    <li>fastFood</li>`
}
function sum2Numbers(){
    heroText.innerHTML = 
    `<p>let num1 = 2;</p>
     <p>let num2 = 5;</p>
     <p  style="margin-bottom: 0;">let sumNum = num1+num2;</p>`;
     heroList.innerHTML = 7;
}
function subtract2Numbers(){
    heroText.innerHTML = 
    `<p>let num1 = 5;</p>
     <p>let num2 = 2;</p>
     <p  style="margin-bottom: 0;">let sumNum = num1-num2;</p>`;
     heroList.innerHTML = 3;
}
function multiply2Numbers(){
    heroText.innerHTML = 
    `<p>let num1 = 5;</p>
     <p>let num2 = 2;</p>
     <p  style="margin-bottom: 0;">let sumNum = num1*num2;</p>`;
     heroList.innerHTML = 10;
}
function divide2Numbers(){
    heroText.innerHTML = 
    `<p>let num1 = 10;</p>
     <p>let num2 = 2;</p>
     <p  style="margin-bottom: 0;">let sumNum = num1/num2;</p>`;
     heroList.innerHTML = 5;
}



//Clear Statement
function clearStatement(){
    heroText.innerHTML = '';
}
// Clear Output
function clearOutput(){
    heroList.innerHTML = '';
}