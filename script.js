const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");

}
showTask();
function updateCountdown() {
    const now= new Date();
    const nextYear= now.getFullYear()+1;
    const newYear= new Date(`January 1, ${nextYear} 00:00:00`);
    const diff= newYear-now;
    if (diff <= 0) {
        document.getElementById("countdown").innerText="🎊 Happy New Year!";
        return;
    }
    const days= Math.floor(diff/(1000 * 60 * 60 * 24));
    const hours= Math.floor((diff/(1000*60*60))%24);
    const minutes= Math.floor((diff/(1000*60))%60);
    const seconds= Math.floor((diff/1000)%60);
    document.getElementById("countdown").innerText=
    ` ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);