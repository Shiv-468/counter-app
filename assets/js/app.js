const count = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const countSave = document.getElementById("countSave");

addBtn.addEventListener("click",() =>{
    count.innerHTML = +count.innerHTML+1;
    saveBtn.classList.remove("disable")
})
saveBtn.addEventListener("click",() =>{
    if(count.innerHTML==0){
        saveBtn.classList.add("disable")
    }
    else{
        if(countSave.innerHTML==0){
            countSave.innerHTML= count.innerHTML
        }
        else{
            countSave.innerHTML= countSave.innerHTML+','+count.innerHTML
        }
    }
    count.innerHTML=0

})