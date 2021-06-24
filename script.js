let MC = document.querySelector(".modal-container");
let trash = document.querySelector(".trash-option");
let redeem = document.querySelector(".redeem-option");
let history = document.querySelector(".history-option");
let trashVisible=true;
let redeemVisible=false;
let historyVisible=false;
trash.addEventListener("click",function(){
    if(trashVisible==false){
        let modal = `<div class="modal">
        <h1>hello</h1>
    </div>`
        MC.innerHTML=modal;
        trashVisible=true;
        redeemVisible=false;
        historyVisible=false;
    }
});

redeem.addEventListener("click",function(){
    if(redeemVisible==false){
        let modal = `<div class="modal">
        <h1>hellor</h1>
    </div>`
        MC.innerHTML=modal;
        trashVisible=false;
        redeemVisible=true;
        historyVisible=false;
    }
});
history.addEventListener("click",function(){
    if(historyVisible==false){
        let modal = `<div class="modal">
        <h1>hellhis</h1>
    </div>`
        MC.innerHTML=modal;
        trashVisible=false;
        redeemVisible=false;
        historyVisible=true;
    }
});

let video = document.querySelector("video");
let constraints = {video : true};
navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream){
    video.srcObject=mediaStream;
});




