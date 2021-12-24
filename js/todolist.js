


const liveToastBtn=document.querySelector("#liveToastBtn");
const liveToast=document.querySelector("#liveToast");
const userForm=document.querySelector("#userForm");
const task=document.querySelector("#task");
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const list=document.querySelector("#list");
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
userForm.addEventListener('submit',formHandler);




function formHandler(event){

        event.preventDefault();
        const isEmpty = str => !str.trim().length;
      

 
        if(isEmpty(task.value)){
        
              $('.error').toast('show');
               
            
           
       
        }else{
           itemsArray.push(task.value);
                localStorage.setItem('items', JSON.stringify(itemsArray));
                addItem(task.value);
                task.value=" ";
                $('.success').toast('show');
                
         
          
       
        }



}



const addItem=(task) =>{


    const LiDom=document.createElement('li');
    LiDom.textContent=task;
    LiDom.setAttribute("id","liTask");
    LiDom.classList.add("list-group-item","fon-weight-bold");
    LiDom.style="border:2px solid #F9F3DF;border-radius: 30px 30px 30px 30px;"
    
      let SubmitDelete=document.createElement('button');
    SubmitDelete.innerHTML="Sil";
    SubmitDelete.setAttribute("id","submitDelete");
    SubmitDelete.classList.add("btn","float-right","text-dark");
    SubmitDelete.style="background-color:#ECB390;"
    LiDom.appendChild(SubmitDelete);
    
    SubmitDelete.onclick= () => {
        list.removeChild(LiDom);
    const index = itemsArray.indexOf(task);
    if (index > -1) {
      itemsArray.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(itemsArray));
    }
}
   list.appendChild(LiDom);



}



   list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 

    
    
  }
});

 data.forEach((task) => {
  addItem(task);

});
