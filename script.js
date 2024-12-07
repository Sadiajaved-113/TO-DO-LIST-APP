const searchbox = document.querySelector(".search-box input");
const btn = document.querySelector(".search-box button");
const list = document.querySelector("#list");

function addTask(){
    if(searchbox.value == ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = searchbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.addEventListener("click", function() {
            list.removeChild(li);
        });
    }
}
btn.addEventListener("click", () => {
     addTask(searchbox.value);
     searchbox.value = '';
});

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");  
    }
});
