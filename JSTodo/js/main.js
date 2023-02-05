const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list")

const likeButtons= document.querySelectorAll(".like")

function addItem(){
    if(inputText.value.trim()==="") return;


    //like
    const like= document.createElement("span");
    const likeIcon = document.createElement("i")
    like.classList.add("like")
    likeIcon.classList.add("material-symbols-outlined")
    likeIcon.innerText = "favorite"
    like.appendChild(likeIcon)


    //item
    const item= document.createElement("span");
    item.classList.add("item")
    item.innerText = inputText.value;


    //manage
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i")
    const clearIcon = document.createElement("i")
    checkIcon.classList.add("material-symbols-outlined","check")
    clearIcon.classList.add("material-symbols-outlined","clear")
    checkIcon.innerText = "check"
    clearIcon.innerText = "clear"
    manage.classList.add("manage")
    manage.appendChild(checkIcon)
    manage.appendChild(clearIcon)


    //event
    like.addEventListener("click",(e)=>{
        const target = e.target
        if(target.innerText === "favorite"){
            target.innerText = "favorite"
        }else {
            target.innerText = "favoirte"

        }
        console.log(e)
    })

    const li = document.createElement("li");
    li.appendChild(like)
    li.appendChild(item)
    li.appendChild(manage)
    list.appendChild(li)

    inputText.value = ""
    inputText.focus()
}

inputText.addEventListener("keypress", e => {
    if ( e.keyCode === 13){
        addItem()
    }
})



addButton.addEventListener("click",addItem)