//your JS code here. If required.
const p = document.querySelector("#status");
const btn = document.querySelector("#enterBtn");

btn.addEventListener("click",()=>{
    console.log(p.tagName);
	p.innerHTML = "<h1>Enter the Metaverse<h1>";
})