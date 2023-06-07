let colorchane = document.getElementById('colorSelect');
let mybutton =document.getElementById('button');
let options =document.querySelectorAll('.mylist');

mybutton.addEventListener('click',()=>{
    colorchane.style.color = colorchane.value;
});
