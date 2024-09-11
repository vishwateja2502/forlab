const form=document.getElementById('form');
const name1=document.getElementById('name1');
const name2=document.getElementById('name2');


form.addEventListener('submit' ,function(e){
    e.preventDefault();
    const name1value=name1.value;
    const name2value=name2.value;

    localStorage.setItem('name-1', name1value);
    localStorage.setItem('name-2',name2value);

    window.location.href="WWCD.html";
})


const firstname=localStorage.getItem('name-1');
const secondname=localStorage.getItem('name-2');

name1.textContent=firstname;
name2.textContent=secondname;