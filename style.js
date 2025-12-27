let cell1=document.querySelector('.item1');

cell1.addEventListener('mouseover',function(){
    cell1.style.backgroundColor='purple';
    cell1.style.cursor='pointer';
});
cell1.addEventListener('mouseout',function(){
    cell1.style.backgroundColor='thistle';
    cell1.style.cursor='default';
});

let cell2=document.querySelector('.item2');

cell2.addEventListener('mouseover',function(){
    cell2.style.backgroundColor='brown';
});
cell2.addEventListener('mouseout',function(){
    cell2.style.backgroundColor='aliceblue';
}); 
                
let cell3=document.querySelector('.item3');
cell3.addEventListener('mouseover',function(){
    cell3.style.backgroundColor='green';
    cell3.style.cursor ='cell';
});     
cell3.addEventListener('mouseout',function(){
    cell3.style.backgroundColor='beige';
    cell3.style.cursor='default';
});

let cell4=document.querySelector('.item4');                    
cell4.addEventListener('mouseover',function(){
    cell4.style.backgroundColor='orange';
    cell4.style.cursor='wait';
});
cell4.addEventListener('mouseout',function(){
    cell4.style.backgroundColor='antiquewhite';
    cell4.style.cursor='default';
});