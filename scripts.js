const num = document.querySelector(".count");
/*const down_btn = document.querySelector(".down");
const reset_count = document.querySelector(".reset");
const up_btn = document.querySelector(".up");*/
const buttons = document.querySelector(".buttons");


buttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains("down")){
        num.innerHTML--;
        setColor();

    }
    if(e.target.classList.contains("up")){
        num.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains("reset")){
        num.innerHTML=0;
        setColor();
    }
    
})
function setColor(){
    if(num.textContent > 0){
        num.style.color="green";
    }else if(num.textContent < 0){
        num.style.color="red";
    }else{
        num.style.color = "black";
    }
}
//console.log(up_btn);

/*up_btn.addEventListener("click",()=>{
    num.innerHTML++;
})
down_btn.addEventListener("click",()=>{
    num.innerHTML--;
})
reset_count.addEventListener("click",()=>{
    num.innerHTML=0;
})*/
