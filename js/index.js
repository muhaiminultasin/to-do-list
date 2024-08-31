let inputBox = document.querySelector("#input-box");
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");
let count = document.querySelector("#count")


let total ;
addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(inputBox.value == "") {
        alert("Write somthing on text box");
    } else{
       list.innerHTML += `<li id="to-do-item" class="flex mt-5">
                    <div id="item-text" class="w-[60%] font-bold">${inputBox.value}</div>
                    <div id="items-button" class="w-[40%] h-[30px] flex gap-5">
                        <button onclick="" class="w-[50px] bg-green-500 hover:bg-green-400 text-white rounded" id="delete">del</button>
                        <button onclick="" class="w-[50px] bg-green-500 hover:bg-green-400 text-white rounded" id="edit">ed</button>
                        <button onclick="" class="w-[50px] bg-green-500 hover:bg-green-400 text-white rounded" id="done">done</button>
                    </div>
                </li>`

        inputBox.value = ""; 
        total = list.children.length;
        count.innerHTML = `Total : ${total}`;
    }
 
});


list.addEventListener("click", (e) => {
    let target = e.target;
    if(target.id == "delete") {
        target.parentElement.parentElement.remove();
        count.innerHTML = `Total : ${total = total -1}`;
    } else if(target.id == "done") {
        target.parentElement.parentElement.style = "text-decoration-line: line-through;";
    }
})