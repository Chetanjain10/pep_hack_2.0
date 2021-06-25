let MC = document.querySelector(".modal-container");
let trash = document.querySelector(".trash-option");
let redeem = document.querySelector(".redeem-option");
let history = document.querySelector(".history-option");
let trashVisible=true;
let redeemVisible=false;
let historyVisible=false;
let hists=0;
let historyData = [];
let redeemData = [];
let bid = 0;
let button= `<button class="redbtn">Redeem</button>`
redeemData[0]=["Myantra",100];
redeemData[1]=["Amazon",200];
redeemData[2]=["Flipkart",200];
let coins = document.querySelector(".coinsVal");
let conval = `<div class="valcoin">100</div>`
coins.innerHTML=conval;
if(trashVisible==true){
    let modal = `<div class="form">
      <label for="Date">Enter Date</label>
      <input type="date" id="text1" name="firstname" placeholder="Today's Date..">
  
      <label for="Weight Logged">Weight Logged</label>
      <input type="text" id="text2" name="lastname" placeholder="Your last name..">
    
      <input class="add-btn" value="Submit">
  </div>`
        MC.innerHTML=modal;
        
        let addbtn = document.querySelector(".add-btn");
        addbtn.addEventListener("click",function(){
            let dataVal = document.getElementById("text1").value;
            let pointsVal = document.getElementById("text2").value;
            if(dataVal==""){
                alert("Date is Empty!!!");
            }else if(pointsVal==""){
                alert("Weight is EMPTY!!!");
            }else if(isNaN(pointsVal)){
                alert("Enter Valid Weight quantity")
            }else{
            let txt1 = parseInt(coins.innerText);
            let txt2 = parseInt(pointsVal);
            const sum = txt1+txt2;
            coins.innerText=sum;
            console.log(coins.innerText)
            let arr = [dataVal,pointsVal];
            historyData[hists]=arr;
            for(let i=0;i<historyData.length;i++){
                console.log(historyData[i]);
            }
            hists++;
            document.getElementById("text1").value = "";
            document.getElementById("text2").value = "";
        }
        });
        trashVisible=true;
        redeemVisible=false;
        historyVisible=false;
}

trash.addEventListener("click",function(){
    if(trashVisible==false){

        let modal = `<div class="form">
        <label for="Date" class="d">Enter Date</label>
        <input type="date" id="text1" name="firstname" placeholder="Today's Date..">
    
        <label for="Weight Logged" class="d">Weight Logged</label>
        <input type="text" id="text2" name="lastname" placeholder="Your last name..">
      
        <input class="add-btn" value="Submit">
    </div>`
        MC.innerHTML=modal;
        let addbtn = document.querySelector(".add-btn");
        addbtn.addEventListener("click",function(){
            let dataVal = document.getElementById("text1").value;
            let pointsVal = document.getElementById("text2").value;
            if(dataVal==""){
                alert("Date is Empty!!!");
            }else if(pointsVal==""){
                alert("Weight is EMPTY!!!");
            }else if(isNaN(pointsVal)){
                alert("Enter Valid Weight quantity")
            }else{
            let txt1 = parseInt(coins.innerText);
            let txt2 = parseInt(pointsVal);
            const sum = txt1+txt2;
            coins.innerText=sum;
            let arr = [dataVal,pointsVal];
            historyData[hists]=arr;
            for(let i=0;i<historyData.length;i++){
                console.log(historyData[i]);
            }
            hists++;
            document.getElementById("text1").value = "";
            document.getElementById("text2").value = "";
        }
        });
        trashVisible=true;
        redeemVisible=false;
        historyVisible=false;
    }
});

redeem.addEventListener("click",function(){
    if(redeemVisible==false){
        let modal = "<ul>";
        for (let i = 0; i < redeemData.length; i++) {
        modal += "<li>" + redeemData[i][0] + "      " + redeemData[i][1] +button +"</li>";
        bid++;
        }
        modal += "</ul>";
        MC.innerHTML=modal;
        trashVisible=false;
        redeemVisible=true;
        historyVisible=false;
    }
});
history.addEventListener("click",function(){
    if(historyVisible==false){
         let modal = "<ul>";
        for (let i = 0; i < historyData.length; i++) {
            console.log(historyData[i][0]);
        modal += "<li>" + historyData[i][0]+" " + historyData[i][1]+ "</li>";
        }
        modal += "</ul>";
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




