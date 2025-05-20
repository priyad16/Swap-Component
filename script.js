let from=document.getElementById('from-city');
let btn=document.getElementById('swap-button');
let to=document.getElementById('to-city');
let f=from.innerText;
let t=to.innerText;
btn.addEventListener('click',()=>{
    
    let temp;
    temp=f;
    f=t;
    t=temp;
    from.innerText=f;
    to.innerText=t;

});