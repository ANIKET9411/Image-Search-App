let button=document.querySelector("button");
let btn=document.querySelector(".btn");
let input=document.querySelector("input");
let container=document.querySelector(".container");
let key="iVF4Jb2YIhP__7x9trEAM3DEoZ_lhP9pVtZBm045cZw";
let card=[];
var count=1;
async function check(counts){
    let val=input.value;
    if(val!="")
    {
    let response=await fetch(`https://api.unsplash.com/search/photos?page=${counts}&query=${val}&client_id=${key}`);
    let data= await response.json();
    // console.log(data.results);
    card.push(data.results);
    form_card(counts-1);
    count++;
    console.log(count);
    btn.style.display="inline";
    }
    // input.value="";
}
function form_card(count){
    // console.log(card[0].length);
    card[count].forEach((ele,index)=>{
        // console.log(ele["urls"]["regular"]);
        let item=document.createElement("div");
        item.innerHTML=`<div class="image"><img src="${ele["urls"]["regular"]}"></div><div class="desc">${ele["alt_description"]}</div>`;
        container.appendChild(item);
        item.setAttribute("class","item");
    })
    container.style.display="flex";
}
button.addEventListener('click',()=>{
    container.innerHTML="";
    let c=1;
    card=[];
    check(c);
});
btn.addEventListener('click',()=>{
    console.log(count);
    check(count);
});