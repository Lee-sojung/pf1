const tab = document.querySelector("#community .wrap");
const btns = tab.querySelectorAll("#tabbtns li");
const boxs = tab.querySelectorAll(".container div");

btns.forEach((el,index)=>{
    
    el.addEventListener("click", (e)=>{
        e.preventDefault();

        activation(btns, index);
        activation(boxs, index);

    });
});

function activation(lists, index){
    for(let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}
