var images=document.querySelectorAll('img');
images.forEach((i)=>{
    i.addEventListener('click',()=>{
        i.classList.toggle('border');
        i.classList.toggle('border-primary');
        i.classList.toggle('border-4');
        var but=document.querySelector('button');
        var sel=document.querySelectorAll('.border');
        if(sel.length===1){ 
            if(sel[0].getAttribute('src')=='img/lion.jpeg'){
                but.setAttribute('value','1');
            }
            else{
                but.setAttribute('value',0);
            }
        }
        else{
            but.setAttribute('value',0);
        }
    })
})

