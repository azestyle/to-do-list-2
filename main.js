let form=document.querySelector('.form');
console.log(form);
let planhdr=document.querySelector('.tittle');
let plantxt=document.querySelector('.textplan');
let planbody=document.querySelector('.plan-body')

form.addEventListener('submit',(el)=>{
    el.preventDefault();
    Handleplan(planhdr,plantxt);
});

function Handleplan(hdr,text){
    let handlediv=document.createElement('div');
    handlediv.classList.add('handlediv')
    if(hdr.value.trim()!==''&& text.value.trim()!==''){
      handlediv.innerHTML=`<h1>${hdr.value}</h1>
                           <textarea disabled class="headertxtarea">${text.value}</textarea> 
                           <div> 
                           <button class="edit">Məlumatı yenilə</button>
                           <button class="delete">Listi sil</button>
                           </div>`
       
        handlediv.querySelector('.delete').addEventListener('click',()=>{
            handlediv.remove();
        })                   

       handlediv.querySelector('.edit').addEventListener('click',()=>{
        let headertxtare=handlediv.querySelector('.headertxtarea');
        if(headertxtare.disabled){
            headertxtare.disabled=false
        }else{
            headertxtare.disabled=true
        }
       }) ;                   
     planbody.append(handlediv);
     hdr.value='';
     text.value='';
    }
    
}