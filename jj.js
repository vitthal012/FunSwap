function swap(){
    let c=document.getElementById("num1").value;
    document.getElementById("num1").value = document.getElementById("num2").value;
    document.getElementById("num2").value = c;
}
function reveal(){
    document.getElementById("swp").innerHTML='<button id="swapp" type="submit">Swap</button>';
    document.querySelector("#swapp").addEventListener("click", swap);
}
document.querySelector("#reveal").addEventListener("click", reveal);