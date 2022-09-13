var getcontainer = document.querySelector(".container");
var getoption = document.getElementById("point");

var pointidx = 0;

getcontainer.addEventListener("click",function(e){
    e.preventDefault();
    
     pointidx++;

    let cx = e.clientX;
    let cy = e.clientY;
    
    let elementcx = e.target.offsetLeft;
    let elementcy = e.target.offsetTop;

    let curcx = cx - elementcx;
    let curcy = cy - elementcy;

    let point = document.createElement("span");
    point.id = pointidx;
    point.classList.add("point");

    point.style.left = `${curcx}px`;
    point.style.top = `${curcy}px`;

    console.log(getoption.value)
    if(getoption.value === 'circle'){
        point.style.borderRadius = "50%";
    }else if(getoption.value === 'square'){
        point.style.borderRadius = "0";
    }

    e.target.appendChild(point);  
    removepoint(e);
})

function removepoint(e){
    if(e.target.id > 0){
       e.target.remove();
    }
}